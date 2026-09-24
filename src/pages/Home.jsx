import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import Arrowlink from "../components/Arrowlink.jsx";


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


            </Section>

        </div>
    )
}

export default Home;
