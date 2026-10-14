import FieldError from '@/Components/ink/FieldError';
import { ArrowRightIcon } from '@/Components/ink/Icons';
import { SignupShowcase } from '@/Components/ink/AuthShowcase';
import Logo from '@/Components/ink/Logo';
import SocialButtons from '@/Components/ink/SocialButtons';
import { btnPrimary, inputCls, labelCls } from '@/Components/ink/ui';
import AuthShell from '@/Layouts/AuthShell';
import { Head, Link, useForm } from '@inertiajs/react';

// 0–4 score based on simple, common-sense rules.
function passwordStrength(pw) {
    if (!pw) return { score: 0, label: 'Weak', color: 'bg-bordercol' };
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score++;
    if (/\d/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw) || pw.length >= 12) score++;
    const meta = [
        { label: 'Weak', color: 'bg-red-400' },
        { label: 'Weak', color: 'bg-red-400' },
        { label: 'Fair', color: 'bg-orange-400' },
        { label: 'Good', color: 'bg-yellow-400' },
        { label: 'Strong', color: 'bg-emerald-500' },
    ][score];
    return { score, ...meta };
}

export default function Register() {
    const { data, setData, post, processing, errors, reset, transform } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        terms: false,
    });

    // Laravel's RegisteredUserController expects name + password_confirmation.
    transform((d) => ({
        name: `${d.first_name} ${d.last_name}`.trim(),
        email: d.email,
        password: d.password,
        password_confirmation: d.password,
    }));

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), { onFinish: () => reset('password') });
    };

    const strength = passwordStrength(data.password);

    return (
        <AuthShell
            navHint="Already have an account?"
            navLabel="Log In"
            navHref={route('login')}
            navVariant="outline"
        >
            <Head title="Sign up for Inkflow" />

            {/* Left: showcase */}
            <SignupShowcase />

            {/* Right: form */}
            <div className="w-full max-w-[440px] mx-auto lg:mx-0">
                <div className="mb-8 text-center lg:text-left">
                    <div className="mb-8 flex justify-center lg:justify-start">
                        <Logo size={34} iconSize={17} withText={false} />
                    </div>
                    <h1 className="font-display font-extrabold tracking-[-0.03em] text-[32px] md:text-[38px] leading-[1.08] mb-3">
                        Create your account
                    </h1>
                    <p className="text-inksoft text-[15.5px] max-w-[380px] mx-auto lg:mx-0">
                        Join thousands of writers already publishing with Inkflow — it's free to start.
                    </p>
                </div>

                <SocialButtons verb="Sign up" />

                <div className="flex items-center gap-4 mb-6">
                    <span className="h-px flex-1 bg-bordercol" />
                    <span className="text-[12.5px] text-inksoft font-medium">or sign up with email</span>
                    <span className="h-px flex-1 bg-bordercol" />
                </div>

                <form onSubmit={submit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="first_name" className={labelCls}>First name</label>
                            <input
                                id="first_name"
                                type="text"
                                placeholder="Ava"
                                autoComplete="given-name"
                                required
                                value={data.first_name}
                                onChange={(e) => setData('first_name', e.target.value)}
                                className={inputCls}
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="last_name" className={labelCls}>Last name</label>
                            <input
                                id="last_name"
                                type="text"
                                placeholder="Turner"
                                autoComplete="family-name"
                                required
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                className={inputCls}
                            />
                        </div>
                    </div>
                    <FieldError message={errors.name} />

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className={labelCls}>Email address</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            autoComplete="username"
                            required
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className={inputCls}
                        />
                        <FieldError message={errors.email} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="password" className={labelCls}>Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="At least 8 characters"
                            autoComplete="new-password"
                            required
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className={inputCls}
                        />
                        <div className="flex items-center gap-1.5 mt-1">
                            {[1, 2, 3, 4].map((i) => (
                                <span
                                    key={i}
                                    className={`h-1 w-1/4 rounded-full transition-colors duration-200 ${
                                        i <= strength.score ? strength.color : 'bg-bordercol'
                                    }`}
                                />
                            ))}
                            <span className="text-[11px] text-inksoft ml-1 whitespace-nowrap">{strength.label}</span>
                        </div>
                        <FieldError message={errors.password} />
                    </div>

                    <label className="flex items-start gap-2.5 mt-1 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            required
                            checked={data.terms}
                            onChange={(e) => setData('terms', e.target.checked)}
                            className="w-4 h-4 mt-0.5 rounded border-bordercol text-ink focus:ring-ink/20"
                        />
                        <span className="text-[13px] text-inksoft leading-snug">
                            I agree to the{' '}
                            <a href="#" className="font-semibold text-ink hover:underline">Terms of Service</a> and{' '}
                            <a href="#" className="font-semibold text-ink hover:underline">Privacy Policy</a>
                        </span>
                    </label>

                    <button
                        type="submit"
                        disabled={processing}
                        className={`${btnPrimary} w-full text-[15px] py-3.5 mt-2 disabled:opacity-60 disabled:pointer-events-none`}
                    >
                        {processing ? 'Creating account…' : 'Create Account'}
                        <ArrowRightIcon size={16} />
                    </button>
                </form>

                <p className="text-center lg:text-left text-[13.5px] text-inksoft mt-7">
                    Already have an account?{' '}
                    <Link href={route('login')} className="font-semibold text-ink hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </AuthShell>
    );
}
