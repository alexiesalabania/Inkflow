import { CloseIcon, TrashIcon } from '@/Components/ink/Icons';
import FieldError from '@/Components/ink/FieldError';
import { inputCls, labelCls } from '@/Components/ink/ui';
import { useEffect, useState } from 'react';

const EMPTY = { name: '', category: '', status: 'Active', price: '', stock: '', description: '' };

function Overlay({ onClose, children, width }) {
    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={onClose} />
            <div
                className={`relative w-full bg-white rounded-[22px] shadow-[0_30px_70px_-20px_rgba(15,23,42,0.35)] ${width}`}
            >
                {children}
            </div>
        </div>
    );
}

function ProductForm({ product, onClose, onSave }) {
    const editing = Boolean(product);
    const [values, setValues] = useState(
        product ? { ...product, price: String(product.price), stock: String(product.stock) } : EMPTY,
    );
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);

    const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

    const submit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setErrors({});
        try {
            await onSave(
                {
                    name: values.name.trim(),
                    category: values.category.trim(),
                    status: values.status,
                    price: parseFloat(values.price) || 0,
                    stock: parseInt(values.stock, 10) || 0,
                    description: values.description.trim(),
                },
                editing,
            );
        } catch (err) {
            setErrors(Object.keys(err.errors || {}).length ? err.errors : { form: err.message });
            setSaving(false);
        }
    };

    return (
        <Overlay onClose={onClose} width="max-w-[520px] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-bordercol">
                <h3 className="font-display font-bold text-[18px]">{editing ? 'Edit Product' : 'Add New Product'}</h3>
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-inksoft hover:bg-[#F3F4F6] hover:text-ink transition-colors duration-150"
                >
                    <CloseIcon size={16} />
                </button>
            </div>

            <form onSubmit={submit} className="px-6 py-6 flex flex-col gap-4">
                <FieldError message={errors.form} />

                <div className="flex flex-col gap-1.5">
                    <label className={labelCls}>Product name</label>
                    <input
                        type="text"
                        required
                        autoFocus
                        placeholder="e.g. Pro Writer Template Pack"
                        value={values.name}
                        onChange={set('name')}
                        className={inputCls}
                    />
                    <FieldError message={errors.name} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className={labelCls}>Category</label>
                        <input
                            type="text"
                            required
                            placeholder="e.g. Templates"
                            value={values.category}
                            onChange={set('category')}
                            className={inputCls}
                        />
                        <FieldError message={errors.category} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className={labelCls}>Status</label>
                        <select value={values.status} onChange={set('status')} className={inputCls}>
                            <option value="Active">Active</option>
                            <option value="Draft">Draft</option>
                            <option value="Out of Stock">Out of Stock</option>
                        </select>
                        <FieldError message={errors.status} />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className={labelCls}>Price (USD)</label>
                        <input
                            type="number"
                            min="0"
                            step="0.01"
                            required
                            placeholder="29.00"
                            value={values.price}
                            onChange={set('price')}
                            className={inputCls}
                        />
                        <FieldError message={errors.price} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className={labelCls}>Stock quantity</label>
                        <input
                            type="number"
                            min="0"
                            required
                            placeholder="50"
                            value={values.stock}
                            onChange={set('stock')}
                            className={inputCls}
                        />
                        <FieldError message={errors.stock} />
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className={labelCls}>Description</label>
                    <textarea
                        rows={3}
                        placeholder="Short description of this product..."
                        value={values.description}
                        onChange={set('description')}
                        className={`${inputCls} resize-none`}
                    />
                    <FieldError message={errors.description} />
                </div>

                <div className="flex items-center gap-3 mt-2">
                    <button
                        type="submit"
                        disabled={saving}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[14.5px] bg-ink text-white py-3 shadow-[0_8px_20px_-6px_rgba(15,23,42,0.35)] hover:-translate-y-px hover:shadow-[0_10px_24px_-6px_rgba(15,23,42,0.45)] transition-all duration-150 disabled:opacity-60 disabled:pointer-events-none"
                    >
                        {saving ? 'Saving…' : editing ? 'Save Changes' : 'Create Product'}
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[14.5px] bg-white text-ink border border-bordercol py-3 hover:border-[#c9c9cf] transition-all duration-150"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </Overlay>
    );
}

function DeleteConfirm({ product, onClose, onConfirm }) {
    const [busy, setBusy] = useState(false);

    return (
        <Overlay onClose={onClose} width="max-w-[400px] p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 mx-auto mb-4">
                <TrashIcon size={24} sw={1.8} />
            </div>
            <h3 className="font-display font-bold text-[17px] mb-2">Delete this product?</h3>
            <p className="text-[13.5px] text-inksoft mb-6">
                <span className="font-semibold text-ink">{product.name}</span> will be permanently removed from your
                catalog. This action can't be undone.
            </p>
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    disabled={busy}
                    onClick={async () => {
                        setBusy(true);
                        await onConfirm();
                    }}
                    className="flex-1 rounded-full font-semibold text-[14px] bg-red-500 text-white py-3 hover:-translate-y-px hover:shadow-[0_8px_20px_-6px_rgba(239,68,68,0.45)] transition-all duration-150 disabled:opacity-60 disabled:pointer-events-none"
                >
                    {busy ? 'Deleting…' : 'Delete'}
                </button>
                <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 rounded-full font-semibold text-[14px] bg-white text-ink border border-bordercol py-3 hover:border-[#c9c9cf] transition-all duration-150"
                >
                    Cancel
                </button>
            </div>
        </Overlay>
    );
}

/** Create/edit modal + delete confirm + toast. Render once per page. */
export default function ProductDialogs({ ui, actions }) {
    const { createProduct, updateProduct, deleteProduct } = actions;

    return (
        <>
            {ui.form && (
                <ProductForm
                    // remount when switching between products so the form resets
                    key={ui.form.product?.id ?? 'new'}
                    product={ui.form.product}
                    onClose={ui.closeForm}
                    onSave={async (values, editing) => {
                        if (editing) await updateProduct(ui.form.product.id, values);
                        else await createProduct(values);
                        ui.showToast(editing ? 'Product updated successfully' : 'Product created successfully');
                        ui.closeForm();
                    }}
                />
            )}

            {ui.target && (
                <DeleteConfirm
                    product={ui.target}
                    onClose={ui.closeDelete}
                    onConfirm={async () => {
                        try {
                            await deleteProduct(ui.target.id);
                            ui.showToast('Product deleted');
                        } catch (e) {
                            ui.showToast('Could not delete product');
                        }
                        ui.closeDelete();
                    }}
                />
            )}

            {ui.toast && (
                <div className="fixed bottom-6 right-6 z-[60] bg-ink text-white text-[13.5px] font-semibold px-5 py-3 rounded-full shadow-[0_10px_25px_-8px_rgba(0,0,0,0.4)]">
                    {ui.toast}
                </div>
            )}
        </>
    );
}
