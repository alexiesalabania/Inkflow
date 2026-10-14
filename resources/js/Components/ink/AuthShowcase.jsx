import { CheckIcon } from './Icons';
import { glassCard, gradientBg } from './ui';

function Frame({ height, side, caption, children }) {
    return (
        <div
            className={`hidden lg:flex relative rounded-[28px] overflow-hidden shadow-[0_30px_70px_-20px_rgba(15,23,42,0.35)] ${gradientBg} ${
                side === 'left' ? 'mr-10' : 'ml-10'
            }`}
            style={{ height }}
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.18),transparent_60%)]" />

            <div className="absolute top-[22px] left-1/2 -translate-x-1/2 flex items-center gap-2.5 bg-white/20 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-[10px] text-xs font-semibold">
                <span className="w-[7px] h-[7px] rounded-full bg-white/90" />
                <span>inkflow.app</span>
                <span className="opacity-70">· Thu 11:22</span>
            </div>

            {children}

            <div className="absolute bottom-8 left-10 right-10 text-white">
                <h3 className="font-display font-extrabold text-2xl mb-1.5 max-w-[320px] leading-tight">
                    {caption.title}
                </h3>
                <p className="text-white/70 text-[13.5px] max-w-[300px]">{caption.text}</p>
            </div>
        </div>
    );
}

function Testimonial({ quote, name, role }) {
    return (
        <div className={`${glassCard} w-[230px] right-10 bottom-[100px] p-4`}>
            <p className="text-[13px] leading-relaxed text-white/90 mb-3">“{quote}”</p>
            <div className="flex items-center gap-2.5 pt-3 border-t border-white/10">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-300 to-blue-400" />
                <div>
                    <div className="text-[11.5px] font-semibold">{name}</div>
                    <div className="text-[10.5px] text-white/50">{role}</div>
                </div>
            </div>
        </div>
    );
}

export function LoginShowcase() {
    return (
        <Frame
            height={640}
            side="right"
            caption={{
                title: 'Your words, beautifully published.',
                text: 'Join thousands of writers already building their audience with Inkflow.',
            }}
        >
            <div className={`${glassCard} w-[280px] left-10 top-[180px] p-4`}>
                <div className="flex items-center justify-between text-xs text-white/60 mb-3 pb-2.5 border-b border-white/10">
                    <span>Your Posts</span>
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Published
                    </span>
                </div>
                <div className="flex items-center justify-between py-2.5 border-b border-white/[0.06]">
                    <div>
                        <div className="text-[13px] font-semibold">Designing for simplicity</div>
                        <div className="text-[11px] text-white/50 mt-0.5">Oct 10 · 4 min read</div>
                    </div>
                    <span className="text-[10px] bg-white/10 px-2 py-[3px] rounded-md text-white/75">Live</span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                    <div>
                        <div className="text-[13px] font-semibold">Why minimal tools win</div>
                        <div className="text-[11px] text-white/50 mt-0.5">Oct 6 · 6 min read</div>
                    </div>
                    <span className="text-[10px] bg-white/10 px-2 py-[3px] rounded-md text-white/75">Draft</span>
                </div>
            </div>
            <Testimonial
                quote="Inkflow got out of my way so I could just write. Best decision for my blog."
                name="Maya R."
                role="Indie writer"
            />
        </Frame>
    );
}

export function SignupShowcase() {
    return (
        <Frame
            height={680}
            side="left"
            caption={{ title: 'Start publishing in minutes.', text: 'Free to start, no credit card required.' }}
        >
            <div className={`${glassCard} w-[280px] left-10 top-[170px] p-4`}>
                <div className="flex items-center justify-between text-xs text-white/60 mb-3 pb-2.5 border-b border-white/10">
                    <span>Getting Started</span>
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />2 min
                    </span>
                </div>
                <div className="flex items-center gap-2.5 py-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-400/20 border border-emerald-400 flex items-center justify-center shrink-0">
                        <CheckIcon size={10} sw={3} stroke="#34D399" />
                    </div>
                    <div className="text-[13px] font-semibold">Create your account</div>
                </div>
                <div className="flex items-center gap-2.5 py-2">
                    <div className="w-5 h-5 rounded-full border border-white/25 shrink-0" />
                    <div className="text-[13px] text-white/70">Pick a custom domain</div>
                </div>
                <div className="flex items-center gap-2.5 py-2">
                    <div className="w-5 h-5 rounded-full border border-white/25 shrink-0" />
                    <div className="text-[13px] text-white/70">Publish your first post</div>
                </div>
            </div>

            <div className={`${glassCard} w-[210px] right-10 top-[90px] p-4`}>
                <div className="text-[11px] text-white/55 mb-2">This week</div>
                <div className="flex items-end gap-2 mb-1">
                    <span className="font-display text-2xl font-extrabold">12.4k</span>
                    <span className="text-[11px] text-emerald-400 font-semibold mb-1">+18%</span>
                </div>
                <div className="text-[11px] text-white/50">unique readers</div>
            </div>

            <Testimonial
                quote="I set up my blog in under five minutes and published the same day."
                name="Daniel K."
                role="Tech blogger"
            />
        </Frame>
    );
}
