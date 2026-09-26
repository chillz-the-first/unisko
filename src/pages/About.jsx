import Section from "../components/Section.jsx";

const About = () => {
    return (
        <div>
            <Section>
                <div className="flex flex-col md:flex-row gap-4 items-end justify-between">
                    <div className="space-y-4 text-left max-w-[46ch]">
                        <h1 className="font-semibold text-navy text-display" tabIndex={-1}>
                            Tutoring is how kids stop falling behind.
                        </h1>
                        <p className="text-muted text-lede">
                            Learners slip a grade not because the can't learn, but because nobody had the time to slow
                            down with them. We're the people who do.
                        </p>
                    </div>

                    <div>
                        <p className="text-display text-navy font-semibold">135+</p>
                        <p className="text-muted">Learners since 2021</p>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default About;