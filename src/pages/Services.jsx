import SectionStart from "../components/SectionStart.jsx";
import Placeholder from "../components/Placeholder.jsx";
import ServiceBlock from "../components/ServiceBlock.jsx";
import {Link} from "react-router-dom";
import PackageCard from "../components/PackageCard.jsx";

const flagshipFeatures = [
    'K-12 grades', 'Healthy snack', 'Weekly emails', 'Small groups', 'Drop-off', 'Quiet study space'
];
const groupFeatures = [
    'Cohorts of 4-6', 'Peer learning', 'Lower per-hour rate', 'Termly progress reports'
]
const homeworkFeatures = [
    'No booking needed', 'Any subject', 'Snack & water', 'Stay as long as needed'
]

const packages = [
    {
        name: "Unisko Basic",
        price: "R149",
        tag: "Entry",
        features: ["English recorded lessons, once a week", "Worksheets", "Study notes", "Past papers", "Monthly test"],
        featured: false,
        msg: "Hi%20Unisko%2C%20I'm%20interested%20in%20Unisko%20Basic",
    },
    {
        name: "Unisko Plus",
        price: "R300",
        inherits: "Everything in Basic, plus",
        features: ["Weekly recorded lessons, English and Maths", "Teacher interaction",
            "Marked activities", "Monthly progress report"],
        featured: true,
        msg: "Hi%20Unisko%2C%20I'm%20interested%20in%20Unisko%20Plus",
    },
    {
        name: "Unisko Premium",
        price: "R499",
        tag: "Full support",
        inherits: "Everything in Plus, plus",
        features: ["Two weekly recorded lessons, English and Maths", "Live lessons once a week", "Exam preparation",
            "Personalised academic support", "Parent progress reports", "Priority tutoring and support"],
        featured: false,
        msg: "Hi%20Unisko%2C%20I'm%20interested%20in%20Unisko%20Premium",
    },
]

const Services = () => {
    return (
        <div>
            {/*Hero section*/}
            <section className="bg-white py-16 px-10">
                <div className="max-w-6xl mx-auto">
                    <SectionStart>WHAT WE OFFER</SectionStart>
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] items-end gap-6">
                        <h1 className="font-serif text-navy font-semibold max-w-xs text-4xl md:text-5xl lg:text-6xl">
                            Four ways to learn at Unisko.</h1>
                        <p className='text-muted'>
                            From daily after-school care to focused 1-on-1 sessions.
                            Pick the format that fits your child.
                        </p>
                    </div>
                </div>
            </section>

            {/*Flagship service section*/}
            <section className="bg-navy py-16 px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] items-center gap-10">
                    <Placeholder aspectRatio='4/3' label='CLASSROOM · AFTER-SCHOOL' dark/>
                    <div>
                        <ServiceBlock
                            kicker='MON-FRI · 3:00-5:30 PM'
                            title='After-School Program'
                            price='R500'
                            duration='month'
                            body='Drop-off from school, supervised study, snack, and dedicated tutor time.
                            The full afternoon, sorted.'
                            features={flagshipFeatures}
                            variant='navy'
                            featureGrid
                        />
                    </div>
                </div>
            </section>

            {/*Online tutorial section*/}
            <section className="bg-white py-16 px-10">
                <div className="max-w-6xl mx-auto space-y-8">
                    <div className="space-y-2">
                        <SectionStart>FLEXIBLE · 7 DAYS A WEEK</SectionStart>
                        <h2 className="font-serif text-navy font-semibold text-3xl">Online Packages</h2>
                    </div>
                    <PackageCard packages={packages} />
                </div>
            </section>

            {/*Group & Homework section*/}
            <section className="bg-cream py-16 px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    <ServiceBlock
                        kicker='TUE & THU · 4:00-5:30 PM'
                        title='Group Classes'
                        price='R250'
                        duration='month'
                        body='Small cohorts of 4-6 students. Peer learning at a lower price point.'
                        features={groupFeatures}
                        variant='white-sm'
                        secondBtn={false}
                    />
                    <ServiceBlock
                        kicker='MON-FRI · 3:00-6:00 PM'
                        title='Homework Help'
                        price='R250'
                        duration='visit'
                        body="Drop-in support, no booking needed. Walk in,
                            a tutor sits with your child until it's sorted."
                        features={homeworkFeatures}
                        variant='white-sm'
                        secondBtn={false}
                    />
                </div>
            </section>

            {/*Comparison section*/}
            <section className="bg-navy py-16 px-10">
                <div className="max-w-6xl mx-auto space-y-6">
                    <div className="flex flex-col md:flex-row justify-between items-baseline gap-6">
                        <div>
                            <SectionStart>NOT SURE WHICH ONE?</SectionStart>
                            <h2 className="text-white font-serif text-4xl font-semibold">Quick comparison.</h2>
                        </div>
                        <p className="text-white/50 text-xs">
                            Book a free intro call and we'll help you pick.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse bg-white/5 rounded-lg">
                            <thead className="text-white/50 text-xs tracking-kicker uppercase">
                            <tr>
                                <th className='px-5 py-4 border-b border-white/10'></th>
                                <th className='px-5 py-4 border-b border-white/10'>After-school</th>
                                <th className='px-5 py-4 border-b border-white/10'>1-on-1</th>
                                <th className='px-5 py-4 border-b border-white/10'>Group</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th className='px-5 py-4 border-b border-white/10 text-white/50'>Best for</th>
                                <td className='px-5 py-4 border-b border-white/10 text-white'>Working parents</td>
                                <td className='px-5 py-4 border-b border-white/10 text-white'>Targeted help</td>
                                <td className='px-5 py-4 border-b border-white/10 text-white'>Social learners</td>
                            </tr>

                            <tr>
                                <th className='px-5 py-4 border-b border-white/10 text-white/50'>Format</th>
                                <td className='px-5 py-4 border-b border-white/10 text-white'>In-person, daily</td>
                                <td className='px-5 py-4 border-b border-white/10 text-white'>Video, weekly</td>
                                <td className='px-5 py-4 border-b border-white/10 text-white'> In-person, 2x/wk</td>
                            </tr>

                            <tr>
                                <th className='px-5 py-4 border-b border-white/10 text-white/50'>Group size</th>
                                <td className='px-5 py-4 border-b border-white/10 text-white'>6-8</td>
                                <td className='px-5 py-4 border-b border-white/10 text-white'>1</td>
                                <td className='px-5 py-4 border-b border-white/10 text-white'>4-6</td>
                            </tr>

                            <tr>
                                <th className='px-5 py-4 text-white/50'>Starting at</th>
                                <td className='px-5 py-4 text-white font-serif font-semibold'>R500/mo</td>
                                <td className='px-5 py-4 text-white font-serif font-semibold'>R200/hr</td>
                                <td className='px-5 py-4 text-white font-serif font-semibold'>R250/mo</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-center">
                        <Link to='/contact' className="bg-red text-white py-2 px-6 rounded-full">
                            Book a free intro call
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;