import Section from "../components/Section.jsx";
import {toneStyles as tones} from "../lib/toneStyles.js";
import Tile from "../components/Tile.jsx";
import CTA from "../components/CTA.jsx";
import Carousel from "../components/Carousel.jsx";
import {getWhatsAppUrl} from "../lib/whatsapp.js";

const principles = [
    {
        title: "Patience first",
        body: "No shame around struggle. Every learner moves at their own pace.",
        tone: "navy",
        span: "ml:col-span-4",
    },
    {
        title: "Real progress",
        body: "If a learner isn't improving, we change the plan, not the explanation.",
        tone: "cream",
        span: "ml:col-span-2",
    },
    {
        title: "Whole student",
        body: "Confidence beats correctness. We celebrate the brave wrong answer.",
        tone: "cream",
        span: "ml:col-span-2",
    },
    {
        title: "Family loop",
        body: "Parents stay in the conversation, with a progress report every term and a door that's always open.",
        tone: "cream",
        span: "ml:col-span-4",
    },
];

const tutors = [
    {
        id: "t1",
        name: 'Nkosinathi Mlambo',
        role: "Founder",
        src: "/images/nathi.jpg",
        alt: "Picture of the founder, Nkosinathi Mlambo",
        subject: 'English, Mathematical Literacy, Life Sciences, Geography, Business Studies',
    },
    {
        id: "t12",
        role: "Tutor",
        name: 'Siphesihle Martin',
        src: "/images/martin.jpg",
        alt: "Picture of tutor, Siphesihle Martin",
        subject: 'Mathematics, isiZulu, Physical Sciences',
        grade: "FET (10-12)"
    },
    {
        id: "t3",
        role: "Tutor",
        name: "Zodwa Mazibuko",
        src: "/images/mazibuko.jpg",
        alt: "Picture of tutor, Zodwa Mazibuko",
        subject: 'English, Mathematics, isiZulu',
        grade: "Foundation phase"
    },
    {
        id: "t4",
        role: "Tutor",
        name: 'Nokukhanya Mlambo',
        src: "/images/mlambo.jpg",
        alt: "Picture of tutor, Nokukhanya Mlambo",
        subject: 'English, Mathematics',
        grade: "Foundation phase"
    },
    {
        id: "t5",
        role: "Tutor",
        name: 'Ayanda Nkosi',
        src: "/images/nkosi.jpg",
        alt: "Picture of tutor, Ayanda Nkosi",
        subject: 'English, Mathematics (Intermediate phase), History',
        grade: "FET (10-12)"
    },
    {
        id: "t6",
        role: "Tutor",
        name: 'Prudence Ramaqhele',
        src: "/images/ramaqhele.jpg",
        alt: "Picture of tutor, Prudence Ramaqhele",
        subject: 'English, Mathematics, Sesotho',
        grade: 'Intermediate phase',
    },
];

const ctaBtns = [
    {
        type: "href",
        destination: getWhatsAppUrl("Hi Unisko, I have a few questions about your tutoring. Could we set up a time to chat?"),
        text: "Message us on WhatsApp",
        external: true,
    },
    {
        type: "link",
        destination: "/enroll",
        text: "Enroll",
    }
];

const About = () => {
    return (
        <div>
            {/*Page header section*/}
            <Section>
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-end justify-between">
                    <div className="space-y-4 max-w-[46ch]">
                        <h1 className="font-semibold text-navy text-display" tabIndex={-1}>
                            Tutoring is how kids stop falling behind.
                        </h1>
                        <p className="text-muted text-lede">
                            Learners slip a grade not because they can't learn, but because nobody had the time to slow
                            down with them. We're the people who do.
                        </p>
                    </div>

                    <div>
                        <p className="text-stat-lg text-navy font-semibold tabular-nums">135+</p>
                        <p className="text-muted">Learners since 2021</p>
                    </div>
                </div>
            </Section>

            {/*Story section*/}
            <Section tone="cream">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="space-y-4 max-w-[65ch] flex-1">
                        <h2 className="text-headline text-navy font-semibold">
                            <span className="block text-red font-medium text-base mb-4">Mission</span>
                            Helping every student thrive.
                        </h2>
                        <p className="text-body">
                            We make tutoring feel like a habit a kid actually keeps, and we move at the learner's pace.
                            Our aim is a dedicated tutor within reach of every family in our community, at a price
                            that doesn't trade off rent for grades.
                        </p>
                    </div>

                    <div className="space-y-4 max-w-[65ch] flex-1">
                        <h2 className="text-headline text-navy font-semibold">
                            <span className="block text-red font-medium text-base mb-4">Vision</span>
                            A confident learner in every home.
                        </h2>
                        <p className="text-body">
                            We see every child finishing school feeling capable. Not because they are the smartest in
                            the room, but because someone took the time to show them how to learn.
                        </p>
                    </div>
                </div>
            </Section>

            {/*Principles section*/}
            <Section>
                <h2 className="text-headline text-navy font-semibold mb-8">What we believe.</h2>

                <div className="grid grid-cols-1 ml:grid-cols-6 gap-4">
                    {principles.map((p) => {
                        const t = tones[p.tone] || tones.white;

                        return (
                            <Tile tone={p.tone} key={p.title} className={`space-y-4 ${p.span}`}>
                                <h3 className={`text-title font-semibold ${t.title}`}>{p.title}</h3>
                                <p className={t.body}>{p.body}</p>
                            </Tile>
                        );
                    })}
                </div>
            </Section>

            {/*Team section*/}
            <Section tone="cream">
                <h2 className="text-headline text-navy font-semibold mb-8">Meet the tutors.</h2>

                <Carousel items={tutors} label="Unisko tutors"
                cardWidth="w-full md:w-[calc((100%-1rem)/2)] ml:w-[calc((100%-2rem)/3)]">
                    {(tutor) => (
                        <>
                            <img src={tutor.src} alt="" className="w-full aspect-[4/5] object-cover rounded-tile bg-cream"/>
                            <h3 className="text-title font-semibold text-navy mt-4">{tutor.name}</h3>
                            <p className="text-muted text-sm">{tutor.role}</p>
                            <p className="text-body text-sm mt-1">{tutor.subject}</p>
                        </>
                    )}
                </Carousel>
            </Section>

            <CTA
                head="Want to meet a tutor?"
                lede="Send us a message or come by the centre at 43 Oil Avenue."
                btns={ctaBtns}
            />
        </div>
    );
};

export default About;