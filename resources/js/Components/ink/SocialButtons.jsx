import { GithubIcon, GoogleIcon } from './Icons';

// Visual-only for now: wire these to Laravel Socialite when you add OAuth.
export default function SocialButtons({ verb = 'Continue' }) {
    return (
        <div className="flex flex-col gap-3 mb-6">
            <button
                type="button"
                className="flex items-center justify-center gap-3 w-full bg-white border border-bordercol rounded-full py-3 text-[14.5px] font-semibold text-ink hover:border-[#c9c9cf] hover:-translate-y-px transition-all duration-150 shadow-[0_2px_6px_-2px_rgba(15,23,42,0.06)]"
            >
                <GoogleIcon size={18} />
                {verb} with Google
            </button>
            <button
                type="button"
                className="flex items-center justify-center gap-3 w-full bg-ink border border-ink rounded-full py-3 text-[14.5px] font-semibold text-white hover:-translate-y-px transition-all duration-150 shadow-[0_6px_16px_-6px_rgba(15,23,42,0.35)]"
            >
                <GithubIcon size={16} />
                {verb} with GitHub
            </button>
        </div>
    );
}
