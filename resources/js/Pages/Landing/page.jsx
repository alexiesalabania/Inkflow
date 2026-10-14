import {
    BoltIcon,
    BrushIcon,
    CodeIcon,
    DownloadIcon,
    GlobeIcon,
    InfinityIcon,
    LayoutIcon,
    PenIcon,
    PlusIcon,
    ProductHuntIcon,
    SearchIcon,
    SettingsIcon,
    AnalyticsIcon,
    TypeIcon,
} from '@/Components/ink/Icons';
import Logo from '@/Components/ink/Logo';
import SiteFooter from '@/Components/ink/SiteFooter';
import { btnPrimary, glassCard, gradientBg } from '@/Components/ink/ui';
import { Head, Link, usePage } from '@inertiajs/react';

const FEATURES = [
    { Icon: TypeIcon, title: 'Distraction-Free Editor', text: 'A clean writing canvas that keeps you focused on your words, not the interface.' },
    { Icon: CodeIcon, title: 'Built for Tech & Creators', text: 'Markdown, code blocks, and syntax highlighting designed for technical writing.' },
    { Icon: SearchIcon, title: 'SEO & Analytics Included', text: 'Every post ships optimized, with real-time insight into what readers love.' },
    { Icon: DownloadIcon, title: 'Instant Markdown Export', text: 'Export any post as clean Markdown in a single click, anytime you need it.' },
    { Icon: GlobeIcon, title: 'Custom Domains & Themes', text: 'Bring your own domain and style your blog with elegant, flexible themes.' },
    { Icon: BoltIcon, title: 'Fast API Integration', text: 'Connect your blog to any stack with a lightweight, well-documented API.' },
    { Icon: BrushIcon, title: 'Playful Customization', text: 'Tweak colors, fonts, and layout to make your blog truly feel like yours.' },
    { Icon: InfinityIcon, title: 'Unlimited Posts & Drafts', text: 'No caps, no limits — write as many posts and drafts as your ideas demand.' },
];

const POSTS = [
    ['Designing for simplicity', 'Oct 10 · 4 min read', 'Live', true],
    ['Why minimal tools win', 'Oct 6 · 6 min read', 'Draft', true],
    ['Writing in public', 'Sep 29 · 3 min read', 'Live', false],
];

const MENU = [
    [PenIcon, 'New Draft'],
    [AnalyticsIcon, 'Analytics'],
    [LayoutIcon, 'Open Site'],
];

const NAV_LINK =
    'text-inksoft no-underline text-[14.5px] font-medium hover:text-ink transition-colors duration-200';

