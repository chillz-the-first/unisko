import Tile from "../Tile.jsx";
import Button from "../Button.jsx";
import { useRef, useState } from "react";

const Step4 = ({ form, change, back, setStep, submit, status }) => {
    const groups = [
        {
            step: 1,
            title: "Parent or guardian",
            rows: [
                ["Name", [form.title, form.firstName, form.surname].filter(Boolean).join(" ")
                + (form.initials ? ` (${form.initials})` : "")],
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
                ["Name", [form.studentName, form.studentSurname].filter(Boolean).join(" ")
                + (form.studentInitials ? ` (${form.studentInitials})` : "")],
                ["ID or passport", form.studentID],
                ["Gender", form.gender],
                ["South African citizen", form.isSouthAfrican],
                ["Home language", form.homeLanguage],
                ["School", form.schoolName],
                ["Grade", form.grade],
            ],
        },
        {
            step: 3,
            title: "Documents to bring",
            rows: [
                ["Parent proof of ID", form.ackParentId ? "Confirmed" : "Not confirmed"],
                ["Child proof of ID", form.ackStudentId ? "Confirmed" : "Not confirmed"],
                ["Registration fee proof", form.ackRegFee ? "Confirmed" : "Not confirmed"],
            ],
        },
    ];

    const [errors, setErrors] = useState({});
    const termsRef = useRef(null);

    function handleFieldChange(e) {
        change(e);
        setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newErrors = {};
        if (!form.agreeTerms) {
            newErrors.agreeTerms = "You must accept the terms and conditions to submit.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            termsRef.current?.focus();
            return;
        }
        submit();
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
                            className="text-red hover:text-red-hover hover:underline text-sm min-h-[44px] px-2 -mr-2"
                        >
                            Edit<span className="sr-only"> {group.title.toLowerCase()}</span>
                        </button>
                    </div>

                    <dl>
                        {group.rows.map((row) => (
                            <div key={row[0]}
                                className="flex flex-wrap items-center justify-between gap-x-6 border-t border-line py-3"
                            >
                                <dt className="text-muted">{row[0]}</dt>
                                <dd className={row[1] ? "text-body text-right" : "text-muted italic text-right"}>
                                    {row[1] || "Not provided"}
                                </dd>
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

            <form className="mt-8" onSubmit={handleSubmit} noValidate>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <input type="checkbox" id="mediaConsent" name="mediaConsent" checked={form.mediaConsent}
                            onChange={change} className="mt-1 w-5 h-5 flex-none rounded accent-navy"
                        />
                        <label htmlFor="mediaConsent" className="text-body cursor-pointer">
                            Unisko may use photos of my child on its website and social media.{" "}
                            <span className="text-sm text-muted">(Optional)</span>
                        </label>
                    </div>

                    <div className="flex items-start gap-4">
                        <input ref={termsRef} type="checkbox" id="agreeTerms" name="agreeTerms"
                            checked={form.agreeTerms} onChange={handleFieldChange}
                            aria-invalid={errors.agreeTerms ? true : undefined}
                            aria-describedby={errors.agreeTerms ? "agreeTerms-error" : undefined}
                            className="mt-1 w-5 h-5 flex-none rounded accent-navy"
                        />
                        <label htmlFor="agreeTerms" className="text-body cursor-pointer">
                            I have read and accept the terms and conditions{" "}
                            <span className="text-danger">*</span>
                        </label>
                    </div>

                    <p id="agreeTerms-error" role="alert" className="text-danger text-sm min-h-[1.25rem]">
                        {errors.agreeTerms}
                    </p>
                </div>

                <div className="border-t border-line mt-4 mb-4" />

                <div className="flex items-center justify-between pt-4">
                    <Button variant="outline" type="button" onClick={back} disabled={status === "sending"}>
                        Back
                    </Button>
                    <Button variant="filled" type="submit" disabled={status === "sending"}>
                        {status === "sending" ? "Submitting…" : "Submit enrolment"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Step4;