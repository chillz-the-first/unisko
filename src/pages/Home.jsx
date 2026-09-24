import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import Arrowlink from "../components/Arrowlink.jsx";
import Tile from "../components/Tile.jsx";

const stats = [
    {value: "135+", label: "Learners enrolled"},
    {value: "2021", label: "The year Unisko started"},
    {value: "1:15", label: "Tutor to learner ratio"},
    {value: "1 Term", label: "For a full level jump"},
];

const packages = [
    {
        title: "After-School Program",
        details: "Monday to Friday, 3:00 to 5:30 PM",
        body: "Drop-off from school, supervised study, a snack, and dedicated tutor time.",
        price: "R500",
        duration: "per month",
        btnTo: "/services",
        btnText: "Learn more",
        btnTextColor: "white",
        tone: "navy",
        span: "ml:col-span-4",
    },
    {
        title: "Group Classes",
        details: "Tuesday and Thursday, 4:00 to 5:30 PM",
        body: "Small cohorts of 4 to 6 learners.",
        price: "R250",
        duration: "per month",
        tone: "white",
        span: "ml:col-span-2",
    },
    {
        title: "Homework Help",
        details: "Monday to Friday, 3:00 to 6:00 PM",
        body: "Walk in, no booking needed.",
        price: "R250",
        duration: "per visit",
        tone: "white",
        span: "ml:col-span-2",
    },
    {
        title: "Online Packages",
        details: "Learn from home",
        body: "Recorded lessons, worksheets and monthly tests, with live lessons on Premium.",
        price: "From R149",
        duration: "per month",
        btnTo: "/services",
        btnText: "Compare packages",
        btnTextColor: "red",
        tone: "white",
        span: "ml:col-span-4",
    },

];
const toneStyles = {
    navy : {
        title: "text-white",
        detail: "text-white/80",
        body: "text-white/80",
        price: "text-white",
        duration: "text-white/80",
        divider: "border-white/20",
    },
    white: {
        title: "text-navy",
        detail: "text-muted",
        body: "text-body",
        price: "text-body",
        duration: "text-muted",
        divider: "border-line",
    },
};

const subjectGroups = [
    {group: "Languages", subjects: ["English", "isiZulu"]},
    {group: "Mathematics", subjects: ["Mathematics", "Mathematical Literacy"]},
    {group: "Sciences", subjects: ["Physical Sciences", "Life Sciences"]},
    {group: "Humanities and Commerce", subjects: ["Geography", "History", "Business Studies"], tone: "navy"},
];

const Home = () => {
    return (
        <div>
            {/*Hero Section*/}
            <Section>
                <div className="flex flex-col items-center text-center gap-4">
                    <h1 className="text-display text-navy font-semibold" tabIndex={-1}>
                        After-school tutoring in Freedom Park.
                    </h1>
                    <p className="text-lede text-muted max-w-[46ch]">
                        Patient tutors, small groups, and a progress report for parents every term.
                    </p>

                    <div className="flex flex-col ml:flex-row gap-6 items-center">
                        <Button to="/enroll">Enroll</Button>
                        <Arrowlink to={"/services"}>Explore Services</Arrowlink>
                    </div>
                </div>

                <img src="/images/stu_group_pic_1.jpg" alt="Group picture of students"
                     className="rounded-tile object-cover w-full aspect-[4/3] ml:aspect-[16/9] mt-8"/>

                <div className="mt-16">
                    <h2 className="text-headline text-navy font-semibold mb-8">Unisko at a glance.</h2>
                    <div className="grid grid-cols-2 ml:grid-cols-4 gap-8 ml:border-t ml:border-line">
                        {stats.map((item) => (
                            <div className="space-y-2 ml:border-l ml:border-line ml:first:border-l-0 ml:pl-6 ml:pt-6" key={item.label}>
                                <p className="text-stat text-navy font-semibold tabular-nums">{item.value}</p>
                                <p className="text-sm text-muted">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/*Package Section*/}
            <Section tone="cream">
                <div className="space-y-4 mb-8">
                    <h2 className="text-headline text-navy font-semibold">Four ways to learn.</h2>
                    <p className="text-lede text-muted">At the centre on weekday afternoons or from home.</p>
                </div>

                <div className="grid grid-cols-1 ml:grid-cols-6 gap-4">
                    {packages.map((item) => {
                        const t = toneStyles[item.tone];

                        return (
                            <Tile tone={item.tone} key={item.title}
                                  className={`${item.span} min-h-[14rem] flex flex-col`}
                            >
                                <div className="space-y-4">
                                    <h3 className={`text-title font-semibold ${t.title}`}>{item.title}</h3>
                                    <p className={`text-sm ${t.detail}`}>{item.details}</p>
                                    <p className={`max-w-sm ${t.body}`}>{item.body}</p>
                                </div>

                                <div className="mt-auto pt-6 min-h-[44px] flex flex-wrap items-center justify-between gap-4">
                                    <p className={`text-title font-semibold tabular-nums ${t.price}`}>
                                        {item.price}
                                        <span className={`ml-1.5 text-sm font-normal ${t.duration}`}>{item.duration}</span>
                                    </p>
                                    {item.btnTo && (
                                        <Arrowlink to={item.btnTo} textColor={item.btnTextColor}>
                                            {item.btnText}
                                        </Arrowlink>
                                    )}
                                </div>
                            </Tile>
                        );
                    })}
                </div>
            </Section>

            {/*Subjects section*/}
            <Section>
                <div className="space-y-4 mb-8">
                    <h2 className="text-headline text-navy font-semibold">Subjects our tutors teach.</h2>
                    <p className="text-muted text-lede max-w-[46ch]">
                        {subjectGroups.reduce((total, g) => total + g.subjects.length, 0)} subjects across languages, maths, the sciences and commerce.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 ml:grid-cols-4 gap-4">
                    {subjectGroups.map((item) => {
                        const t = toneStyles[item.tone] || toneStyles.white;

                        return (
                            <Tile tone={item.tone} key={item.group}>
                                <h3 className={`font-semibold mb-2 text-lede ${t.title}`}>{item.group}</h3>
                                <ul className="list-none">
                                    {item.subjects.map((sub) => (
                                        <li key={sub} className={`border-t ${t.divider} ${t.body} py-2`}>{sub}</li>
                                    ))}
                                </ul>
                            </Tile>
                        );
                    })}
                </div>
            </Section>
        </div>
    )
}

export default Home;