export default function Landing() {
    const user = usePage().props.auth?.user;
    // Signed-in visitors go straight to the dashboard instead of sign-up.
    const startHref = user ? route('dashboard') : route('register');

    return (
        <div className="bg-[#F9FAFB] text-ink font-sans antialiased leading-relaxed">
            <Head title="Inkflow — A modern blog system" />

            {/* NAV */}
            <nav className="sticky top-0 z-50 bg-[#F9FAFB]/85 backdrop-blur-md">
                <div className="max-w-[1180px] mx-auto px-7 flex items-center justify-between h-[76px]">
                    <Logo />
                    <ul className="hidden md:flex items-center gap-8 list-none">
                        <li><a href="#features" className={NAV_LINK}>Features</a></li>
                        <li><a href="#pricing" className={NAV_LINK}>Pricing</a></li>
                        <li><a href="#docs" className={NAV_LINK}>Docs</a></li>
                        <li><a href="#twitter" className={NAV_LINK}>Twitter/X</a></li>
                    </ul>
                    <div className="flex items-center gap-5">
                        {!user && (
                            <Link href={route('login')} className={`${NAV_LINK} hidden sm:inline`}>
                                Log in
                            </Link>
                        )}
                        <Link href={startHref} className={`${btnPrimary} text-[14.5px] px-[22px] py-[11px]`}>
                            {user ? 'Dashboard' : 'Start Writing'}
                        </Link>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <header className="pt-[54px] md:pt-[78px] pb-10 text-center">
                <div className="max-w-[1180px] mx-auto px-7">
                    <h1 className="font-display font-extrabold tracking-[-0.03em] text-[36px] md:text-[52px] lg:text-[68px] leading-[1.04] mx-auto mt-[26px] mb-5 max-w-[820px]">
                        A modern blog system for your next big ideas
                    </h1>
                    <p className="text-inksoft text-lg max-w-[560px] mx-auto mb-8">
                        Write, publish, and grow — with a distraction-free editor, built-in SEO, and analytics that
                        actually matter. No clutter, just your words.
                    </p>
                    <div className="flex items-center justify-center gap-3.5 flex-wrap mb-14">
                        <Link href={startHref} className={`${btnPrimary} text-[14.5px] px-[22px] py-[11px]`}>
                            Start Free Trial
                        </Link>
                        <a
                            href="#"
                            className="inline-flex items-center gap-1.5 border border-[#FDE4D8] bg-[#FFF7F3] text-[#E8542A] rounded-[10px] px-3 py-1.5 text-[13px] font-bold no-underline"
                        >
                            <ProductHuntIcon size={14} />
                            Featured on Product Hunt
                        </a>
                    </div>
                </div>

                {/* Product showcase */}
                <div className="max-w-[1080px] mx-auto px-5">
                    <div
                        className={`relative rounded-[20px] md:rounded-[28px] overflow-hidden h-[420px] md:h-[480px] lg:h-[560px] shadow-[0_30px_70px_-20px_rgba(15,23,42,0.35)] ${gradientBg}`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.18),transparent_60%)]" />

                        <div className="absolute top-[22px] left-1/2 -translate-x-1/2 flex items-center gap-2.5 bg-white/20 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-[10px] text-xs font-semibold">
                            <span className="w-[7px] h-[7px] rounded-full bg-white/90" />
                            <span>inkflow.app</span>
                            <span className="opacity-70">· Thu 11:22</span>
                        </div>

                        {/* Posts list card */}
                        <div
                            className={`${glassCard} scale-[0.78] sm:scale-90 md:scale-100 origin-top-left w-[280px] left-2.5 md:left-5 lg:left-14 top-[110px] md:top-[150px] p-4 text-left`}
                        >
                            <div className="flex items-center justify-between text-xs text-white/60 mb-3 pb-2.5 border-b border-white/10">
                                <span>Your Posts</span>
                                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    Published
                                </span>
                            </div>
                            {POSTS.map(([title, meta, tag, divider]) => (
                                <div
                                    key={title}
                                    className={`flex items-center justify-between py-2.5 ${divider ? 'border-b border-white/[0.06]' : ''}`}
                                >
                                    <div>
                                        <div className="text-[13px] font-semibold">{title}</div>
                                        <div className="text-[11px] text-white/50 mt-0.5">{meta}</div>
                                    </div>
                                    <span className="text-[10px] bg-white/10 px-2 py-[3px] rounded-md text-white/75">{tag}</span>
                                </div>
                            ))}
                            <div className="mt-3 w-full flex items-center justify-center gap-1.5 bg-white/10 border border-dashed border-white/25 rounded-[10px] py-2.5 text-xs font-semibold text-white/85">
                                <PlusIcon size={12} />
                                New Post
                            </div>
                        </div>

                        {/* Menubar card */}
                        <div
                            className={`${glassCard} scale-[0.78] sm:scale-90 md:scale-100 origin-top-right w-[190px] right-2.5 md:right-5 lg:right-14 top-[55px] md:top-[70px] lg:top-[86px] py-2.5 text-left`}
                        >
                            <div className="flex items-center justify-between px-3.5 pb-2.5 border-b border-white/10 text-[11px] text-white/55">
                                <span>Inkflow</span>
                                <span>v2.1</span>
                            </div>
                            {MENU.map(([Icon, label]) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-[12.5px] font-medium text-white/85 cursor-pointer hover:bg-white/[0.06]"
                                >
                                    <Icon size={14} className="opacity-75 shrink-0" />
                                    {label}
                                </div>
                            ))}
                            <div className="h-px bg-white/10 my-1.5" />
                            <div className="flex items-center gap-2.5 px-3.5 py-2.5 text-[12.5px] font-medium text-white/85 cursor-pointer hover:bg-white/[0.06]">
                                <SettingsIcon size={14} className="opacity-75 shrink-0" />
                                Settings
                            </div>
                        </div>

                        {/* Dock */}
                        <div className="absolute scale-[0.85] md:scale-100 left-1/2 bottom-3.5 md:bottom-[26px] -translate-x-1/2 flex items-center gap-2.5 bg-white/20 backdrop-blur-md px-3.5 py-2.5 rounded-[18px]">
                            {[0, 1, 2].map((i) => (
                                <div key={i} className="w-[34px] h-[34px] rounded-[10px] bg-white/25" />
                            ))}
                            <div className="w-[34px] h-[34px] rounded-[10px] bg-white flex items-center justify-center text-[#E8542A]">
                                <PenIcon size={16} sw={2.3} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* FEATURES */}
            <section id="features" className="pt-[70px] md:pt-[100px] pb-10 md:pb-[70px]">
                <div className="max-w-[1180px] mx-auto px-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-9 md:gap-y-12 gap-x-6">
                        {FEATURES.map(({ Icon, title, text }) => (
                            <div key={title} className="text-center flex flex-col items-center gap-3.5">
                                <div className="w-[52px] h-[52px] rounded-[14px] border border-bordercol bg-white flex items-center justify-center text-ink shadow-[0_4px_10px_-4px_rgba(15,23,42,0.08)]">
                                    <Icon size={22} sw={1.8} />
                                </div>
                                <h3 className="font-display text-[15.5px] font-bold tracking-[-0.01em]">{title}</h3>
                                <p className="text-[13.5px] text-inksoft max-w-[210px] font-normal">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="start" className="my-10 md:my-[100px] max-w-[1100px] mx-auto px-5">
                <div className="relative overflow-hidden bg-ink rounded-[22px] md:rounded-[28px] py-12 px-6 md:py-[70px] md:px-10 text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(94,201,240,0.18),transparent_50%),radial-gradient(circle_at_85%_80%,rgba(255,122,61,0.18),transparent_50%)]" />
                    <h2 className="relative font-display font-extrabold text-white text-[28px] md:text-[42px] mb-4">
                        Ready to share your next big idea?
                    </h2>
                    <p className="relative text-white/65 text-base mb-[30px]">
                        Join thousands of writers already publishing with Inkflow — it's free to start.
                    </p>
                    <Link
                        href={startHref}
                        className="relative inline-flex items-center gap-2 rounded-full font-semibold text-[15px] no-underline bg-white text-ink px-7 py-[13px] shadow-[0_10px_25px_-8px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-transform duration-150"
                    >
                        Start Writing for Free
                    </Link>
                </div>
            </section>

            <SiteFooter tagline iconSize={18} />
        </div>
    );
}
