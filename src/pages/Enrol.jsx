import Section from "../components/Section.jsx";
import Icon from "../lib/Icon.jsx";
import {useState} from "react";

const Enrol = () => {
    const [step, setStep] = useState(1);
    const labels = ["Parent", "Applicant", "Documents", "Review"];

    return (
        <Section>
            <div className="space-y-4">
                <h1 className="text-navy text-display font-semibold" tabIndex={-1}>Join Unisko.</h1>

                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <p className="text-lede text-muted flex items-center gap-2">
                        <Icon name="pin"/> 43 Oil Avenue, Freedom Park
                    </p>
                    <p className="text-lede text-muted flex items-center gap-2">
                        <Icon name="phone"/> 061 811 7116
                    </p>
                    <p className="text-lede text-muted flex items-center gap-2">
                        <Icon name="mail"/> unisko.co@gmail.com
                    </p>
                </div>
            </div>

            <div className="my-4 space-y-2">
                <p className="text-muted hidden md:block">Step {step} of 4</p>

                <div className="w-full h-2 bg-navy/10 rounded-full">
                    <div className="h-full bg-navy rounded-full" style={{width: `${step * 25}%`}}></div>
                </div>

                <div className="hidden md:grid grid-cols-4 text-center">
                    {labels.map((label, index) => (
                        <p className={step === index + 1 ? "font-semibold text-navy" : "text-muted"}>
                            {label}
                        </p>
                    ))}
                </div>
                <div className="md:hidden text-center">
                    <p className="text-muted">Step {step}</p>
                    <p className="font-semibold text-navy">{labels[step - 1]}</p>
                </div>
            </div>
        </Section>
    );
};

export default Enrol;