import {useState} from "react";
import Step1 from "./enroll/Step1.jsx";
import SectionStart from "./SectionStart.jsx";
import Step2 from "./enroll/Step2.jsx";
import Step3 from "./enroll/Step3.jsx";
import Step4 from "./enroll/Step4.jsx";

const EnrollWizard = () => {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        // Parent / guardian
        title: '', surname: '', firstName: '', initials: '', idNumber: '', paymentDate: '',
        address: '', town: '', city: '', cellPhone: '',
        // Student
        studentSurname: '', studentFirstName: '', studentInitials: '', studentID: '',
        gender: '', homeLanguage: '', isSouthAfrican: '', schoolName: '', grade: '',
        // Document acknowledgements
        ackParentId: false, ackStudentId: false, ackRegFee: false,
        // Terms
        agreeTerms: false,
    })
    const labels = ['Parent', 'Applicant', 'Documents', 'Review']

    function handleChange(e) {
        const {name, type} = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? e.target.checked : e.target.value,
        });
    }

    function next() {
        if (step < 4) {
            setStep(step + 1);
        }
    }
    function back() {
        if (step > 1) {
            setStep(step - 1);
        }
    }

    function cap(text) {
        if (!text) return '';

        return text.split(' ').map((word) => {
            if (word.length === 0 || typeof word !== 'string') return word;

            return word.charAt(0).toUpperCase() + word.substring(1);
        }).join(' ');
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!form.agreeTerms) return;

        const cleaned = {
            ...form,
            firstName: cap(form.firstName),
            surname: cap(form.surname),
            address: cap(form.address),
            city: cap(form.city),
            town: cap(form.town),
            studentSurname: cap(form.studentSurname),
            studentFirstName: cap(form.studentFirstName),
            schoolName: cap(form.schoolName),
            initials: form.initials.toUpperCase(),
            studentInitials: form.studentInitials.toUpperCase(),
        };
        console.log('Submitting enrollment form', cleaned);
    }

    return (
        <section className="bg-white py-16 px-10">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-4">
                    <SectionStart>STEP {step} OF 4</SectionStart>

                    <div className="w-full h-2 bg-navy/10 rounded-full">
                        <div className="h-full bg-navy rounded-full" style={{width: `${step * 25}%`}}></div>
                    </div>

                    <div className="grid grid-cols-4 items-center text-center">
                        {labels.map((label, i) => (
                            <div key={label}>
                                <p className={`text-sm tracking-kicker font-medium ${
                                    step === i + 1 ? 'text-red' : 'text-muted'
                                }`}>{i + 1}</p>
                                <p className={`${
                                    step === i + 1 ? 'font-semibold text-navy' : 'text-muted'
                                }`}>{label}</p>
                            </div>
                        ))}
                    </div>

                    <div className='border border-navy/15'/>
                </div>



                {step === 1 && <Step1 form={form} change={handleChange} next={next}/>}
                {step === 2 && <Step2 form={form} setForm={setForm} change={handleChange} next={next} back={back}/>}
                {step === 3 && <Step3 form={form} change={handleChange} next={next} back={back}/>}
                {step === 4 && <Step4 form={form} setStep={setStep} change={handleChange}
                                      submit={handleSubmit} back={back} cap={cap}/>}
            </div>
        </section>
    );
}

export default EnrollWizard;