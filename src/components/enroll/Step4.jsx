import Tile from "../Tile.jsx";
import Button from "../Button.jsx";
import {useRef, useState} from "react";

const Step4 = ({ form, change, back, setStep }) => {
    const groups = [
        {
            step: 1,
            title: "Parent or guardian",
            rows: [
                ["Name", `${form.title} ${form.firstName} ${form.surname} (${form.initials})`.trim()],
                ["ID or passport", form.idNumber],
                ["Address", [form.address, form.town, form.city].filter(Boolean).join(", ")],
                ["Cell phone", form.cellPhone],
                ["Email", form.email],
            ],
        },
        {
            step: 2,
            title: "Applicant",
            rows: [
                ["Name", `${form.studentName} ${form.studentSurname} (${form.studentInitials})`.trim()],
                ["ID number", form.studentID],
                ["Gender", form.gender],
                ["South African citizen", form.isSouthAfrican],
                ["Home Language", form.homeLanguage],
                ["School", form.schoolName],
                ["Grade", form.grade],
            ],
        },
        {
            step: 3,
            title: "Documents to bring",
            rows: [
                ["Parent proof of ID", "Confirmed"],
                ["Child proof of ID", "Confirmed"],
                ["Registration fee proof", "Confirmed"],
            ],
        },
    ];

    const [errors, setErrors] = useState({});
    const check = useRef(null);

    function handleFieldChange(e) {
        change(e);
        setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = {};
    }

    return (
        <div>
            <div className="space-y-2 mb-8">
                <h2 className="text-navy text-title font-semibold" tabIndex={-1} data-step-heading>
                    Review and confirm.
                </h2>
                <p className="text-muted text-lede">
                    Check that everything reads right, then accept the terms and submit.
                </p>
            </div>

            {groups.map((group) => (
                <Tile tone="cream" className="mb-4 px-7 py-2" key={group.title}>
                    <div className="flex items-center justify-between">
                        <h3 className="text-navy font-semibold py-4">{group.title}</h3>
                        <button type="button" onClick={() => setStep(group.step)}
                            className="text-red hover:text-red-hover hover:underline text-sm"
                        >Edit</button>
                    </div>

                    <dl>
                        {group.rows.map((row, index) => (
                            <div className="flex flex-wrap items-center justify-between border-t border-line py-3" key={index}>
                                <dt className="text-muted">{row[0]}</dt>
                                <dd className="text-body">{row[1]}</dd>
                            </div>

                        ))}
                    </dl>
                </Tile>
            ))}

            <div className="border border-line rounded-tile p-7 space-y-2">
                <h3 className="text-navy font-semibold text-lede">Terms and conditions</h3>
                <p className="text-muted">
                    The R150 registration fee is non-refundable for new students. Monthly fees are due before
                    the 10th of each month to avoid exclusion. The December fee covers January and must be paid
                    to avoid deregistration. A zero-tolerance policy applies to bullying, and damage to property
                    is repaid by the client. These terms are governed by South African law.
                </p>
            </div>

            <form className="space-y-4 mt-8" noValidate>
                <div className="flex items-center gap-4">
                    <input type="checkbox" id="media" name="media" checked={form.mediaConsent} onChange={change}
                           className="mt-1 w-5 h-5 flex-none rounded accent-navy"
                    />
                    <label htmlFor="media" className="text-body cursor-pointer">
                        Unisko may use photos of my child on its website and social media.
                        <span className="text-sm text-muted">(Optional)</span>
                    </label>
                </div>

                <div className="flex items-center gap-4">
                    <input type="checkbox" id="terms" name="terms" checked={form.agreeTerms} onChange={change}
                           className="mt-1 w-5 h-5 flex-none rounded accent-navy"
                    />
                    <label htmlFor="terms" className="text-body cursor-pointer">
                        I have read and accept the terms and conditions {" "}
                        <span className="text-danger">*</span>
                    </label>
                </div>
            </form>

            <div className="border-t border-line mt-8 mb-4 col-span-full"/>

            <div className="flex items-center justify-between pt-4">
                <Button variant="outline" onClick={back}>Back</Button>
                <Button onClick={back} disabled={form.agreeTerms === true}>Submit enrollment</Button>
            </div>
        </div>
    );
};

export default Step4;