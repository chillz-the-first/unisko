import {useState} from "react";
import Step1 from "./Step1.jsx";
import SectionStart from "./SectionStart.jsx";
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
    const labels = ['Parent', 'Applicant', 'Documents', 'Review']

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
                <div className="space-y-4">
                    <SectionStart>STEP {step} OF 4</SectionStart>

                    <div className="w-full h-2 bg-navy/10 rounded-full">
                        <div className="h-full bg-navy rounded-full" style={{width: `${step * 25}%`}}></div>
                    </div>

                    <div className="grid grid-cols-4 items-center text-center">
                        {labels.map((label, i) => (
                            <div key={label}>
                                <p className={`text-[10px] tracking-kicker font-medium ${
                                    step === i + 1 ? 'text-red' : 'text-muted'
                                }`}>{i + 1}</p>
                                <p className={`${
                                    step === i + 1 ? 'font-semibold text-navy' : 'text-muted'
                                }`}>{label}</p>
                            </div>
                        ))}
                    </div>
                </div>



                {step === 1 && <Step1 step={step} form={form} change={handleChange} next={next}/>}
                {/*{step === 2 && <Step2 form={form} onChange={handleChange} onNext={next} onBack={back}/>}*/}

                <p>{JSON.stringify(form)}</p>
            </div>
        </section>
    );
}

export default EnrollWizard;