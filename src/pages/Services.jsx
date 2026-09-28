import Section from "../components/Section.jsx";
import {toneStyles as tones} from "../styles/toneStyles.js";
import Button from "../components/Button.jsx";
import Tile from "../components/Tile.jsx";

const afterSchoolIncludes = [
    "Drop-off from school",
    "Supervised study",
    "Small groups",
    "Healthy snack",
    "Quiet study space",
    "Progress report every term",
];

const centreServices = [
    {
        title: "Group Classes",
        when: "Tuesday and Thursday, 4:00 to 5:30 PM",
        desc: "Small cohorts learning together, at a lower price than one-on-one time.",
        includes: ["Cohorts of 4 to 6", "Peer learning", "Termly progress reports"],
        price: "R250",
        duration: "per month",
    },
    {
        title: "Homework Help",
        when: "Monday to Friday, 3:00 to 6:00 PM",
        desc: "Drop-in support. Walk in and a tutor sits with your child until it's sorted.",
        includes: ["No booking needed", "Any subject", "Snack and water"],
        price: "R250",
        duration: "per visit",
    },
];
const lightTone = tones.white; // Serves both white and cream tiles

function CheckIcon({ color = "", className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-4 h-4 mt-0.5 flex-none ${color} ${className}`}
            aria-hidden="true"
        >
            <path d="m5 12.5 4.5 4.5L19 7.5" />
        </svg>
    );
}

const Services = () => {
    return (
        <div>
            {/*Header Section*/}
            <Section>
                <div className="space-y-4">
                    <h1 className="text-display font-semibold text-navy" tabIndex={-1}>Four ways to learn at Unisko.</h1>
                    <p className="text-lede text-muted max-w-[46ch]">
                        From weekday afternoons at the centre to lessons at home. Pick what fits your child.
                    </p>
                </div>
            </Section>

            {/*After-school section*/}
            <Section tone="navy">
                <div className="grid grid-cols-1 ml:grid-cols-2 gap-10">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-headline text-white font-semibold">After-School Program.</h2>
                            <p className="text-white/80 text-lede">
                                Drop-off from school, supervised study, a snack, and dedicated tutor time.
                                The full afternoon, sorted.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-stat text-white tabular-nums font-semibold">
                                R500 <span className="text-sm text-white/80">per month</span>
                            </p>
                            <p className="text-sm text-white/80">Monday to Friday, 3:00 to 5:30 PM</p>
                        </div>

                        <Button to="/enroll" variant="white">Enroll</Button>
                    </div>

                    <div>
                        <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-x-6">
                            {afterSchoolIncludes.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 py-3.5 border-t border-white/20 text-sm">
                                    <CheckIcon/>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 ml:grid-cols-2 gap-4">
                    {centreServices.map((item) => (
                        <Tile className="flex flex-col" tone="cream" key={item.title}>
                            <div className="space-y-4 mb-4">
                                <div className="space-y-1">
                                    <h2 className={`text-title font-semibold ${lightTone.title}`}>{item.title}</h2>
                                    <p className="text-sm text-muted">{item.when}</p>
                                </div>

                                <p className={lightTone.body}>{item.desc}</p>
                            </div>


                            <ul className="list-none grid grid-cols-1 ml:grid-cols-2 gap-x-6">
                                {item.includes.map((check) => (
                                    <li className={`flex items-start gap-2.5 py-3.5 border-t ${lightTone.divider} text-sm`} key={check}>
                                        <CheckIcon color={"text-red"}/>
                                        {check}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto flex items-center justify-between">
                                <p className="text-navy font-semibold text-title">
                                    {item.price} <span className="text-muted font-normal text-sm">{item.duration}</span>
                                </p>
                                <Button to="/enroll" variant="ink">Enroll</Button>
                            </div>
                        </Tile>
                    ))}

                </div>
            </Section>
        </div>
    );
};

export default Services;