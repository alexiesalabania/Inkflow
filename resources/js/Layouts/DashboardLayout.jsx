import Dropdown from '@/Components/Dropdown';
import {
    AnalyticsIcon,
    AudienceIcon,
    BellIcon,
    BoltIcon,
    DashboardIcon,
    GlobeIcon,
    MenuIcon,
    PlusIcon,
    ProductsIcon,
    SearchIcon,
    SettingsIcon,
    CloseIcon,
} from '@/Components/ink/Icons';
import Logo from '@/Components/ink/Logo';
import { btnPrimary } from '@/Components/ink/ui';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

const SECTIONS = [
    {
        title: 'Overview',
        items: [
            { key: 'dashboard', label: 'Dashboard', Icon: DashboardIcon, href: () => route('dashboard') },
            { key: 'products', label: 'Products', Icon: ProductsIcon, href: () => route('products') },
            { key: 'analytics', label: 'Analytics', Icon: AnalyticsIcon },
            { key: 'audience', label: 'Audience', Icon: AudienceIcon },
        ],
    },
    {
        title: 'Manage',
        items: [
            { key: 'domains', label: 'Domains & Themes', Icon: GlobeIcon },
            { key: 'api', label: 'API & Integrations', Icon: BoltIcon },
            { key: 'settings', label: 'Settings', Icon: SettingsIcon, href: () => route('profile.edit') },
        ],
    },
];

const navCls = (isActive) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] no-underline transition-colors duration-150 ${
        isActive ? 'bg-ink text-white font-semibold' : 'text-inksoft font-medium hover:bg-[#F3F4F6] hover:text-ink'
    }`;

function NavItem({ href, children, ...props }) {
    return href ? (
        <Link href={href} {...props}>
            {children}
        </Link>
    ) : (
        <a href="#" {...props}>
            {children}
        </a>
    );
}

function SidebarContent({ active, onNavigate }) {
    return (
        <>
            <div className="h-[76px] flex items-center px-6 border-b border-bordercol">
                <Logo href={route('dashboard')} />
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-6">
                {SECTIONS.map((section) => (
                    <div key={section.title}>
                        <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2.5">
                            {section.title}
                        </div>
                        <ul className="flex flex-col gap-1 mb-7">
                            {section.items.map(({ key, label, Icon, href }) => {
                                const isActive = key === active;
                                return (
                                    <li key={key}>
                                        {/* Pages that don't exist yet render a plain anchor */}
                                        <NavItem href={href?.()} onClick={onNavigate} className={navCls(isActive)}>
                                            <Icon size={17} />
                                            {label}
                                        </NavItem>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </nav>

            <div className="p-4 border-t border-bordercol">
                <div className="rounded-2xl bg-[#F9FAFB] border border-bordercol p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <BoltIcon size={15} />
                        <span className="text-[12.5px] font-bold">Free Plan</span>
                    </div>
                    <p className="text-[12px] text-inksoft mb-3">
                        Upgrade to unlock advanced analytics and custom domains.
                    </p>
                    <a
                        href="#"
                        className="block text-center bg-ink text-white text-[13px] font-semibold rounded-full py-2 no-underline hover:-translate-y-px transition-transform duration-150"
                    >
                        Upgrade Plan
                    </a>
                </div>
            </div>
        </>
    );
}

/**
 * Sidebar + sticky top bar shell used by Dashboard and Products.
 *
 * Props
 *  - active:             'dashboard' | 'products'
 *  - search / onSearch:  controlled top-bar search box
 *  - searchPlaceholder
 *  - onNew:              handler for the "New Product" button
 */
export default function DashboardLayout({
    active,
    search = '',
    onSearch = () => {},
    searchPlaceholder = 'Search products...',
    onNew,
    children,
}) {
    const user = usePage().props.auth.user;
    const [drawer, setDrawer] = useState(false);
    const initials = (user?.name || '?')
        .split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <div className="bg-[#F9FAFB] text-ink font-sans antialiased leading-relaxed">
            <div className="flex min-h-screen">
                {/* Desktop sidebar */}
                <aside className="hidden lg:flex flex-col w-[260px] shrink-0 border-r border-bordercol bg-white sticky top-0 h-screen">
                    <SidebarContent active={active} />
                </aside>

                {/* Mobile drawer */}
                {drawer && (
                    <div className="lg:hidden fixed inset-0 z-50">
                        <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setDrawer(false)} />
                        <aside className="absolute inset-y-0 left-0 w-[260px] flex flex-col bg-white border-r border-bordercol">
                            <button
                                type="button"
                                aria-label="Close menu"
                                onClick={() => setDrawer(false)}
                                className="absolute top-6 right-4 text-inksoft"
                            >
                                <CloseIcon size={18} />
                            </button>
                            <SidebarContent active={active} onNavigate={() => setDrawer(false)} />
                        </aside>
                    </div>
                )}

                <div className="flex-1 min-w-0">
                    {/* Top bar */}
                    <header className="sticky top-0 z-40 bg-[#F9FAFB]/85 backdrop-blur-md border-b border-bordercol">
                        <div className="h-[76px] px-5 md:px-8 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3 flex-1 max-w-[380px]">
                                <button
                                    type="button"
                                    aria-label="Open menu"
                                    onClick={() => setDrawer(true)}
                                    className="lg:hidden text-inksoft"
                                >
                                    <MenuIcon size={22} />
                                </button>
                                <div className="hidden sm:flex items-center gap-2.5 w-full bg-white border border-bordercol rounded-full px-4 py-2.5">
                                    <SearchIcon size={15} className="text-gray-400" />
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) => onSearch(e.target.value)}
                                        placeholder={searchPlaceholder}
                                        className="w-full bg-transparent text-[13.5px] placeholder:text-gray-400 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                {onNew && (
                                    <button
                                        type="button"
                                        onClick={onNew}
                                        className={`${btnPrimary} hidden sm:inline-flex text-[13.5px] px-4 py-2.5`}
                                    >
                                        <PlusIcon size={14} />
                                        New Product
                                    </button>
                                )}
                                <button
                                    type="button"
                                    aria-label="Notifications"
                                    className="relative w-9 h-9 rounded-full border border-bordercol bg-white flex items-center justify-center text-inksoft hover:text-ink transition-colors duration-150"
                                >
                                    <BellIcon size={16} />
                                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-orange-500" />
                                </button>

                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button
                                            type="button"
                                            aria-label="Account menu"
                                            className="w-9 h-9 rounded-full bg-gray-200 border border-bordercol text-[12px] font-bold text-inksoft flex items-center justify-center hover:border-[#c9c9cf] transition-colors duration-150"
                                        >
                                            {initials}
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content contentClasses="py-1 bg-white">
                                        <div className="px-4 py-2 border-b border-bordercol">
                                            <div className="text-[13px] font-semibold text-ink truncate">{user?.name}</div>
                                            <div className="text-[12px] text-inksoft truncate">{user?.email}</div>
                                        </div>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </header>

                    <main className="px-5 md:px-8 py-8 max-w-[1280px]">{children}</main>
                </div>
            </div>
        </div>
    );
}
