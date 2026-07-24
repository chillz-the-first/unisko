import {NavLink, Link} from 'react-router-dom'

const navItems = [
    {to: '/', label: 'Home'},
    {to: '/about', label: 'About'},
    {to: '/contact', label: 'Contact'},
    {to: '/services', label: 'Services'},
];

const Navbar = () => {
    return (
        <header className="bg-white border-b border-navy/10">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/*Logo*/}
                <Link to='/' className='flex items-center gap-2.5'>
                    <div className="relative w-8 h-8 bg-navy rounded-md flex items-center justify-center">
                        <span className="font-serif text-white text-sm font-medium">U</span>
                        <span className="absolute top-1.5 right-1.5 w-1 h-1 bg-red rounded-full"></span>
                    </div>
                    <div>
                        <div className="font-serif font-medium text-base leading-none">Unisko</div>
                        <div className="text-[9px] tracking-kicker text-red mt-0.5">DO BETTER</div>
                    </div>
                </Link>

                {/*Nav links*/}
                <nav className="flex items-center gap-6 text-sm">
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
                    <Link
                        to='\enroll'
                        className='bg-red text-white px-4 py-1.5 rounded-full text-xs font-medium
                        hover:opacity-90 transition-opacity'
                    >
                        Enroll
                    </Link>
                </nav>
            </div>
        </header>
    );
}