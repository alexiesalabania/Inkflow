import { EditIcon, PlusIcon, ProductsIcon, TrashIcon } from '@/Components/ink/Icons';
import { btnPrimary, cardCls } from '@/Components/ink/ui';
import { Link } from '@inertiajs/react';
import { useMemo, useState } from 'react';

const STATUS_STYLE = {
    Active: 'bg-emerald-50 text-emerald-600',
    Draft: 'bg-gray-100 text-gray-500',
    'Out of Stock': 'bg-red-50 text-red-500',
};

const formatPrice = (n) => (n === 0 ? 'Free' : '$' + Number(n).toFixed(2));
const initials = (name) =>
    name
        .split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

const th = 'px-6 py-3 text-[11.5px] font-semibold text-gray-400 uppercase tracking-wider';

/**
 * The products table card. Used by both the Dashboard (limit=5, "View all" link)
 * and the Products page (everything). Both talk to the same store.
 */
export default function ProductsPanel({
    title = 'All Products',
    products,
    loading,
    search = '',
    limit,
    viewAllHref,
    ui,
}) {
    const [status, setStatus] = useState('all');

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        const rows = products.filter(
            (p) =>
                (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)) &&
                (status === 'all' || p.status === status),
        );
        return limit ? rows.slice(0, limit) : rows;
    }, [products, search, status, limit]);

    return (
        <div className={`${cardCls} overflow-hidden`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-5 border-b border-bordercol">
                <h3 className="font-display font-bold text-[16px]">{title}</h3>
                <div className="flex items-center gap-3">
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="text-[12.5px] font-semibold text-inksoft bg-[#F9FAFB] border border-bordercol rounded-lg px-3 py-1.5 focus:outline-none"
                    >
                        <option value="all">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Draft">Draft</option>
                        <option value="Out of Stock">Out of Stock</option>
                    </select>
                    {viewAllHref && (
                        <Link
                            href={viewAllHref}
                            className="text-[13px] font-semibold text-inksoft hover:text-ink transition-colors duration-200"
                        >
                            View all
                        </Link>
                    )}
                </div>
            </div>

            {filtered.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-bordercol">
                                <th className={th}>Product</th>
                                <th className={th}>Category</th>
                                <th className={th}>Price</th>
                                <th className={th}>Stock</th>
                                <th className={th}>Status</th>
                                <th className={`${th} text-right`}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((p) => (
                                <tr
                                    key={p.id}
                                    className="border-b border-bordercol last:border-b-0 hover:bg-[#F9FAFB] transition-colors duration-150"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center text-[12px] font-bold text-inksoft shrink-0">
                                                {initials(p.name)}
                                            </div>
                                            <div>
                                                <div className="text-[14px] font-semibold text-ink">{p.name}</div>
                                                <div className="text-[12px] text-inksoft">
                                                    {p.description.slice(0, 40)}
                                                    {p.description.length > 40 ? '…' : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-[13.5px] text-inksoft">{p.category}</td>
                                    <td className="px-6 py-4 text-[13.5px] font-semibold text-ink">
                                        {formatPrice(p.price)}
                                    </td>
                                    <td
                                        className={`px-6 py-4 text-[13.5px] ${
                                            p.stock === 0
                                                ? 'text-red-500 font-semibold'
                                                : p.stock < 10
                                                  ? 'text-orange-500 font-semibold'
                                                  : 'text-inksoft'
                                        }`}
                                    >
                                        {p.stock}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`text-[11.5px] font-semibold px-2.5 py-1 rounded-full ${
                                                STATUS_STYLE[p.status] || 'bg-gray-100 text-gray-500'
                                            }`}
                                        >
                                            {p.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                type="button"
                                                aria-label={`Edit ${p.name}`}
                                                onClick={() => ui.openEdit(p)}
                                                className="w-8 h-8 rounded-lg border border-bordercol flex items-center justify-center text-inksoft hover:text-ink hover:border-[#c9c9cf] transition-colors duration-150"
                                            >
                                                <EditIcon size={14} />
                                            </button>
                                            <button
                                                type="button"
                                                aria-label={`Delete ${p.name}`}
                                                onClick={() => ui.askDelete(p)}
                                                className="w-8 h-8 rounded-lg border border-bordercol flex items-center justify-center text-inksoft hover:text-red-500 hover:border-red-200 transition-colors duration-150"
                                            >
                                                <TrashIcon size={14} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {filtered.length === 0 && (
                <div className="px-6 py-16 flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#F9FAFB] border border-bordercol flex items-center justify-center text-gray-300 mb-4">
                        <ProductsIcon size={24} sw={1.8} />
                    </div>
                    <h4 className="font-display font-bold text-[15px] mb-1.5">
                        {loading ? 'Loading products…' : 'No products found'}
                    </h4>
                    {!loading && (
                        <>
                            <p className="text-[13.5px] text-inksoft max-w-[320px] mb-5">
                                Try adjusting your search or filters, or add a new product to get started.
                            </p>
                            <button type="button" onClick={ui.openNew} className={`${btnPrimary} text-[13.5px] px-5 py-2.5`}>
                                <PlusIcon size={14} />
                                Add Product
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
