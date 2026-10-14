import { GithubIcon, MailIcon, TwitterIcon } from './Icons';

export default function SiteFooter({ tagline = false, iconSize = 16 }) {
    return (
        <footer className={`${tagline ? 'pt-[50px]' : 'pt-8'} pb-10 text-center border-t border-bordercol`}>
            <div className="max-w-[1180px] mx-auto px-7">
                {tagline && (
                    <div className="text-[14.5px] font-semibold text-ink mb-1.5">
                        Made with ❤️ for writers &amp; creators.
                    </div>
                )}
                <div className={`text-[12.5px] text-gray-400 ${tagline ? 'mb-[18px]' : 'mb-[14px]'}`}>
                    © 2026 Inkflow. All rights reserved.
                </div>
                <div className="flex items-center justify-center gap-[18px]">
                    {[
                        ['Twitter', TwitterIcon],
                        ['GitHub', GithubIcon],
                        ['Contact', MailIcon],
                    ].map(([label, Icon]) => (
                        <a
                            key={label}
                            href="#"
                            aria-label={label}
                            className="text-gray-500 hover:text-ink transition-colors duration-200"
                        >
                            <Icon size={iconSize} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
