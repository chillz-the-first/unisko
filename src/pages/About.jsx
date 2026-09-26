import Section from "../components/Section.jsx";

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
                            <span className="block text-red font-medium text-base mb-4">Mission</span>
                            A confident learner in every home.
                        </h2>
                        <p className="text-body">
                            We see every child finishing school feeling capable. Not because they are the smartest in
                            the room, but because someone took the time to show them how to learn.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default About;