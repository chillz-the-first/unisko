import {Link} from 'react-router-dom';

const socials = ['IG', 'FB', 'TT', 'X', 'YT'];

const pages = [
    {to:'/', label:'Home'},
    {to:'/about', label:'About'},
    {to:'/services', label:'Services'},
    {to:'/contact', label:'Contact'},
    {to:'/enroll', label:'Enroll'},
];

const subjects = ['Mathematics', 'English', 'Science', 'Reading & Writing'];

const Footer = () => {
    return (
        <footer className="bg-navy text-white">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/*Brands*/}
                    <div>
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="relative w-8 h-8 bg-white rounded-md flex items-center justify-center">
                                <span className="font-serif text-navy text-sm font-medium">U</span>
                                <span className="absolute top-1.5 right-1.5 w-1 h-1 bg-red rounded-full"></span>
                            </div>
                            <div>
                                <div className="font-serif font-medium text-base leading-none">Unisko</div>
                                <div className="text-[9px] tracking-kicker text-red mt-0.5">DO BETTER</div>
                            </div>
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed max-w-xs mb-6">
                            After-school tutoring rooted in patience, progress, and partnership with parents.
                        </p>
                        <div className="flex gap-2">
                            {socials.map((s) => (
                                <a href="#"
                                   key={s}
                                   className="w-9 h-9 bg-white/5 border border-white/10 rounded-md flex
                                   items-center justify-center text-[10px] text-white/70 hover:bg-white/10"
                                >
                                    {s}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/*Pages*/}
                    <div>
                        <div className="text-[10px] tracking-kicker text-white/50 mb-4">PAGES</div>
                        <ul className="space-y-2">
                            {pages.map((page) => (
                                <li key={page.to}>
                                    <Link to={page.to} className="text-sm text-white/80 hover:text-white">
                                        {page.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/*Subjects*/}
                    <div>
                        <div className="text-[10px] tracking-kicker text-white/50 mb-4">SUBJECTS</div>
                        <ul className="space-y-2">
                            {subjects.map((subject) => (
                                <li key={subject} className="text-sm text-white/80">{subject}</li>
                            ))}
                        </ul>
                    </div>

                    {/*Visit*/}
                    <div>
                        <div className="text-[10px] tracking-kicker text-white/50 mb-4">VISIT US</div>
                        <address className="not-italic text-sm text-white/80 space-y-2">
                            <div>43 Oil Avenue <br/>Freedom Park</div>
                            <div>Unisko.co@gmail.com</div>
                            <div>061 811 7116</div>
                        </address>
                    </div>
                </div>

                {/*Bottom bar*/}
                <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-white/50">
                        © 2026 Unisko Tutorial Program. All rights reserved
                    </p>
                    <div className="flex gap-6 text-xs text-white/50">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;