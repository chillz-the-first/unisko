import SectionStart from "../components/SectionStart.jsx";

const About = () => {
    return (
        <div>
            <div>
                {/*Manifesto section*/}
                <div className="bg-navy py-16 px-10">
                    <div className="max-w-6xl mx-auto relative">
                        <SectionStart color='muted'>OUR MANIFESTO</SectionStart>
                        <h1 className="text-white text-6xl font-semibold font-serif mb-4 max-w-2xl">
                            Tutoring is how kids stop falling behind.
                        </h1>
                        <p className="text-white/70 max-w-lg">
                            Every year, students slip a grade not because they can't learn,
                            but because nobody had the time to slow down with them.
                            We're the people who do.
                        </p>

                        <div className="absolute bottom-0 right-0">
                            <p className="text-white/30 font-serif text-7xl font-semibold">200+</p>
                            <p className="text-white/30 text-xs tracking-kicker uppercase">students · since 2020</p>
                        </div>
                    </div>
                </div>

                {/*Mission section*/}
                <div className="bg-white py-16 px-10">
                    <div className="max-w-6xl mx-auto grid grid-cols-[1fr_2fr] gap-20 items-start">
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
                </div>

                {/*Vision section*/}
                <div className="bg-cream py-16 px-10">
                    <div className="max-w-6xl mx-auto grid grid-cols-[2fr_1fr] gap-20">
                        <div className="space-y-4">
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
                </div>
            </div>
        </div>


    );
}

export default About;