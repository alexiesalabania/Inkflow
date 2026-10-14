import ProductDialogs from '@/Components/products/ProductDialogs';
import ProductsPanel from '@/Components/products/ProductsPanel';
import StatCards from '@/Components/products/StatCards';
import { PlusIcon } from '@/Components/ink/Icons';
import { btnPrimary } from '@/Components/ink/ui';
import useProductUI from '@/hooks/useProductUI';
import useProducts from '@/hooks/useProducts';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function ProductsPage() {
    const data = useProducts();
    const ui = useProductUI();
    const [search, setSearch] = useState('');

    return (
        <DashboardLayout active="products" search={search} onSearch={setSearch} onNew={ui.openNew}>
            <Head title="Product Management — Inkflow" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                    <h1 className="font-display font-extrabold tracking-[-0.02em] text-[26px] md:text-[30px] mb-1.5">
                        Product Management
                    </h1>
                    <p className="text-inksoft text-[14.5px]">
                        Create, view, update, and delete products available on your store.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={ui.openNew}
                    className={`${btnPrimary} sm:hidden text-[13.5px] px-4 py-2.5`}
                >
                    <PlusIcon size={14} />
                    New Product
                </button>
            </div>

            <StatCards stats={data.stats} />

            <ProductsPanel
                title="All Products"
                products={data.products}
                loading={data.loading && !data.loaded}
                search={search}
                ui={ui}
            />

            <ProductDialogs ui={ui} actions={data} />
        </DashboardLayout>
    );
}
