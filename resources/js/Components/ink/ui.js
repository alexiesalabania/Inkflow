// Shared Tailwind class strings so buttons/inputs stay identical across screens.
export const btnPrimary =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold no-underline whitespace-nowrap bg-ink text-white shadow-[0_8px_20px_-6px_rgba(15,23,42,0.35)] hover:-translate-y-px hover:shadow-[0_10px_24px_-6px_rgba(15,23,42,0.45)] transition-all duration-150';

export const btnOutline =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold no-underline whitespace-nowrap bg-white text-ink border border-bordercol hover:border-[#c9c9cf] hover:-translate-y-px transition-all duration-150';

export const inputCls =
    'w-full rounded-xl border border-bordercol bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-ink/10 focus:border-ink transition-all duration-150';

export const labelCls = 'text-[13px] font-semibold text-ink';
export const cardCls =
    'bg-white border border-bordercol rounded-2xl shadow-[0_4px_10px_-4px_rgba(15,23,42,0.06)]';

export const gradientBg =
    'bg-[radial-gradient(circle_at_15%_20%,#5EC9F0_0%,transparent_45%),radial-gradient(circle_at_70%_10%,#7B8CF8_0%,transparent_50%),radial-gradient(circle_at_85%_60%,#FF7A3D_0%,transparent_55%),radial-gradient(circle_at_25%_85%,#FFB23D_0%,transparent_55%),linear-gradient(140deg,#3F7FE0_0%,#6B5BD6_35%,#E85A2C_70%,#F6A93D_100%)]';

export const glassCard =
    'absolute bg-[#18181B]/[0.82] backdrop-blur-xl border border-white/10 rounded-[18px] text-white shadow-[0_25px_50px_-15px_rgba(0,0,0,0.5)]';
