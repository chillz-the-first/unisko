import {Link, NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

const navItems = [
    {to: "/", label: "Home"},
    {to: "/about", label: "About"},
    {to: "/services", label: "Services"},
    {to: "/resources", label: "Resources"},
    {to: "/events", label: "Events"},
    {to: "/contact", label: "Contact"},
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (!menuOpen) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") setMenuOpen(false);
        };

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [menuOpen]);

    return (
        <header className="bg-white/80 backdrop-blur-md h-[3.5rem] sticky top-0 z-50 w-full">
            <div className="max-w-wrap mx-auto px-6 flex items-center justify-between h-full">
                <Link to="/" className="flex items-center min-h-[44px]">
                    <img src="/images/logo.png" alt="Unisko logo" className="h-6 w-auto"/>
                </Link>

                <nav className="hidden ml:flex items-center gap-6 text-sm" aria-label="Main">
                    {navItems.map((item) => (
                        <NavLink key={item.to} to={item.to} end={item.to === '/'}
                                 className={({isActive}) =>
                                     isActive ? "text-navy font-semibold" : "text-body hover:text-navy"
                                 }
                        >{item.label}</NavLink>
                    ))}

                    <NavLink to={"/enroll"}
                             className="bg-red text-white rounded-full px-3 py-1 text-center relative after:content-['']
                             after:absolute after:-inset-y-[6px] after:-inset-x-[2px] hover:bg-red-hover"
                    >Enroll</NavLink>
                </nav>

                <button type="button" className="ml:hidden w-11 h-11 inline-grid place-items-center -mr-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}
                >
                    <span className="material-symbols-outlined">
                        {menuOpen ? "close" : "menu"}
                    </span>
                </button>
            </div>

            {menuOpen && (
                <nav className="ml:hidden absolute top-full left-0 right-0 bg-white px-6 pt-2 pb-6
                border-t border-line z-50">
                    {navItems.map((item) => (
                        <NavLink key={item.to} to={item.to} end={item.to === '/'}
                                 onClick={() => setMenuOpen(false)}
                                 className={({isActive}) =>
                                     `flex items-center min-h-[48px] text-2xl  border-b border-line font-semibold 
                                     ${isActive ? "text-red" : "text-navy"}`
                                 }
                        >{item.label}</NavLink>
                    ))}

                    <NavLink to={"/enroll"} onClick={() => setMenuOpen(false)}
                             className="bg-red text-white rounded-full px-3 py-1 text-center relative w-full mt-5
                             min-h-[44px] flex items-center justify-center hover:bg-red-hover"
                    >Enroll</NavLink>
                </nav>
            )}
        </header>
    );
}

export default Navbar;