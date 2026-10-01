import {Link} from "react-router-dom";

const colors = {
    red: "text-red hover:text-red-hover",
    navy: "text-navy hover:text-body",
    white: "text-white hover:text-white/80",
}

const ArrowLink = ({to, href, children, textColor = "red"}) => {
    const colorClass = colors[textColor] || colors.red;
    const className = `group inline-flex items-center min-h-[44px] ${colorClass}`;
    const content = (
        <>
            <span className="group-hover:underline underline-offset-4 decoration-2">{children}</span>
            <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>
        );
    }

    return (
        <Link to={to} className={className}>{content}</Link>
    );
};

export default ArrowLink;