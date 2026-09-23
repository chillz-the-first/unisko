import {Link} from "react-router-dom";

const footerColumns = [
    {
        heading: "Explore",
        links : [
            {to: "/about", label: "About"},
            {to: "/services", label: "Services"},
            {to: "/resources", label: "Resources"},
            {to: "/events", label: "Events"},
            {to: "/enroll", label: "Enroll"},
        ],
    },
    {
        heading: "Visit",
        links : [
            {label: "43 Oil Avenue"},
            {label: "Freedom Park"},
            {label: "Open in Maps", url: "https://maps.app.goo.gl/srj88XnoX99w3nd79", external: true},
        ]
    },
    {
        heading: "Connect",
        links : [
            {url: "tel:+27618117116", label: "061 811 7116", icon: "/icons/phone.svg", external: false},
            {url: "mailto:unisko.co@gmail.com", label: "Unisko.co@gmail.com", icon: "/icons/at.svg", external: false},
            {url: "https://www.facebook.com/p/Unisko-100067008918292/", label: "Facebook", icon: "/icons/facebook.svg", external: true},
            {url: "https://www.tiktok.com/@unisko39", label: "Tiktok", icon: "/icons/tiktok.svg", external: true},
            {url: "https://www.instagram.com/unisko.co/", label: "Instagram", icon: "/icons/instagram.svg", external: true},
        ]
    }
];

const linkClass = "flex items-center min-h-[44px] text-sm text-muted hover:text-navy hover:underline";

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="max-w-wrap mx-auto px-6 py-10">
                <div className="grid grid-cols-1 ml:grid-cols-2 border-b border-line pb-4">
                    <div className="space-y-2 mb-2">
                        <Link to="/"><img src="/images/logo.png" alt="Unisko logo" className="h-6 w-auto"/></Link>
                        <p className="text-muted text-sm max-w-56">
                            After-school tutoring rooted in patience, progress and partnership with parents.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 ml:grid-cols-3">
                        {footerColumns.map((column) => (
                            <div className="flex flex-col" key={column.heading}>
                                <p className="font-semibold text-navy text-sm">{column.heading}</p>

                                <div className="flex flex-col">
                                    {column.links.map((link) => {
                                        if (link.to) {
                                            return (
                                                <Link to={link.to} key={link.to} className={linkClass}>{link.label}</Link>
                                            );
                                        }
                                        if (link.url) {
                                            return (
                                                <a href={link.url}  key={link.label}
                                                   className={` flex items-center gap-x-1 ${linkClass}`}
                                                   rel={link.external ? "noopener noreferrer" : undefined}
                                                   target={link.external ? "_blank" : undefined}
                                                >
                                                    {link.icon && (
                                                        <img src={link.icon} alt="" className="w-5 h-5"/>
                                                    )}
                                                    {link.label}
                                                </a>
                                            );
                                        }
                                        return (
                                            <span className="text-sm text-muted min-h-[44px] flex items-center"
                                                  key={link.label}>{link.label}</span>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="py-6 flex items-center justify-between">
                    <p className="text-muted text-sm">&copy; {new Date().getFullYear()} Unisko Program. All rights reserved</p>
                    <div className="flex items-center gap-x-6">
                        <a href="#" className="text-muted text-sm hover:text-navy hover:underline">Privacy Policy</a>
                        <a href="#" className="text-muted text-sm hover:text-navy hover:underline">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;