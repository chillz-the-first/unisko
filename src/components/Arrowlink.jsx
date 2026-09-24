import {Link} from "react-router-dom";

const colors = {
    red: "text-red hover:text-red-hover",
    navy: "text-navy hover:text-body",
    white: "text-white hover:text-white/80",
}

const ArrowLink = ({to, children, textColor = "red"}) => (
    <Link to={to} className={`group inline-flex items-center min-h-[44px] ${colors[textColor]}`}>
        <span className="group-hover:underline underline-offset-4 decoration-2">{children}</span>
        <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
    </Link>
);

export default ArrowLink;