import {Link} from "react-router-dom";

const styles = {
    filled: "bg-red hover:bg-red-hover text-white",
    outline: "border border-line text-navy hover:bg-cream",
    white: "bg-white text-navy hover:bg-cream",
};

const Button = ({variant = "filled", to, href, children, disabled = false ,onClick}) => {
    const base = `inline-flex items-center justify-center min-h-[44px] px-5 rounded-full ${styles[variant]} 
        disabled:opacity-50 disabled:cursor-not-allowed`;

    if (to) {
        return (
            <Link to={to} className={base}>{children}</Link>
        );
    }
    if (href) {
        return (
            <a href={href} className={base}>{children}</a>
        );
    }

    return (
        <button type="button" className={base} onClick={onClick} disabled={disabled}>{children}</button>
    );
};

export default Button;