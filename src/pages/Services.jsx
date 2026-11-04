import Section from "../components/Section.jsx";
import {toneStyles as tones} from "../lib/toneStyles.js";
import Button from "../components/Button.jsx";
import Tile from "../components/Tile.jsx";
import {getWhatsAppUrl} from "../lib/whatsapp.js";
import {Link} from "react-router-dom";
import {prices} from "../lib/prices.js";

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
        title: "Group classes",
        when: "Tuesday and Thursday, 4:00 to 5:30 PM",
        desc: "Learners work together in small groups, at a lower price than one-on-one tutoring.",
        includes: ["Groups of 4 to 6", "Peer learning", "Progress report every term"],
        price: prices.groupClasses,
        duration: "per month",
    },
    {
        title: "Homework help",
        when: "Monday to Friday, 3:00 to 5:30 PM",
        desc: "Walk-in support. A tutor works with your child until the homework is done.",
        includes: ["No booking required", "Any subject", "Snack and water"],
        price: prices.homeworkHelp,
        duration: "per visit",
    },
];
const lightTone = tones.white; // Serves both white and cream tiles

const plans = [
    {
        name: "Unisko Basic",
        shortName: "Basic",
        price: prices.basic,
        inherits: "Includes:",
        features: [
            "Recorded English lessons once a week",
            "Worksheets",
            "Study notes",
            "Past papers",
            "Monthly test",
        ],
        msg: "Hello Unisko, I would like to know more about Unisko Basic.",
    },
    {
        name: "Unisko Plus",
        shortName: "Plus",
        price: prices.plus,
        inherits: "Everything in Basic, plus:",
        features: [
            "Weekly recorded lessons in English and mathematics",
            "Teacher interaction",
            "Marked activities",
            "Monthly progress report",
        ],
        msg: "Hello Unisko, I would like to know more about Unisko Plus.",
    },
    {
        name: "Unisko Premium",
        shortName: "Premium",
        price: prices.premium,
        inherits: "Everything in Plus, plus:",
        features: [
            "Two weekly recorded lessons in English and mathematics",
            "A live lesson once a week",
            "Exam preparation",
            "Personalised academic support",
            "Parent progress reports",
            "Priority tutoring and support",
        ],
        msg: "Hello Unisko, I would like to know more about Unisko Premium.",
    },
];

const comparison = {
    columns: ["After-school programme", "Group classes", "Homework help", "Online packages"],
    rows: [
        {label: "Best for", values: [
                "Working parents",
                "Learners who enjoy working with others",
                "Help with homework", "Learning from home"
            ]},
        {label: "Where", values: ["At the centre", "At the centre", "At the centre", "Online"]},
        {label: "When", values: [
                "Mon to Fri, 3:00 to 5:30 PM",
                "Tue and Thu, 4:00 to 5:30 PM",
                "Mon to Fri, 3:00 to 5:30 PM",
                "Recorded lessons any time"
            ]},
        {label: "Price", values: [
                `${prices.afterSchool} per month`,
                `${prices.groupClasses} per month`,
                `${prices.homeworkHelp} per visit`,
                `From ${prices.basic} per month`,
            ]},
    ],
};

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
                        From weekday afternoons at the centre to lessons at home. Choose the option that suits your child.
                    </p>
                </div>
            </Section>

            {/*After-school section*/}
            <Section tone="navy">
                <div className="grid grid-cols-1 ml:grid-cols-2 gap-10">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-headline text-white font-semibold">After-school programme.</h2>
                            <p className="text-white/80 text-lede">
                                Drop-off from school, supervised study, a snack and dedicated time with a tutor.
                                The whole afternoon is taken care of.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <p className="text-stat text-white tabular-nums font-semibold">
                                {prices.afterSchool} <span className="text-sm text-white/80">per month</span>
                            </p>
                            <p className="text-sm text-white/80">Monday to Friday, 3:00 to 5:30 PM</p>
                        </div>

                        <Button to="/enroll" variant="white">Enrol</Button>
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

            {/*Programmes section*/}
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
                                        <CheckIcon color="text-red"/>
                                        {check}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto flex items-center justify-between">
                                <p className="text-navy font-semibold text-title">
                                    {item.price} <span className="text-muted font-normal text-sm">{item.duration}</span>
                                </p>
                                <Button to="/enroll" variant="ink">Enrol</Button>
                            </div>
                        </Tile>
                    ))}
                </div>
            </Section>

            {/*Online packages section*/}
            <Section tone="cream">
                <div className="space-y-4">
                    <h2 className="text-headline text-navy font-semibold">Online packages.</h2>
                    <p className="text-lede text-muted">Learning from home, priced per month.</p>
                </div>

                <div className="grid grid-cols-1 ml:grid-cols-3 mt-8">
                    {plans.map((plan) => (
                        <div key={plan.name}
                             className="ml:border-l ml:border-line ml:first:border-l-0 border-t border-line
                                 px-4 py-6 ml:first:pl-0 ml:last:pr-0"
                        >
                            <div className="space-y-4 mb-8">
                                <h3 className="text-navy font-semibold text-title">{plan.name}</h3>
                                <p className="text-navy text-stat font-semibold tabular-nums">
                                    {plan.price} <span className="text-muted font-normal text-sm">per month</span>
                                </p>
                            </div>


                            <Button href={getWhatsAppUrl(plan.msg)} variant="outline" external={true}>
                                Ask about {plan.shortName}
                            </Button>

                            <div className="mt-8">
                                <p className="text-sm text-muted mb-3">{plan.inherits}</p>
                                <ul className="list-none">
                                    {plan.features.map((item) => (
                                        <li key={item} className="text-navy text-sm border-t border-line py-3.5">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <p className="text-muted text-sm">Billed monthly. Cancel with 30 days' notice.</p>
                    <p className="text-muted text-sm">
                        The registration fee is {prices.registration}.{" "}
                        <Link className="text-red text-sm underline hover:text-red-hover" to="/payment-details">
                            See our payment details
                        </Link>
                    </p>
                </div>
            </Section>

            {/*Comparison section*/}
            <Section>
                <h2 className="text-headline text-navy font-semibold mb-8" id="compare-title">
                    Quick comparison.
                </h2>

                <div className="overflow-x-auto" tabIndex={0} role="region" aria-labelledby="compare-title">
                    <table className="w-full text-left border-collapse min-w-[44rem]">
                        <thead>
                            <tr className="border-b border-line">
                                <td className="w-32" />
                                {comparison.columns.map((column) => (
                                    <th key={column} scope="col"
                                        className="pb-4 pr-6 font-semibold text-navy align-bottom"
                                    >
                                        {column}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {comparison.rows.map((row) => (
                                <tr key={row.label}>
                                    <th scope="row"
                                        className="py-4 pr-6 font-normal text-muted align-top border-b border-line"
                                    >
                                        {row.label}
                                    </th>
                                    {row.values.map((value, i) => (
                                        <td key={`${row.label}-${i}`}
                                            className="py-4 pr-6 text-body align-top border-b border-line"
                                        >
                                            {value}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col md:flex-row items-center mt-8 gap-4">
                    <Button variant="ink" external={true}
                            href={getWhatsAppUrl("Hello Unisko, could you please explain the differences between your packages?")}
                    >
                        Ask us on WhatsApp
                    </Button>
                    <p className="text-muted text-sm">Not sure which option suits your child? We can help you choose.</p>
                </div>
            </Section>
        </div>
    );
};

export default Services;