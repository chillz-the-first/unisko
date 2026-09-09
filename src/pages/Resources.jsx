import SectionStart from "../components/SectionStart.jsx";

const courses = [
    {title: "Grade 8 Foundation", subject: "Mathematics", price: "R199"},
    {title: "Grade 9 Exam Preparation", subject: "Mathematics", price: "R199"},
    {title: "Grade 10 Algebra", subject: "Mathematics", price: "R199"},
    {title: "Grade 10 Geometry", subject: "Mathematics", price: "R199"},
    {title: "Grade 11 Functions", subject: "Mathematics", price: "R199"},
    {title: "Grade 12 Trigonometry", subject: "Mathematics", price: "R199"},
    {title: "Grade 12 Financial Mathematics", subject: "Mathematics", price: "R199"},
    {title: "How to Write a Great Essay", subject: "English", price: "R199"},
    {title: "Comprehension Masterclass", subject: "English", price: "R199"},
    {title: "Grammar Masterclass", subject: "English", price: "R199"},
    {title: "Grade 12 Literature", subject: "English", price: "R199"},
    {title: "Creative Writing", subject: "English", price: "R199"},
];

const packs = [
    {title: "Grade 8 Maths Revision Pack", price: "R49"},
    {title: "Grade 9 Mathematics Pack", price: "R59"},
    {title: "Grade 10 Mathematics Pack", price: "R80"},
    {title: "Grade 11 Mathematics Pack", price: "R99"},
    {title: "Grade 12 Mathematics Pack", price: "R129"},
    {title: "Grade 12 English Pack", price: "R129"},
    {title: "Full Grade 12 Bundle", bundle: "Mathematics and English", price: "R250"},
];

const Resources = () => {
    return (
        <div>
            {/*Intro section*/}
            <section className="bg-white py-16 px-10">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-2">
                        <SectionStart>LEARN AT YOUR OWN PACE</SectionStart>
                        <h1 className="font-serif font-semibold text-navy text-4xl md:text-5xl lg:text-6xl">
                            Courses and study packs
                        </h1>
                        <p className="text-body">
                            Recorded lessons and printable material your child can work through at home, at their own pace.
                        </p>
                    </div>
                </div>
            </section>

            {/*Courses section*/}
            <section className="bg-white py-16 px-10">
                <div className="max-w-6xl mx-auto space-y-4">
                    <div className="space-y-3">
                        <SectionStart>RECORDED COURSES</SectionStart>
                        <h2 className="font-serif font-semibold text-navy text-2xl md:text-3xl lg:text-4xl">
                            Every course, R199
                        </h2>
                        <p className="text-sm text-body bg-cream p-3 border-l-2 border-l-red">
                            Each course includes 10 video lessons, 10 worksheets, 10 memorandums, and a final test.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs tracking-kicker font-medium text-muted">MATHEMATICS</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {courses.filter((course) => (course.subject === "Mathematics"))
                                .map((course) => (
                                    <div key={course.title} className="border border-navy/15 rounded-md p-3 space-y-2">
                                        <p className="text-navy">{course.title}</p>
                                        <p className="font-serif text-red">{course.price}</p>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs tracking-kicker font-medium text-muted">ENGLISH</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {courses.filter((course) => (course.subject === "English"))
                                .map((course) => (
                                    <div key={course.title} className="border border-navy/15 rounded-md p-3 space-y-2">
                                        <p className="text-navy">{course.title}</p>
                                        <p className="font-serif text-red">{course.price}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            {/*Packages section*/}
            <section className="bg-navy py-16 px-10">
                <div className="max-w-6xl mx-auto space-y-4">
                    <div className="space-y-2">
                        <SectionStart color="muted">DIGITAL STUDY PACKS</SectionStart>
                        <h2 className="font-serif font-semibold text-white text-2xl md:text-3xl lg:text-4xl">
                            Study Packs
                        </h2>
                        <p className="text-white/70">
                            Worksheets, revision guides, flashcards, mock exams, and memorandums.
                        </p>
                    </div>

                    <div>
                        {packs.map((pack) => (
                            <div key={pack.title}
                                 className={`flex justify-between items-center ${
                                     pack.bundle ? "border border-red rounded-md bg-red/30 px-4 py-4 mt-3" : 
                                         "border-b border-b-white/25 py-3"
                                 }`}>
                                <div>
                                    <p className="text-white font-semibold">{pack.title}</p>
                                    {pack.bundle && <p className="text-white/70">{pack.bundle}</p>}
                                </div>
                                <p className="text-white font-serif font-semibold">{pack.price}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/*CTA section*/}
            <section className="bg-white py-16 px-10">
                <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
                    <h2 className="font-serif font-semibold text-navy text-2xl md:text-3xl lg:text-4xl">
                        How to buy
                    </h2>
                    <p className="text-body/80">
                        Message us on WhatsApp or visit the centre at 43 Oil Avenue, Freedom Park.
                        We'll sort out payment and get the material to you.
                    </p>
                    <a href="https://wa.me/27618117116?text=Hi%20Unisko%2C%20I'm%20interested%20in%20Unisko%20Packages/Courses"
                       className="bg-red text-white text-center rounded-full px-4 py-2">Message us on WhatsApp</a>
                </div>
            </section>
        </div>
    );
}

export default Resources;