import Section from "../components/Section.jsx";
import Icon from "../lib/Icon.jsx";
import {useEffect, useRef, useState} from "react";
import Step1 from "../components/enroll/Step1.jsx";
import Step2 from "../components/enroll/Step2.jsx";
import Step3 from "../components/enroll/Step3.jsx";
import Step4 from "../components/enroll/Step4.jsx";
import Button from "../components/Button.jsx";

const LABELS = ["Parent", "Applicant", "Documents", "Review"];

const EMPTY_PARENT = {
    title: "", surname: "", firstName: "", initials: "", idNumber: "",
    address: "", town: "", city: "", cellPhone: "", email: "",
};
const EMPTY_CHILD = {
    studentSurname: "", studentName: "", studentInitials: "", studentID: "",
    gender: "", homeLanguage: "", isSouthAfrican: "", schoolName: "", grade: "",
    ackParentId: false, ackStudentId: false, ackRegFee: false,
    mediaConsent: false, agreeTerms: false,
};
const EMPTY_FORM = { ...EMPTY_PARENT, ...EMPTY_CHILD };

function cap(text) {
    const clean = text.trim().replace(/\s+/g, " ");
    const isMixedCase = clean !== clean.toLowerCase() && clean !== clean.toUpperCase();
    if (isMixedCase) return clean;

    return clean.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function generateCode() {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const code = Math.random().toString(36).substring(2, 10);

    return `${year}${month}${day}-${code}`;
}

const Enrol = () => {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState(EMPTY_FORM);
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error
    const [code, setCode] = useState("");

    const successRef = useRef(null);

    function handleChange(e) {
        const { name, type, checked, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    }

    function goToStep(n) {
        if (status === "error") setStatus("idle");
        setStep(n);
    }
    function next() {
        if (step < 4) setStep(step + 1);
    }
    function prev() {
        if (step > 1) setStep(step - 1);
    }

    function reset() {
        setForm((prev) => ({ ...prev, ...EMPTY_CHILD }));
        setCode("");
        setStatus("idle");
        setStep(2);
    }

    async function handleSubmit() {
        if (status === "sending") return;

        const appCode = code || generateCode();
        const today = new Intl.DateTimeFormat('fr-CA').format(new Date());
        const email = form.email.trim().toLowerCase();

        const payload = {
            _subject: `New application: ${cap(form.studentName)} ${cap(form.studentSurname)} (${appCode})`,
            code: appCode,
            ...form,
            firstName: cap(form.firstName),
            surname: cap(form.surname),
            initials: form.initials.trim().toUpperCase(),
            idNumber: form.idNumber.replace(/\s/g, ""),
            address: cap(form.address),
            town: cap(form.town),
            city: cap(form.city),
            cellPhone: form.cellPhone.trim(),
            email: email || undefined,
            _replyto: email || undefined,
            studentSurname: cap(form.studentSurname),
            studentName: cap(form.studentName),
            studentInitials: form.studentInitials.trim().toUpperCase(),
            studentID: form.studentID.replace(/\s/g, ""),
            homeLanguage: cap(form.homeLanguage),
            schoolName: cap(form.schoolName),
            ackParentId: form.ackParentId ? "Yes" : "No",
            ackStudentId: form.ackStudentId ? "Yes" : "No",
            ackRegFee: form.ackRegFee ? "Yes" : "No",
            mediaConsent: form.mediaConsent ? "Yes" : "No",
            agreeTerms: form.agreeTerms ? `Accepted ${today}` : "No",
        };

        setCode(appCode);
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

            setStatus(response.ok ? "sent" : "error");
        }
        catch {
            setStatus("error");
        }
    }

    useEffect(() => {
        document.querySelector("[data-step-heading]")?.focus();
    }, [step]);
    useEffect(() => {
        if (status === "sent") successRef.current?.focus();
    }, [status]);

    return (
        <Section>
            <div className="space-y-4">
                <h1 className="text-navy text-display font-semibold" tabIndex={-1}>Join Unisko.</h1>

                <div className="flex flex-col md:flex-row md:items-center gap-x-6 gap-y-1 text-lede text-muted">
                    <p className="flex items-center gap-2 min-h-[44px]">
                        <Icon name="pin" /> 43 Oil Avenue, Freedom Park
                    </p>
                    <a href="tel:+27618117116" className="flex items-center gap-2 min-h-[44px] hover:text-navy hover:underline">
                        <Icon name="phone" /> 061 811 7116
                    </a>
                    <a href="mailto:unisko.co@gmail.com" className="flex items-center gap-2 min-h-[44px] hover:text-navy hover:underline">
                        <Icon name="mail" /> unisko.co@gmail.com
                    </a>
                </div>
            </div>

            {status === "sent" ? (
                <div className="mx-auto max-w-2xl py-12 text-center">
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
                        <Icon name="check" className="w-8 h-8" strokeWidth={2.2} />
                    </span>

                    <h2 ref={successRef} tabIndex={-1} className="mt-6 text-headline font-semibold text-navy">
                        Application submitted.
                    </h2>
                    <p className="mt-4 text-lede text-muted">
                        We'll get back to you as soon as possible.
                    </p>

                    <div className="mt-8 rounded-tile bg-cream px-6 py-5">
                        <p className="text-sm text-muted">Your application code</p>
                        <p className="mt-1 font-mono text-title font-semibold tracking-wide text-navy">{code}</p>
                    </div>

                    <p className="mt-6 text-body">
                        Bring this code and the three documents to your child's first session.
                    </p>

                    <div className="mt-8">
                        <Button variant="outline" type="button" onClick={reset}>Enrol another child</Button>
                    </div>
                </div>
            ) : (
                <div className="my-4 space-y-2">
                    <p className="text-muted hidden md:block">Step {step} of 4</p>

                    <div className="md:hidden text-center">
                        <p className="text-muted">Step {step} of 4</p>
                        <p aria-current="step" className="font-semibold text-navy">{LABELS[step - 1]}</p>
                    </div>

                    {/* Decorative: "Step N of 4" above already says the same thing in words. */}
                    <div className="w-full h-2 bg-navy/10 rounded-full" aria-hidden="true">
                        <div className="h-full bg-navy rounded-full" style={{ width: `${step * 25}%` }} />
                    </div>

                    <div className="hidden md:grid grid-cols-4 text-center">
                        {LABELS.map((label, index) => (
                            <p key={label} aria-current={step === index + 1 ? "step" : undefined}
                               className={step === index + 1 ? "font-semibold text-navy" : "text-muted"}
                            >
                                {label}
                            </p>
                        ))}
                    </div>

                    {step === 1 && <Step1 next={next} change={handleChange} form={form} />}
                    {step === 2 && <Step2 next={next} back={prev} change={handleChange} form={form} />}
                    {step === 3 && <Step3 next={next} back={prev} change={handleChange} form={form} />}
                    {step === 4 && (
                        <Step4 back={prev} change={handleChange} form={form} setStep={goToStep}
                               submit={handleSubmit} status={status}
                        />
                    )}
                </div>
            )}
        </Section>
    );
};

export default Enrol;