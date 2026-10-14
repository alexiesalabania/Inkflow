// Inline SVG icon set used across the Inkflow screens.
const Svg = ({ size = 17, sw = 2, className, children, fill = 'none', stroke = 'currentColor', ...rest }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill}
        stroke={stroke}
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
        {...rest}
    >
        {children}
    </svg>
);

export const PenIcon = (p) => (
    <Svg sw={2.2} {...p}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </Svg>
);
export const DashboardIcon = (p) => (
    <Svg {...p}>
        <rect x="3" y="3" width="7" height="9" rx="1.5" />
        <rect x="14" y="3" width="7" height="5" rx="1.5" />
        <rect x="14" y="12" width="7" height="9" rx="1.5" />
        <rect x="3" y="16" width="7" height="5" rx="1.5" />
    </Svg>
);
export const ProductsIcon = (p) => (
    <Svg {...p}>
        <path d="M20 7h-9" />
        <path d="M14 17H5" />
        <circle cx="17" cy="17" r="3" />
        <circle cx="7" cy="7" r="3" />
    </Svg>
);
export const AnalyticsIcon = (p) => (
    <Svg {...p}>
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
    </Svg>
);
export const AudienceIcon = (p) => (
    <Svg {...p}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Svg>
);
export const GlobeIcon = (p) => (
    <Svg {...p}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </Svg>
);
export const BoltIcon = (p) => (
    <Svg {...p}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </Svg>
);
export const SettingsIcon = (p) => (
    <Svg {...p}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </Svg>
);
export const SearchIcon = (p) => (
    <Svg {...p}>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
    </Svg>
);
export const MenuIcon = (p) => (
    <Svg {...p}>
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </Svg>
);
export const PlusIcon = ({ sw = 2.5, ...p }) => (
    <Svg sw={sw} {...p}>
        <path d="M12 5v14M5 12h14" />
    </Svg>
);
export const BellIcon = (p) => (
    <Svg {...p}>
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </Svg>
);
export const CheckIcon = (p) => (
    <Svg {...p}>
        <path d="M20 6 9 17l-5-5" />
    </Svg>
);
export const TagIcon = (p) => (
    <Svg {...p}>
        <path d="M20.91 11.12 12.7 2.89a2 2 0 0 0-2.83 0l-8 8a2 2 0 0 0 0 2.83l8.2 8.2a2 2 0 0 0 2.83 0l8-8a2 2 0 0 0 0-2.8z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
    </Svg>
);
export const WarningIcon = (p) => (
    <Svg {...p}>
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
    </Svg>
);
export const TrashIcon = (p) => (
    <Svg {...p}>
        <path d="M3 6h18" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </Svg>
);
export const EditIcon = (p) => (
    <Svg {...p}>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z" />
    </Svg>
);
export const CloseIcon = ({ sw = 2.2, ...p }) => (
    <Svg sw={sw} {...p}>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </Svg>
);
export const ArrowRightIcon = ({ sw = 2.3, ...p }) => (
    <Svg sw={sw} {...p}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </Svg>
);
export const TypeIcon = ({ sw, ...p }) => (
    <Svg sw={sw} {...p}>
        <path d="M4 7V4h16v3" />
        <path d="M9 20h6" />
        <path d="M12 4v16" />
    </Svg>
);
export const CodeIcon = (p) => (
    <Svg {...p}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </Svg>
);
export const DownloadIcon = (p) => (
    <Svg {...p}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </Svg>
);
export const BrushIcon = (p) => (
    <Svg {...p}>
        <path d="M9.5 21H5a2 2 0 0 1-2-2v-4.5" />
        <path d="M14.5 3H19a2 2 0 0 1 2 2v4.5" />
        <path d="m18 2 4 4-10 10-4.5 1.5L9 13Z" />
    </Svg>
);
export const InfinityIcon = (p) => (
    <Svg {...p}>
        <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z" />
    </Svg>
);
export const LayoutIcon = (p) => (
    <Svg {...p}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18" />
    </Svg>
);
export const MailIcon = (p) => (
    <Svg {...p}>
        <path d="M22 6c0 1.1-.9 2-2 2H4a2 2 0 0 1-2-2" />
        <path d="M2 6l10 7L22 6" />
        <rect x="2" y="4" width="20" height="16" rx="2" />
    </Svg>
);
export const TwitterIcon = (p) => (
    <Svg fill="currentColor" stroke="none" {...p}>
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </Svg>
);
export const GithubIcon = (p) => (
    <Svg fill="currentColor" stroke="none" {...p}>
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.72 1.26 3.39.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.44-2.7 5.42-5.28 5.7.41.36.78 1.07.78 2.17v3.22c0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
    </Svg>
);
export const ProductHuntIcon = (p) => (
    <Svg fill="currentColor" stroke="none" {...p}>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1.5-6.5h-3V6h3a3 3 0 0 1 0 6z" />
    </Svg>
);
export const GoogleIcon = (p) => (
    <Svg stroke="none" {...p}>
        <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47c-.28 1.5-1.13 2.78-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.82z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.94-2.91l-3.88-3c-1.08.72-2.45 1.15-4.06 1.15-3.13 0-5.78-2.11-6.73-4.95H1.26v3.11C3.24 21.3 7.28 24 12 24z" />
        <path fill="#FBBC05" d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.6H1.26A11.98 11.98 0 0 0 0 12c0 1.93.46 3.76 1.26 5.4l4.01-3.11z" />
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.94 1.19 15.24 0 12 0 7.28 0 3.24 2.7 1.26 6.6l4.01 3.11C6.22 6.86 8.87 4.75 12 4.75z" />
    </Svg>
);
