import SectionStart from "../components/SectionStart.jsx";
import {Link} from "react-router-dom";
import Placeholder from "../components/Placeholder.jsx";

const  subjects = ['Mathematics', 'English', 'Science', 'Reading & Writing', 'Algebra', 'Biology',
    'Chemistry', 'Physics', 'History', 'Geography', 'Afrikaans', 'IsiZulu'];

const testimonials = [
    {
        'quote': 'Ntombi\'s grades jumped a full level, and she actually likes maths now.',
        'name': 'Nomsa K.',
        'grade': 'Grade 7',
    },
    {
        'quote': 'The weekly emails are the difference. We finally know what\'s going on at school.',
        'name': 'Pieter V.',
        'grade': 'Grade 4',
    },
    {
        'quote': 'Patient with my son. Strict about progress. Worth every rand.',
        'name': 'Aisha M.',
        'grade': 'Grade 10',
    },
];

const Home = () => {
    return (
        <div>
            {/*Hero section*/}
            <div className="bg-cream">
                {/*Hero section — TODO: full-bleed cream/navy backgrounds to screen edges*/}
                <div className="max-w-6xl mx-auto grid grid-cols-[1.17fr_1fr] w-full">
                    <div className="bg-cream py-16 px-6">
                        <SectionStart>SINCE 2020 · FREEDOM PARK</SectionStart>
                        <h1 className="font-serif text-navy my-4 text-6xl font-semibold">
                            Over five years <br/>of helping <br/>kids stop <br/>falling behind.
                        </h1>
                        <p className="my-2">
                            A tutor who shows up. An open loop for parents. Progress you can see in twelve weeks
                        </p>
                        <div className="flex gap-6 my-4">
                            <Link to='/enroll' className="bg-red text-white py-2 px-5 rounded-full">Enroll your child</Link>
                            <Link to='/contact' className="bg-transparent py-2 px-5 border border-navy rounded-full text-navy">
                                Book a free call
                            </Link>
                        </div>
                    </div>

                    <div className="bg-navy py-16 px-10">
                        <SectionStart color='muted'>BY THE NUMBERS</SectionStart>
                        <p className="font-serif text-white text-7xl">1:8</p>
                        <p className="text-white text-xs">Tutor to student ratio</p>
                        <hr className="h-[1px] bg-white/10 my-6 border-0"/>

                        <p className="font-serif text-white text-5xl">12 wks</p>
                        <p className="text-white text-xs">to a full level jump</p>
                        <hr className="h-[1px] bg-white/10 my-6 border-0"/>
                        <p className="font-serif text-white text-5xl">K-12</p>
                        <p className="text-white text-xs">Every grade, no exceptions</p>
                    </div>
                </div>
            </div>

            {/*About section*/}
            <div className="p-10 bg-white">
                <div className="max-w-6xl mx-auto my-3 grid grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionStart>ABOUT UNISKO</SectionStart>
                        <h2 className="text-navy text-4xl font-serif my-2">We started with four students in a garage.</h2>
                        <p className="text-muted my-2">
                            Today we serve every grade from K to 12, and we still know every student's name. No
                            franchise model. No rotating substitutes.
                        </p>
                        <Link to='/about' className='text-navy underline underline-offset-8'>Learn about us →</Link>
                    </div>

                    <div className="relative">
                        <Placeholder aspectRatio='4/5' label='CLASSROOM'/>
                        <blockquote className="absolute -bottom-9 -left-10 bg-navy font-serif text-white italic p-6 rounded-lg">
                            "We know every student's name."
                        </blockquote>
                    </div>
                </div>
            </div>

            {/*Subjects section*/}
            <div className="p-10 bg-cream">
                <div className="max-w-6xl mx-auto my-3">
                    <div className="flex justify-between items-baseline mb-8 gap-6">
                        <div>
                            <SectionStart>WHAT WE COVER</SectionStart>
                            <h2 className="text-4xl font-serif text-navy">Twelve subjects.<br/>Specialist tutors only.
                            </h2>
                        </div>
                        <p className="text-muted text-right max-w-xs">
                            K-12, taught by tutors who specialise, never by generalists trying to wing it.
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto my-3">
                    <ul className="flex gap-4 flex-wrap">
                        {subjects.map((subject) => (
                            <li className="p-3 text-navy bg-white border border-navy/10 rounded-3xl"
                                key={subject}>{subject}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/*Testimonials section*/}
            <div className="p-10 bg-white">
                <div className="max-w-6xl mx-auto my-10">
                    <SectionStart>PARENT VOICES</SectionStart>
                    <h2 className="text-4xl font-serif text-navy">What parents say.</h2>
                </div>

                <div className="max-w-6xl mx-auto my-4 grid grid-cols-[1.5fr_1fr] gap-4">
                    <div className="bg-cream p-6 border-l-4 border-red rounded-lg">
                        <p className="text-red">★★★★★</p>
                        <blockquote className="font-serif text-navy text-2xl my-3">"{testimonials[0].quote}"
                        </blockquote>
                        <p className="text-navy">{testimonials[0].name}</p>
                        <p className="text-muted">Parent of {testimonials[0].grade}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        {testimonials.slice(1).map((t) => (
                            <div className="bg-cream p-6 rounded-lg" key={t.name}>
                                <p className="text-red">★★★★★</p>
                                <blockquote className="text-navy my-3">"{t.quote}"</blockquote>
                                <p className="text-navy">{t.name} <span className="text-muted">· {t.grade}</span></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;