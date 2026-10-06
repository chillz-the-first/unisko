import Note from "./Note.jsx";
import {Link} from "react-router-dom";
import Button from "../Button.jsx";
import {useRef, useState} from "react";

const documents = [
    {
        name: "ackParentId",
        title: "Parent proof of ID",
        desc: "A copy of the parent's or guardian's ID.",
        form: "form.ackParentId",
    },
    {
        name: "ackStudentId",
        title: "Child proof of ID",
        desc: "Your child's ID document, or a birth certificate if under 16.",
        form: "form.ackStudentId",
    },
    {
        name: "ackRegFee",
        title: "Proof of the R150 registration fee",
        desc: "A payment reference or receipt for the once-off fee.",
        form: "form.ackRegFee",
    },
];

const Step3 = ({ form, change, next, back }) => {
    const [errors, setErrors] = useState({});

    const parentRef = useRef(null);
    const studentRef = useRef(null);
    const feeRef = useRef(null);
    const refs = {ackParentId: parentRef, ackStudentId: studentRef, ackRegFee: feeRef};

    function handleFieldChange(e) {
        change(e);
        setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }

    function handleNext(e) {
        e.preventDefault();
        const newErrors = {};

        const missing = documents.find((doc) => !form[doc.name]);
        if (missing) {
            setErrors({checks: "Tick all three documents to continue."});
            refs[missing.name].current.focus();
            return;
        }

        setErrors({});
        next();
    }

    return (
        <div>
            <div className="space-y-2 my-8">
                <h2 data-step-heading tabIndex={-1} className="text-navy text-title font-semibold">
                    Documents to bring.
                </h2>
                <p className="text-muted text-lede">
                    Bring these to your child's first session so we can complete registration.
                    Tick each one to confirm.
                </p>
            </div>

            <form className="space-y-6" noValidate onSubmit={handleNext}>
                <fieldset aria-describedby={errors.checks ? "docs-err" : undefined}>
                    <legend className="sr-only">Documents to bring.</legend>

                    {documents.map((doc) => (
                        <div key={doc.name} className="flex items-start gap-4 py-4 border-t last:border-b border-line">
                            <input type="checkbox" id={doc.name} name={doc.name} checked={form[doc.name]}
                                   onChange={handleFieldChange} ref={refs[doc.name]}
                                   className="mt-1 w-5 h-5 flex-none rounded accent-navy"
                            />

                            <label htmlFor={doc.name} className="block text-navy font-semibold cursor-pointer">
                                {doc.name}
                                <p className="block text-muted font-normal">{doc.desc}</p>
                            </label>
                        </div>
                    ))}
                </fieldset>

                {errors.checks && <p id="docs-err" role="alert" className="text-sm text-danger">{errors.checks}</p>}

                <div className="space-y-4">
                    <Note>
                        Nothing is uploaded here. You bring the documents to the first session
                        and we handle them in person.
                    </Note>
                    <Note>
                        The R150 registration fee is due before the first session.{" "}
                        <Link to="/payment-details" className="text-red hover:underline">
                            See our payment details
                        </Link>
                    </Note>
                </div>

                <div className="flex items-center justify-between border-t border-line pt-4">
                    <Button variant="outline" onClick={back}>Back</Button>
                    <Button variant="ink" type="submit">Next: Documents</Button>
                </div>
            </form>
        </div>
    );
};

export default Step3;