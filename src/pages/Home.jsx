import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import Arrowlink from "../components/Arrowlink.jsx";

const stats = [
    {value: "135+", label: "Learners enrolled"},
    {value: "2021", label: "The year Unisko started"},
    {value: "1:15", label: "Tutor to learner ratio"},
    {value: "1 Term", label: "For a full level jump"},
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
        </div>
    )
}

export default Home;
