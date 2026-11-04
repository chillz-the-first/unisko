import Section from "../components/Section.jsx";
import {toneStyles as tones} from "../lib/toneStyles.js";
import Tile from "../components/Tile.jsx";
import CTA from "../components/CTA.jsx";
import Carousel from "../components/Carousel.jsx";
import {getWhatsAppUrl} from "../lib/whatsapp.js";

const principles = [
    {
        title: "Patience first",
        body: "Struggling is never a cause for shame. Every learner moves at their own pace.",
        tone: "navy",
        span: "ml:col-span-4",
    },
    {
        title: "Real progress",
        body: "If a learner is not improving, we change our approach rather than repeat the same explanation.",
        tone: "cream",
        span: "ml:col-span-2",
    },
    {
        title: "Whole learner",
        body: "Confidence matters as much as correct answers. We encourage learners to try, even when they get it wrong.",
        tone: "cream",
        span: "ml:col-span-2",
    },
    {
        title: "Working with families",
        body: "Parents stay informed through a progress report every term, and are always welcome to speak to us.",
        tone: "cream",
        span: "ml:col-span-4",
    },
];

const tutors = [
    {
        id: "t1",
        name: "Nkosinathi Mlambo",
        role: "Founder",
        src: "/images/nathi.jpg",
        subject: "English, Mathematical Literacy, Life Sciences, Geography, Business Studies",
    },
    {
        id: "t2",
        role: "Tutor",
        name: "Siphesihle Martin",
        src: "/images/martin.jpg",
        subject: "Mathematics, isiZulu, Physical Sciences",
        grade: "Grades 10–12",
    },
    {
        id: "t3",
        role: "Tutor",
        name: "Zodwa Mazibuko",
        src: "/images/mazibuko.jpg",
        subject: "English, Mathematics, isiZulu",
        grade: "Grades R–3",
    },
    {
        id: "t4",
        role: "Tutor",
        name: "Nokukhanya Mlambo",
        src: "/images/mlambo.jpg",
        subject: "English, Mathematics",
        grade: "Grades R–3",
    },
    {
        id: "t5",
        role: "Tutor",
        name: "Ayanda Nkosi",
        src: "/images/nkosi.jpg",
        subject: "English, History, Mathematics (Grades 4–6)",
        grade: "Grades 10–12",
    },
    {
        id: "t6",
        role: "Tutor",
        name: "Prudence Ramaqhele",
        src: "/images/ramaqhele.jpg",
        subject: "English, Mathematics, Sesotho",
        grade: "Grades 4–6",
    },
];

const ctaBtns = [
    {
        type: "href",
        destination: getWhatsAppUrl("Hello Unisko, I have a few questions about your tutoring. Could we arrange a time to speak?"),
        text: "Message us on WhatsApp",
        external: true,
    },
    {
        type: "link",
        destination: "/enroll",
        text: "Enrol",
    },
];

const About = () => {
    return (
        <div>
            {/*Page header section*/}
            <Section>
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-end justify-between">
                    <div className="space-y-4 max-w-[46ch]">
                        <h1 className="font-semibold text-navy text-display" tabIndex={-1}>
                            Tutoring that keeps learners from falling behind.
                        </h1>
                        <p className="text-muted text-lede">
                            Learners fall behind not because they cannot learn, but because no one has had the time
                            to slow down with them. At Unisko, we make that time.
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
                            Helping every learner thrive.
                        </h2>
                        <p className="text-body">
                            We make tutoring a habit that learners keep, and we work at each learner's pace. Our aim is
                            to put a dedicated tutor within reach of every family in our community, at a price that
                            families can afford.
                        </p>
                    </div>

                    <div className="space-y-4 max-w-[65ch] flex-1">
                        <h2 className="text-headline text-navy font-semibold">
                            <span className="block text-red font-medium text-base mb-4">Vision</span>
                            A confident learner in every home.
                        </h2>
                        <p className="text-body">
                            We see every child finishing school feeling capable, not because they are the smartest in
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
                <h2 className="text-headline text-navy font-semibold mb-8">Meet our tutors.</h2>

                <Carousel items={tutors} label="Unisko tutors"
                          cardWidth="w-full md:w-[calc((100%-1rem)/2)] ml:w-[calc((100%-2rem)/3)]">
                    {(tutor) => (
                        <>
                            <img src={tutor.src} alt="" loading="lazy" decoding="async"
                                 className="w-full aspect-[4/5] object-cover rounded-tile bg-cream"/>
                            <h3 className="text-title font-semibold text-navy mt-4">{tutor.name}</h3>
                            <p className="text-muted text-sm">{tutor.role}</p>
                            <p className="text-body text-sm mt-1">{tutor.subject}</p>
                            {tutor.grade && <p className="text-muted text-sm">{tutor.grade}</p>}
                        </>
                    )}
                </Carousel>
            </Section>

            <CTA
                head="Arrange to meet a tutor."
                lede="Send us a message, or visit the centre at 43 Oil Avenue, Freedom Park."
                btns={ctaBtns}
            />
        </div>
    );
};

export default About;