import SectionStart from "../components/SectionStart.jsx";
import Placeholder from "../components/Placeholder.jsx";
import {Link} from "react-router-dom";

const flagshipFeatures = [
    'K-12 grades', 'Healthy snack', 'Weekly emails', 'Small groups', 'Drop-off', 'Quiet study space'
];

const Services = () => {
    return (
        <div>
            {/*Hero section*/}
            <section className="bg-white py-16 px-10">
                <div className="max-w-6xl mx-auto">
                    <SectionStart>WHAT WE OFFER</SectionStart>
                    <div className="grid grid-cols-[2fr_1fr] items-end gap-6">
                        <h1 className="font-serif text-navy text-6xl">Four ways <br/>to learn at <br/>Unisko.</h1>
                        <p className='text-muted'>
                            From daily after-school care to focused 1-on-1 sessions.
                            Pick the format that fits your child.
                        </p>
                    </div>
                </div>
            </section>

            {/*Flagship service section*/}
            <section className="bg-navy py-16 px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-[1fr_1.5fr] items-center gap-10">
                    <Placeholder aspectRatio='4/3' label='CLASSROOM · AFTER-SCHOOL' dark/>
                    <div className='space-y-4'>
                        <SectionStart>MON-FRI · 3:00-5:30 PM</SectionStart>
                        <h2 className="font-serif text-white text-4xl font-semibold">After-School Program</h2>
                        <p className="text-white/75 text-sm"><span className="text-red font-semibold text-xl">R500</span>/month</p>
                        <p className="text-white/75">
                            Drop-off from school, supervised study, snack, and dedicated tutor time.
                            The full afternoon, sorted.
                        </p>
                        <div className="grid grid-cols-2">
                            {flagshipFeatures.map(feature => (
                                <p className="text-white/75" key={feature}>✓ {feature}</p>
                            ))}
                        </div>
                        <div className="flex gap-4 my-2">
                            <Link to='/enroll' className="bg-red text-white py-2 px-6 rounded-full text-center">Enroll</Link>
                            <Link to='/contact' className="bg-transparent text-white text-center py-2 px-6 border border-white rounded-full">
                                Learn more →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;