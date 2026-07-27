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
        </div>
    );
}

export default Services;