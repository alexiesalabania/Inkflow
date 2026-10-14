import { CheckIcon, ProductsIcon, TagIcon, WarningIcon } from '@/Components/ink/Icons';
import { cardCls } from '@/Components/ink/ui';

const money = (n) => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function StatCards({ stats }) {
    const cards = [
        { label: 'Total Products', value: stats.total, Icon: ProductsIcon, tone: 'bg-blue-50 text-blue-600' },
        { label: 'Active Products', value: stats.active, Icon: CheckIcon, tone: 'bg-emerald-50 text-emerald-500' },
        { label: 'Inventory Value', value: money(stats.value), Icon: TagIcon, tone: 'bg-orange-50 text-orange-500' },
        { label: 'Low Stock', value: stats.low, Icon: WarningIcon, tone: 'bg-red-50 text-red-500' },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {cards.map(({ label, value, Icon, tone }) => (
                <div key={label} className={`${cardCls} p-5`}>
                    <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tone}`}>
                            <Icon size={18} />
                        </div>
                    </div>
                    <div className="font-display text-[26px] font-extrabold mb-0.5">{value}</div>
                    <div className="text-[13px] text-inksoft">{label}</div>
                </div>
            ))}
        </div>
    );
}
