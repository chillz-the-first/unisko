import SectionStart from "../components/SectionStart.jsx";

const About = () => {
    return (
        <div>
            <div>
                {/*Manifesto section*/}
                <div className="bg-navy pt-16 pb-28 px-10">
                    <div className="max-w-6xl relative">
                        <SectionStart color='muted'>OUR MANIFESTO</SectionStart>
                        <h1 className="text-white text-6xl font-semibold font-serif mb-4 max-w-2xl">
                            Tutoring is how kids stop falling behind.
                        </h1>
                        <p className="text-white/70 max-w-lg">
                            Every year, students slip a grade not because they can't learn,
                            but because nobody had the time to slow down with them.
                            We're the people who do.
                        </p>

                        <div className="absolute -bottom-12 right-0">
                            <p className="text-white/20 font-serif text-7xl font-semibold">200+</p>
                            <p className="text-white/20 text-sm">STUDENTS · SINCE 2020</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
}

export default About;