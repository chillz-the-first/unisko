import Section from "../components/Section.jsx";
import Icon from "../lib/Icon.jsx";
import {useEffect, useState} from "react";
import Step1 from "../components/enroll/Step1.jsx";

const Enrol = () => {
    const [step, setStep] = useState(1);
    const labels = ["Parent", "Applicant", "Documents", "Review"];

    const [form, setForm] = useState({
        // Parent / guardian
        title: '', surname: '', firstName: '', initials: '', idNumber: '',
        address: '', town: '', city: '', cellPhone: '', email: '',
        // Student
        studentSurname: '', studentName: '', studentInitials: '', studentID: '',
        gender: '', homeLanguage: '', isSouthAfrican: '', schoolName: '', grade: '',
        // Document acknowledgements
        ackParentId: false, ackStudentId: false, ackRegFee: false,
        // Terms
        agreeTerms: false,
        // Application code
        code: '',
    });
    const [status, setStatus] = useState("idle");

    function handleChange(e) {
        const {name, type} = e.target;
        setForm({...form, [name]: type === "checkbox" ? e.target.checked : e.target.value});
    }

    function next() {
        if (step < 4) {
            setStep(step + 1);
        }
    }
    function prev() {
        if (step > 1) {
            setStep(step - 1);
        }
    }

    useEffect(() => {
        document.querySelector("[data-step-heading]")?.focus();
    }, [step]);

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

                <div className="md:hidden text-center">
                    <p className="text-muted">Step {step}</p>
                    <p  aria-current="step" className="font-semibold text-navy">{labels[step - 1]}</p>
                </div>

                <div className="w-full h-2 bg-navy/10 rounded-full">
                    <div className="h-full bg-navy rounded-full" style={{width: `${step * 25}%`}}></div>
                </div>

                <div className="hidden md:grid grid-cols-4 text-center">
                    {labels.map((label, index) => (
                        <p aria-current={step === index + 1 ? "step" : undefined} key={label}
                           className={step === index + 1 ? "font-semibold text-navy" : "text-muted"}
                        >
                            {label}
                        </p>
                    ))}
                </div>

                {step === 1 && <Step1 next={next} change={handleChange} form={form}/>}

                <pre className="text-xs bg-cream p-4 rounded">{JSON.stringify(form, null, 2)}</pre>
            </div>
        </Section>
    );
};

export default Enrol;