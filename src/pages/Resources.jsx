import Section from "../components/Section.jsx";
import CTA from "../components/CTA.jsx";
import {getWhatsAppUrl} from "../lib/whatsapp.js";
import {prices} from "../lib/prices.js";

const courses = [
    {
        subject: "Mathematics",
        items: [
            "Grade 8 Foundation",
            "Grade 9 Exam Preparation",
            "Grade 10 Algebra",
            "Grade 10 Geometry",
            "Grade 11 Functions",
            "Grade 12 Trigonometry",
            "Grade 12 Financial Mathematics",
        ],
    },
    {
        subject: "English",
        items: [
            "How to Write a Great Essay",
            "Comprehension Masterclass",
            "Grammar Masterclass",
            "Grade 12 Literature",
            "Creative Writing",
        ],
    },
];

const packs = [
    {pack: "Grade 8 Mathematics Pack", price: prices.grade8MathsPack},
    {pack: "Grade 9 Mathematics Pack", price: prices.grade9MathsPack},
    {pack: "Grade 10 Mathematics Pack", price: prices.grade10MathsPack},
    {pack: "Grade 11 Mathematics Pack", price: prices.grade11MathsPack},
    {pack: "Grade 12 Mathematics Pack", price: prices.grade12MathsPack},
    {pack: "Grade 12 English Pack", price: prices.grade12EnglishPack},
    {pack: "Full Grade 12 Bundle", price: prices.grade12Bundle, contains: "Mathematics and English"},
];

const ctaBtns = [
    {
        type: "href",
        destination: getWhatsAppUrl("Hello Unisko, I am interested in your courses and study packs. " +
            "Could you please send me more information?"),
        text: "Message us on WhatsApp",
        external: true,
    },
];

const Resources = () => {
    return (
        <div>
            {/*Header Section*/}
            <Section>
                <div className="space-y-4">
                    <h1 className="text-navy text-display font-semibold" tabIndex={-1}>Courses and study packs.</h1>
                    <p className="text-lede text-muted max-w-[46ch]">
                        Recorded lessons and printable material your child can work through at home, at their own pace.
                    </p>
                </div>

            </Section>

            {/*Courses Section*/}
            <Section tone="cream">
                <div className="space-y-4 mb-8">
                    <h2 className="text-headline text-navy font-semibold">Each course costs {prices.course}.</h2>
                    <p className="text-lede text-muted max-w-[46ch]">
                        Each course includes 10 video lessons, 10 worksheets, 10 memorandums and a final test.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-12">
                    {courses.map(course => (
                        <div key={course.subject}>
                            <h3 className="py-3.5 font-semibold text-navy">{course.subject}</h3>
                            <ul className="list-none">
                                {course.items.map((item) => (
                                    <li key={item} className="text-body py-3.5 border-t border-line">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>

            {/*Study Packs Section*/}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <div className="space-y-2">
                        <h2 className="text-headline text-navy font-semibold">Study packs.</h2>
                        <p className="text-muted text-lede max-w-[46ch]">
                            Worksheets, revision guides, flashcards, mock exams and memorandums, printed and ready.
                        </p>
                    </div>

                    <ul className="list-none">
                        {packs.map((item) => (
                            <li key={item.pack}
                                className={`flex items-start justify-between gap-4 ${item.contains
                                    ? "bg-navy text-white p-4 rounded-tile mt-3"
                                    : "text-body py-3.5 border-t border-line"}`}
                            >
                                <div>
                                    <p>{item.pack}</p>
                                    {item.contains && (
                                        <p className="text-sm text-white/80">{item.contains}</p>
                                    )}
                                </div>

                                <p className="tabular-nums font-semibold">{item.price}</p>
                            </li>
                        ))}
                    </ul>

                </div>
            </Section>

            {/*CTA Section*/}
            <CTA head="How to buy."
                 lede="Send us a message on WhatsApp, or visit the centre at 43 Oil Avenue, Freedom Park.
                 We will arrange payment and get the material to you."
                 btns={ctaBtns}
            />
        </div>
    );
};

export default Resources;