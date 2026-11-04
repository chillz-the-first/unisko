import {Link} from "react-router-dom";

const styles = {
    filled: "bg-red hover:bg-red-hover text-white",
    outline: "border border-navy text-navy hover:bg-navy hover:text-white",
    white: "bg-white text-navy hover:bg-cream",
    ink: "bg-navy hover:bg-body text-white",
    copy: "border border-white text-white font-semibold hover:bg-body",
};

const Button = ({variant = "filled", to, href, external = false, children, disabled = false, onClick, type = "button"}) => {
    const base = `inline-flex items-center justify-center min-h-[44px] px-5 rounded-full ${styles[variant]}
        disabled:opacity-50 disabled:cursor-not-allowed`;

    if (to) {
        return (
            <Link to={to} className={base}>{children}</Link>
        );
    }
    if (href) {
        return (
            <a href={href} className={base} target={external ? "_blank" : undefined}
               rel={external ? "noopener noreferrer" : undefined}
            >
                {children}
                {external && <span className="sr-only"> (opens in a new tab)</span>}
            </a>
        );
    }

    return (
        <button type={type} className={base} onClick={onClick} disabled={disabled}>{children}</button>
    );
};

export default Button;