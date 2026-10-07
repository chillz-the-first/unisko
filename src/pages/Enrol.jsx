import Section from "../components/Section.jsx";
import Icon from "../lib/Icon.jsx";
import {useEffect, useState} from "react";
import Step1 from "../components/enroll/Step1.jsx";
import Step2 from "../components/enroll/Step2.jsx";
import Step3 from "../components/enroll/Step3.jsx";
import Step4 from "../components/enroll/Step4.jsx";
import Button from "../components/Button.jsx";

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
        mediaConsent: false,
        agreeTerms: false,
        // Application code
        code: '',
    });
    const [status, setStatus] = useState("idle");

    function handleChange(e) {
        const { name, type, checked, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
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

    function reset() {
        setForm({
            title: '', surname: '', firstName: '', initials: '', idNumber: '', address: '', town: '', city: '',
            cellPhone: '', email: '', studentSurname: '', studentName: '', studentInitials: '', studentID: '',
            gender: '', homeLanguage: '', isSouthAfrican: '', schoolName: '', grade: '', ackParentId: false,
            ackStudentId: false, ackRegFee: false, mediaConsent: false, agreeTerms: false, code: '',
        });
        setStatus("idle");
    }

    function cap(text) {
        if (!text) return "";

        return (
            text.split(' ').map((word) => {
                if (word.length === 0 || typeof word !== "string") return word;
                return word.charAt(0).toUpperCase() + word.slice(1);
            }).join(' ')
        )
    }

    function generateCode() {
        const date = new Date();
        const year = date.getFullYear().toString().slice(-2);
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const code = Math.random().toString(36).substring(2, 10);

        return `${year}${month}${day}-${code}`;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (status === "sending") return;

        const code = generateCode();
        const today = new Intl.DateTimeFormat('fr-CA').format(new Date());

        const payload = {
            ...form,
            firstName: cap(form.firstName),
            surname: cap(form.surname),
            address: cap(form.address),
            town: cap(form.town),
            city: cap(form.city),
            studentSurname: cap(form.studentSurname),
            studentName: cap(form.studentName),
            schoolName: cap(form.schoolName),
            initials: form.initials.toUpperCase(),
            studentInitials: form.studentInitials.toUpperCase(),
            ackRegFee: form.ackRegFee ? "Yes" : "No",
            ackParentId: form.ackParentId ? "Yes" : "No",
            ackStudentId: form.ackStudentId ? "Yes" : "No",
            mediaConsent: form.mediaConsent ? "Yes" : "No",
            agreeTerms: form.agreeTerms ? `Accepted ${today}` : "No",
            code: code,
            _subject: `New application: ${form.studentSurname} ${form.studentName} (${code})`,
        };
        setForm(payload);
        setStatus("sending");

        try {
            const response = await fetch('https://formspree.io/f/xgawakjv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            response.ok ? setStatus("sent") : setStatus("error");
        }
        catch (error) {
            setStatus("error");
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

            {status === "sent" ? (
                <div className="flex flex-col items-center justify-center space-y-2">
                    <img src="/images/green-tick.jpg" alt="Green checkmark" className="object-cover w- h-"/>

                    <div className="space-y-4 text-center">
                        <h2 className="font-semibold text-headline text-navy">Application Submitted ({form.code})</h2>
                        <h3 className="text-title font-semibold text-body">
                            We'll get back to you with a response as soon as possible!
                        </h3>
                        <p className="text-muted text-lede">
                            Please remember to bring the required documents with the application code ({form.code})
                            on the first day.
                        </p>
                        <Button variant="outline" onClick={reset}>Send another application.</Button>
                    </div>
                </div>
            ) : (
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
                    {step === 2 && <Step2 next={next} back={prev} change={handleChange} form={form}/>}
                    {step === 3 && <Step3 next={next} back={prev} change={handleChange} form={form}/>}
                    {step === 4 && <Step4 back={prev} change={handleChange} form={form} setStep={setStep}
                                          submit={handleSubmit} status={status}
                    />}
                </div>
            )}


        </Section>
    );
};

export default Enrol;