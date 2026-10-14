import FieldError from '@/Components/ink/FieldError';
import { ArrowRightIcon } from '@/Components/ink/Icons';
import { LoginShowcase } from '@/Components/ink/AuthShowcase';
import Logo from '@/Components/ink/Logo';
import SocialButtons from '@/Components/ink/SocialButtons';
import { btnPrimary, inputCls, labelCls } from '@/Components/ink/ui';
import AuthShell from '@/Layouts/AuthShell';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), { onFinish: () => reset('password') });
    };

    return (
        <AuthShell
            navHint="Don't have an account?"
            navLabel="Sign Up Free"
            navHref={route('register')}
            navVariant="primary"
        >
            <Head title="Log in to Inkflow" />

            {/* Left: form */}
            <div className="w-full max-w-[440px] mx-auto lg:mx-0">
                <div className="mb-9 text-center lg:text-left">
                    <div className="mb-8 flex justify-center lg:justify-start">
                        <Logo size={34} iconSize={17} withText={false} />
                    </div>
                    <h1 className="font-display font-extrabold tracking-[-0.03em] text-[32px] md:text-[38px] leading-[1.08] mb-3">
                        Welcome back, writer
                    </h1>
                    <p className="text-inksoft text-[15.5px] max-w-[380px] mx-auto lg:mx-0">
                        Log in to pick up right where you left off — your drafts are waiting.
                    </p>
                </div>

                {status && (
                    <div className="mb-5 rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3 text-[13.5px] font-medium text-emerald-600">
                        {status}
                    </div>
                )}

                <SocialButtons verb="Continue" />

                <div className="flex items-center gap-4 mb-6">
                    <span className="h-px flex-1 bg-bordercol" />
                    <span className="text-[12.5px] text-inksoft font-medium">or continue with email</span>
                    <span className="h-px flex-1 bg-bordercol" />
                </div>

                <form onSubmit={submit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className={labelCls}>Email address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            autoComplete="username"
                            autoFocus
                            required
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className={inputCls}
                        />
                        <FieldError message={errors.email} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className={labelCls}>Password</label>
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-[12.5px] font-semibold text-inksoft hover:text-ink transition-colors duration-200"
                                >
                                    Forgot password?
                                </Link>
                            )}
                        </div>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            autoComplete="current-password"
                            required
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className={inputCls}
                        />
                        <FieldError message={errors.password} />
                    </div>

                    <label className="flex items-center gap-2.5 mt-1 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="w-4 h-4 rounded border-bordercol text-ink focus:ring-ink/20"
                        />
                        <span className="text-[13.5px] text-inksoft">Keep me signed in</span>
                    </label>

                    <button
                        type="submit"
                        disabled={processing}
                        className={`${btnPrimary} w-full text-[15px] py-3.5 mt-2 disabled:opacity-60 disabled:pointer-events-none`}
                    >
                        {processing ? 'Logging in…' : 'Log In'}
                        <ArrowRightIcon size={16} />
                    </button>
                </form>

                <p className="text-center lg:text-left text-[13.5px] text-inksoft mt-7">
                    Don't have an account?{' '}
                    <Link href={route('register')} className="font-semibold text-ink hover:underline">
                        Sign up for free
                    </Link>
                </p>
            </div>

            {/* Right: showcase */}
            <LoginShowcase />
        </AuthShell>
    );
}
