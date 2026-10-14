import ProductDialogs from '@/Components/products/ProductDialogs';
import ProductsPanel from '@/Components/products/ProductsPanel';
import StatCards from '@/Components/products/StatCards';
import { AnalyticsIcon, BrushIcon, GlobeIcon, PlusIcon, ProductsIcon } from '@/Components/ink/Icons';
import { cardCls } from '@/Components/ink/ui';
import useProductUI from '@/hooks/useProductUI';
import useProducts from '@/hooks/useProducts';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useMemo, useState } from 'react';

const money = (n) => '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 });

/** Inventory value grouped by category, computed live from the shared product store. */
function CategoryChart({ products }) {
    const rows = useMemo(() => {
        const totals = {};
        products.forEach((p) => {
            totals[p.category] = (totals[p.category] || 0) + p.price * p.stock;
        });
        return Object.entries(totals)
            .map(([category, value]) => ({ category, value }))
            .sort((a, b) => b.value - a.value)
            .slice(0, 6);
    }, [products]);

    const max = Math.max(1, ...rows.map((r) => r.value));

    return (
        <div className={`lg:col-span-2 ${cardCls} p-6`}>
            <div className="mb-6">
                <h3 className="font-display font-bold text-[16px] mb-1">Inventory by Category</h3>
                <p className="text-[13px] text-inksoft">Stock value across your product categories</p>
            </div>

            {rows.length === 0 ? (
                <div className="h-[220px] rounded-xl bg-[#F9FAFB] border border-dashed border-bordercol flex flex-col items-center justify-center gap-2.5">
                    <div className="w-11 h-11 rounded-full bg-white border border-bordercol flex items-center justify-center text-gray-300">
                        <AnalyticsIcon size={20} />
                    </div>
                    <p className="text-[13px] text-gray-400 font-medium">No inventory data yet</p>
                    <p className="text-[12px] text-gray-400 max-w-[220px] text-center">
                        Add your first product to see its category breakdown here.
                    </p>
                </div>
            ) : (
                <div className="flex flex-col gap-4 min-h-[220px] justify-center">
                    {rows.map((r) => (
                        <div key={r.category}>
                            <div className="flex items-center justify-between text-[13px] mb-1.5">
                                <span className="font-semibold text-ink">{r.category}</span>
                                <span className="text-inksoft">{money(r.value)}</span>
                            </div>
                            <div className="h-2.5 rounded-full bg-[#F3F4F6] overflow-hidden">
                                <div
                                    className="h-full rounded-full bg-ink transition-all duration-500"
                                    style={{ width: `${Math.max(2, (r.value / max) * 100)}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function QuickAction({ Icon, title, text, primary, onClick, href }) {
    const cls =
        'w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border border-bordercol hover:border-[#c9c9cf] hover:-translate-y-px transition-all duration-150 no-underline';
    const body = (
        <>
            <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                    primary ? 'bg-ink text-white' : 'bg-[#F3F4F6] text-ink'
                }`}
            >
                <Icon size={15} />
            </div>
            <div>
                <div className="text-[13.5px] font-semibold text-ink">{title}</div>
                <div className="text-[11.5px] text-inksoft">{text}</div>
            </div>
        </>
    );
    if (onClick)
        return (
            <button type="button" onClick={onClick} className={cls}>
                {body}
            </button>
        );
    return (
        <Link href={href} className={cls}>
            {body}
        </Link>
    );
}

export default function Dashboard() {
    const user = usePage().props.auth.user;
    const data = useProducts();
    const ui = useProductUI();
    const [search, setSearch] = useState('');
    const firstName = user?.name?.split(' ')[0];

    return (
        <DashboardLayout active="dashboard" search={search} onSearch={setSearch} onNew={ui.openNew}>
            <Head title="Dashboard — Inkflow" />

            <div className="mb-8">
                <h1 className="font-display font-extrabold tracking-[-0.02em] text-[26px] md:text-[30px] mb-1.5">
                    Welcome back{firstName ? `, ${firstName}` : ''}
                </h1>
                <p className="text-inksoft text-[14.5px]">Here's an overview of your store and products.</p>
            </div>

            <StatCards stats={data.stats} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                <CategoryChart products={data.products} />

                <div className={`${cardCls} p-6`}>
                    <h3 className="font-display font-bold text-[16px] mb-5">Quick Actions</h3>
                    <div className="flex flex-col gap-3">
                        <QuickAction
                            primary
                            Icon={PlusIcon}
                            title="Add a new product"
                            text="Create a product in seconds"
                            onClick={ui.openNew}
                        />
                        <QuickAction
                            Icon={ProductsIcon}
                            title="Manage all products"
                            text="Edit, filter and delete"
                            href={route('products')}
                        />
                        <QuickAction Icon={GlobeIcon} title="Connect a domain" text="Use your own custom URL" href="#" />
                        <QuickAction Icon={BrushIcon} title="Customize theme" text="Change colors and fonts" href="#" />
                    </div>
                </div>
            </div>

            <ProductsPanel
                title="Recent Products"
                products={data.products}
                loading={data.loading && !data.loaded}
                search={search}
                limit={5}
                viewAllHref={route('products')}
                ui={ui}
            />

            <ProductDialogs ui={ui} actions={data} />
        </DashboardLayout>
    );
}
