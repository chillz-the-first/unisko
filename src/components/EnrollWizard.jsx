import {useState} from "react";
import Step1 from "./Step1.jsx";
// import Step2 from "./Step2.jsx";

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

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
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

    return (
        <section className="bg-white py-16 px-10">
            <div className="max-w-6xl mx-auto">
                <p>current step: {step}</p>
                {step === 1 && <Step1 step={step} form={form} change={handleChange} next={next}/>}
                {/*{step === 2 && <Step2 form={form} onChange={handleChange} onNext={next} onBack={back}/>}*/}
            </div>
        </section>
    );
}

export default EnrollWizard;