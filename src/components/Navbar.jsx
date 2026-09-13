import {NavLink, Link} from 'react-router-dom'
import {useState, useEffect, useRef} from "react";

const navItems = [
    {to: '/', label: 'Home'},
    {to: '/about', label: 'About'},
    {to: '/services', label: 'Services'},
    {to: '/contact', label: 'Contact'},
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [extraOpen, setExtraOpen] = useState(false);

    const extraRef = useRef(null);

    useEffect(() => {
        if (!extraOpen) return;

        function handleClick(e) {
            if (extraRef.current && !extraRef.current.contains(e.target)) {
                setExtraOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [extraOpen])

    return (
        <header className="bg-white border-b border-navy/10 relative">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/*Logo*/}
                <Link to='/'>
                    <img src="/images/logo.png" alt="Unisko" className="h-12 w-auto"/>
                </Link>

                {/*Nav links*/}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {navItems.map((item) => (
                        <NavLink
                            to={item.to}
                            key={item.to}
                            end={item.to === '/'}
                            className={({isActive}) =>
                                isActive ? 'text-navy font-medium' : 'text-muted hover:text-navy transition-colors'}
                        >
                            {item.label}
                        </NavLink>
                    ))}

                    <div className="relative" ref={extraRef}>
                        <button onClick={() => setExtraOpen(!extraOpen)} aria-expanded={extraOpen}
                            aria-haspopup={true}
                            className="text-muted hover:text-navy transition-colors"
                        >Extras {extraOpen ? "▲" : "▼"}</button>
                        {extraOpen && (
                            <div className="absolute top-full left-0 bg-white rounded-md p-4 flex flex-col gap-2
                             border border-navy/10 shadow-xl z-50">
                                <Link to="/resources" onClick={() => setExtraOpen(false)}>Resources</Link>
                                <Link to="/events" onClick={() => setExtraOpen(false)}>Events</Link>
                            </div>
                        )}
                    </div>

                    <Link
                        to='/enroll'
                        className='bg-red text-white px-4 py-1.5 rounded-full text-xs font-medium
                        hover:opacity-90 transition-opacity'
                    >
                        Enroll
                    </Link>
                </nav>
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
                    aria-label='Open menu' aria-expanded={menuOpen}
                >
                    {menuOpen ? 'X' : '☰'}
                </button>
            </div>
            {menuOpen && (
                <nav className="md:hidden absolute top-full left-0 right-0 bg-white flex flex-col gap-2 px-6 py-4
                    border-t border-navy/10 text-center z-50  transition-all duration-1000 ease-out"
                >
                    {navItems.map((item) => (
                        <NavLink
                            to={item.to}
                            key={item.to}
                            end={item.to === '/'}
                            onClick={() => setMenuOpen(false)}
                            className={({isActive}) =>
                                isActive ? 'text-navy font-medium' : 'text-muted hover:text-navy transition-colors'}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                    <Link to='/enroll' onClick={() => {setMenuOpen(false)}}
                        className="bg-red text-white px-4 py-1.5 rounded-full font-medium
                        hover:opacity-90 transition-opacity"
                    >Enroll</Link>
                </nav>
            )}
        </header>
    );
}

export default Navbar;