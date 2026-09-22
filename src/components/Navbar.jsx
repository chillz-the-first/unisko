import {Link, NavLink} from "react-router-dom";
import {useState} from "react";

const navItems = [
    {to: "/", label: "Home"},
    {to: "/about", label: "About"},
    {to: "/services", label: "Services"},
    {to: "/resources", label: "Resources"},
    {to: "/events", label: "Events"},
    {to: "/contact", label: "Contact"},
];

const Navbar = () => {
    return (
        <header className="bg-white/80 backdrop-blur-md h-[3.5rem] sticky top-0 z-50 w-full">
            <div className="max-w-wrap mx-auto px-6 flex items-center justify-between h-full">
                <Link to="/">
                    <img src="/images/logo.png" alt="Unisko logo" className="h-8 w-auto" />
                </Link>

                <nav className="hidden ml:flex items-center gap-6 text-sm">
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
            </div>
        </header>
    );
}

export default Navbar;