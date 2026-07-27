import SectionStart from "../components/SectionStart.jsx";
import Placeholder from "../components/Placeholder.jsx";
import ServiceBlock from "../components/ServiceBlock.jsx";

const flagshipFeatures = [
    'K-12 grades', 'Healthy snack', 'Weekly emails', 'Small groups', 'Drop-off', 'Quiet study space'
];
const onlineFeatures = [
    'All subjects K-12', 'Same tutor weekly', 'Sessions recorded',
    'Homework support', 'Parent dashboard', 'Reschedule anytime'
];
const groupFeatures = [
    'Cohorts of 4-6', 'Peer learning', 'Lower per-hour rate', 'Termly progress reports'
]
const homeworkFeatures = [
    'No booking needed', 'Any subject', 'Snack & water', 'Stay as long as needed'
]

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
                <div className="max-w-6xl mx-auto grid grid-cols-[1.5fr_1fr] items-center gap-10">
                    <ServiceBlock
                        kicker='FLEXIBLE · 7 DAYS A WEEK'
                        title='Online Tutorials'
                        price='R200'
                        duration='hour'
                        body='1-on-1 video sessions, anywhere. Same dedicated tutor every week.
                        Sessions are recorded so your child can rewatch tricky parts.'
                        features={onlineFeatures}
                        variant='white'
                        featureGrid
                    />
                    <Placeholder aspectRatio='3/4' label='LAPTOP · ONLINE'/>
                </div>
            </section>

            {/*Group & Homework section*/}
            <section className="bg-cream py-16 px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-2 justify-between items-center gap-10">
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
        </div>
    );
}

export default Services;