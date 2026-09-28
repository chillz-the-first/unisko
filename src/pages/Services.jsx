import Section from "../components/Section.jsx";
import {toneStyles as tones} from "../styles/toneStyles.js";
import Button from "../components/Button.jsx";

const afterSchoolIncludes = [
    "Drop-off from school",
    "Supervised study",
    "Small groups",
    "Healthy snack",
    "Quiet study space",
    "Progress report every term",
];

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
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                                         strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-none"
                                         aria-hidden="true">
                                        <path d="m5 12.5 4.5 4.5L19 7.5" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Services;