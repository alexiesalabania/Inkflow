import { Link } from '@inertiajs/react';
import { PenIcon } from './Icons';

export default function Logo({ href = '/', size = 30, iconSize = 16, withText = true, className = '' }) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-2.5 font-display font-extrabold text-lg text-ink no-underline ${className}`}
        >
            <span
                className="rounded-lg bg-ink flex items-center justify-center shrink-0"
                style={{ width: size, height: size }}
            >
                <PenIcon size={iconSize} stroke="#fff" />
            </span>
            {withText && 'Inkflow'}
        </Link>
    );
}
