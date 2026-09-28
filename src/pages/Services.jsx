import Section from "../components/Section.jsx";
import {toneStyles as tones} from "../lib/toneStyles.js";
import Button from "../components/Button.jsx";
import Tile from "../components/Tile.jsx";
import {getWhatsAppUrl} from "../lib/whatsapp.js";
import {Link} from "react-router-dom";

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

const plans = [
    {
        name: "Unisko Basic",
        shortName: "Basic",
        price: "R149",
        inherits: "Includes:",
        features: [
            "English recorded lessons once a week",
            "Worksheets",
            "Study notes",
            "Past papers",
            "Monthly test",
        ],
        msg: "Hi Unisko, I'd like to know more about Unisko Basic.",
    },
    {
        name: "Unisko Plus",
        shortName: "Plus",
        price: "R300",
        inherits: "Everything in Basic, plus:",
        features: [
            "Weekly recorded lessons in English and maths",
            "Teacher interaction",
            "Marked activities",
            "Monthly progress report",
        ],
        msg: "Hi Unisko, I'd like to know more about Unisko Plus.",

    },
    {
        name: "Unisko Premium",
        shortName: "Premium",
        price: "R499",
        inherits: "Everything in Plus, plus:",
        features: [
            "Two weekly recorded lessons in English and maths",
            "A live lesson once a week",
            "Exam preparation",
            "Personalised academic support",
            "Parent progress reports",
            "Priority tutoring and support",
        ],
        msg: "Hi Unisko, I'd like to know more about Unisko Premium.",
    },
];

const comparison = {
    columns: [" ", "After-School Program", "Group Classes", "Homework Help", "Online packages"],
    rows: [
        { label: "Best for", values: ["Working parents", "Social learners", "Stuck on homework", "Learning from home"] },
        { label: "Where", values: ["At the centre", "At the centre", "At the centre", "Online"] },
        { label: "When", values: ["Mon to Fri, 3:00 to 5:30 PM", "Tue and Thu, 4:00 to 5:30 PM", "Mon to Fri, 3:00 to 6:00 PM", "Recorded lessons any time"] },
        { label: "Price", values: ["R500 per month", "R250 per month", "R250 per visit", "From R149 per month"] },
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

            {/*Online packages section*/}
            <Section tone="cream">
                <div className="space-y-4">
                    <h2 className="text-headline text-navy font-semibold">Online packages.</h2>
                    <p className="text-lede text-muted">Keep learning from home, priced per month.</p>
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
                        The registration fee is R150,{" "}
                        <Link className="text-red text-sm hover:underline" to="/payment-details">see our payment details</Link>
                    </p>
                </div>
            </Section>

            {/*Comparison section*/}
            <Section>
                <h2 className="text-headline text-navy font-semibold mb-8" id="compare-title">Quick comparison.</h2>

                <div className="overflow-x-auto" tabIndex={0} role="region" aria-labelledby="compare-title">
                    <table className="w-full text-left border-collapse min-w-[44rem]">
                        <thead className="text-navy font-semibold">
                            <tr className="border-b border-line">
                                <th className="w-1/5 py-6 font-semibold text-navy align-top" />
                                {comparison.columns.slice(1).map((column) => (
                                    <th key={column} className="w-1/5 py-6 pr-6 font-bold text-navy text-lg leading-snug align-top">
                                        <span className="max-w-[140px] block">{column}</span>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                        {comparison.rows.map((row) => (
                            <tr key={row.label}>
                                <th className="text-muted font-normal border-b border-line py-2">{row.label}</th>
                                {row.values.map((value) => (
                                    <td key={value} className="border-b border-line py-2">{value}</td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col md:flex-row items-center mt-8 gap-4">
                    <Button  variant="ink"
                             href={getWhatsAppUrl("Hi Unisko, can you please explain the differences in your provided packages.")}
                    >
                        Ask us on WhatsApp
                    </Button>
                    <p className="text-muted text-sm">Not sure which one fits? We'll help you pick.</p>
                </div>
            </Section>
        </div>
    );
};

export default Services;