import Logo from '@/Components/ink/Logo';
import SiteFooter from '@/Components/ink/SiteFooter';
import { btnOutline, btnPrimary } from '@/Components/ink/ui';
import { Link } from '@inertiajs/react';

/**
 * Shared chrome for the Login and Sign-up pages:
 * sticky top nav + centered split layout + footer.
 */
export default function AuthShell({ navHint, navLabel, navHref, navVariant = 'primary', children }) {
    return (
        <div className="bg-[#F9FAFB] text-ink font-sans antialiased leading-relaxed min-h-screen flex flex-col">
            <nav className="sticky top-0 z-50 bg-[#F9FAFB]/85 backdrop-blur-md">
                <div className="max-w-[1180px] mx-auto px-7 flex items-center justify-between h-[76px]">
                    <Logo />
                    <div className="flex items-center gap-4">
                        <span className="hidden sm:inline text-inksoft text-[14.5px] font-medium">{navHint}</span>
                        <Link
                            href={navHref}
                            className={`${navVariant === 'primary' ? btnPrimary : btnOutline} text-[14.5px] px-5 py-2.5`}
                        >
                            {navLabel}
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="flex-1 flex items-center justify-center px-5 py-10 md:py-14">
                <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center">
                    {children}
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}
