import SectionStart from "../components/SectionStart.jsx";
import PrincipleCard from "../components/PrincipleCard.jsx";
import CTASection from "../components/CTASection.jsx";
import Carousel from "../components/Carousel.jsx";
import {useRef} from "react";

const tutors = [
    {
        name: 'Nkosinathi Mlambo',
        src: "/images/nathi.jpg",
        alt: "Picture of the founder, Nkosinathi Mlambo",
        subject: 'English, Mathematical Literacy, Life Sciences, Geography, Business Studies',
    },
    {
        name: 'Siphesihle Martin',
        src: "/images/martin.jpg",
        alt: "Picture of tutor, Siphesihle Martin",
        subject: 'Mathematics, isiZulu, Physical Sciences',
        grade: "FET (10-12)"
    },
    {
        name: "Zodwa Mazibuko",
        src: "/images/mazibuko.jpg",
        alt: "Picture of tutor, Zodwa Mazibuko",
        subject: 'English, Mathematics, isiZulu',
        grade: "Foundation phase"
    },
    {
        name: 'Nokukhanya Mlambo',
        src: "/images/mlambo.jpg",
        alt: "Picture of tutor, Nokukhanya Mlambo",
        subject: 'English, Mathematics',
        grade: "Foundation phase"
    },
    {
        name: 'Ayanda Nkosi',
        src: "/images/nkosi.jpg",
        alt: "Picture of tutor, Ayanda Nkosi",
        subject: 'English, Mathematics (Intermediate phase), History',
        grade: "FET (10-12)"
    },
    {
        name: 'Prudence Ramaqhele',
        src: "/images/ramaqhele.jpg",
        alt: "Picture of tutor, Prudence Ramaqhele",
        subject: 'English, Mathematics, Sesotho',
        grade: 'Intermediate phase',
    },
];

const About = () => {
    const trackRef = useRef(null);

    function scroll (direction) {
        const track = trackRef.current;
        const amount = track.clientWidth + 16;
        track.scrollBy({left: direction * amount, behavior: 'smooth'});
    }

    return (
        <div>
            <div>
                {/*Manifesto section*/}
                <section className="bg-navy py-16 px-10">
                    <div className="max-w-6xl mx-auto relative">
                        <SectionStart color='muted'>OUR MANIFESTO</SectionStart>
                        <h1 className="text-white font-semibold font-serif mb-4 max-w-2xl text-4xl md:text-5xl lg:text-6xl">
                            Tutoring is how kids stop falling behind.
                        </h1>
                        <p className="text-white/70 max-w-lg">
                            Every year, students slip a grade not because they can't learn,
                            but because nobody had the time to slow down with them.
                            We're the people who do.
                        </p>

                        <div className="static text-right md:absolute md:bottom-0 md:right-0 md:text-left">
                            <p className="text-white/30 font-serif text-7xl font-semibold">200+</p>
                            <p className="text-white/30 text-xs tracking-kicker uppercase">students · since 2020</p>
                        </div>
                    </div>
                </section>

                {/*Mission section*/}
                <section className="bg-white py-16 px-10">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr] md:gap-20 items-start">
                        <div>
                            <SectionStart>MISSION</SectionStart>
                            <h2 className="font-serif text-navy text-4xl font-semibold">Helping every student thrive.</h2>
                        </div>

                        <div className="space-y-4">
                            <p>
                                We make tutoring feel like a habit a kid actually keeps. We move at the student's pace.
                                Progress shows on the next report card.
                            </p>
                            <p>
                                Our mission: put a dedicated tutor in reach of every family in our community,
                                at a price that doesn't trade off rent for grades.
                            </p>
                        </div>
                    </div>
                </section>

                {/*Vision section*/}
                <section className="bg-cream py-16 px-10">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr] md:gap-20">
                        <div className="space-y-4 order-last md:order-first">
                            <p>
                                We see a future where every child finishes high school feeling capable.
                                Not because they were the smartest in the room, but because someone took the
                                time to show them how to learn.
                            </p>
                            <p>
                                Confidence is the foundation. Everything else builds on it.
                            </p>
                        </div>

                        <div>
                            <SectionStart>VISION</SectionStart>
                            <h2 className="font-serif text-navy text-4xl font-semibold">A confident learner in every home.</h2>
                        </div>
                    </div>
                </section>

                {/*Principles section*/}
                <section className="bg-white py-16 px-10">
                    <div className="max-w-6xl mx-auto space-y-8">
                        <div>
                            <SectionStart>WHAT WE BELIEVE</SectionStart>
                            <h2 className="font-serif font-semibold text-navy text-4xl">
                                Four principles. No exceptions.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-4">
                            <PrincipleCard number='01' title='Patience first' variant='navy'
                                body='No shame around struggle. Every kid moves at their own pace, and
                                our tutors are trained to wait without rushing.'
                            />
                            <PrincipleCard number='02' title='Real progress' variant='cream'
                                body="We track grades, not hours. If a student isn't improving,
                                we change the plan, not the explanation."
                            />
                            <PrincipleCard number='03' title='Whole student' variant='cream'
                                body='Confidence beats correctness. We celebrate the brave wrong answer
                                because it gets us to the right one faster.'
                            />
                            <PrincipleCard number='04' title='Family loop' variant='red'
                                body='Parents stay in the conversation. Weekly emails, monthly check-ins,
                                and an open door always.'
                            />
                        </div>
                    </div>
                </section>

                {/*Team section*/}
                <section className="bg-cream py-16 px-10">
                    <div className="max-w-6xl mx-auto space-y-8">
                        <div className="flex justify-between items-center">
                            <div>
                                <SectionStart>THE TEAM</SectionStart>
                                <h2 className="font-serif text-navy text-4xl font-semibold">Meet the tutors.</h2>
                            </div>
                            <div className="flex gap-2">
                                <button type="button" onClick={() => scroll(-1)} aria-label="Previous tutors"
                                    className="bg-transparent text-navy border-navy border-2 rounded-full px-2 py-1
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                                >←</button>
                                <button type="button" onClick={() => scroll(1)} aria-label="Next tutors"
                                    className="bg-transparent text-navy border-navy border-2 rounded-full px-2 py-1
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                                >→</button>
                            </div>
                        </div>


                        <Carousel items={tutors} trackRef={trackRef}/>
                    </div>
                </section>

                {/*CTA section*/}
                <CTASection
                    headline='Want to meet a tutor?'
                    body='Book a free 20-minute intro call. No commitment.'
                    primaryLabel='Book a call'
                    primaryTo='/contact'
                    secondaryLabel='Enroll now'
                    secondaryTo='/enroll'
                />
            </div>
        </div>
    );
}

export default About;