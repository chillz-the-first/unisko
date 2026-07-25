import SectionStart from "../components/SectionStart.jsx";

const  subjects = ['Mathematics', 'English', 'Science', 'Reading & Writing', 'Algebra', 'Biology',
    'Chemistry', 'Physics', 'History', 'Geography', 'Afrikaans', 'IsiZulu'];

const Home = () => {
    return (
        <div>
            {/*Subjects section*/}
            <div className="p-10 bg-cream">
                <div className="max-w-6xl mx-auto my-3">
                    <div className="flex justify-between items-baseline">
                        <div>
                            <SectionStart>WHAT WE COVER</SectionStart>
                            <h2 className="text-4xl font-serif text-navy">Twelve subjects.<br/>Specialist tutors only.</h2>
                        </div>
                        <p className="text-muted text-right max-w-xs">
                            K-12, taught by tutors who specialise, never by generalists trying to wing it.
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto my-3">
                    <ul className="flex gap-4 flex-wrap">
                        {subjects.map((subject) => (
                            <li className="p-3 text-navy bg-white border border-navy/10 rounded-3xl" key={subject}>{subject}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;