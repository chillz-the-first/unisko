import Button from "../Button.jsx";
import {useRef, useState} from "react";
import Segmented from "./Segmented.jsx";

const fieldClass =
    "block w-full rounded-xl border border-field-border px-4 py-2 text-body placeholder:text-body/60";
const labelClass = "block text-navy font-semibold";

const Step2 = ({ form, change, next, back }) => {
    const [errors, setErrors] = useState({});

    const surnameRef = useRef(null);
    const nameRef = useRef(null);
    const citizenRef = useRef(null);
    const idRef = useRef(null);
    const schoolRef = useRef(null);
    const gradeRef = useRef(null);

    function handleNext(e) {
        e.preventDefault();
        const newErrors = {};

        if (!form.studentSurname.trim()) {
            newErrors.studentSurname = "Please enter your child's surname.";
        }
        if (!form.studentName.trim()) {
            newErrors.studentName = "Please enter your child's name.";
        }
        if (!form.isSouthAfrican) {
            newErrors.isSouthAfrican = "Please choose yes or no."
        }
        if (!form.studentID.trim()) {
            newErrors.studentID = "Please enter your child's ID number."
        }
        if (!form.schoolName.trim()) {
            newErrors.schoolName = "Please enter your child's school.";
        }
        if (!form.grade) {
            newErrors.grade = "Please choose a grade.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            if (newErrors.studentSurname) surnameRef.current.focus();
            else if (newErrors.studentName) nameRef.current.focus();
            else if (newErrors.isSouthAfrican) citizenRef.current.focus();
            else if (newErrors.studentID) idRef.current.focus();
            else if (newErrors.schoolName) schoolRef.current.focus();
            else if (newErrors.grade) gradeRef.current.focus();

            return;
        }

        setErrors({});
        next();
    }

    return (
        <div>
            <div className="space-y-2 my-8">
                <h2 className="text-title text-navy font-semibold" data-step-heading tabIndex={-1}>
                    Tell us about your child.
                </h2>
                <p className="text-muted text-lede">The learner who'll be tutored.</p>
            </div>

            <form className="space-y-4" noValidate onSubmit={handleNext}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2 col-span-1 md:col-span-2">
                        <label htmlFor="studentSurname" className={labelClass}>
                            Surname <span className="text-danger">*</span>
                        </label>
                        <input type="text" name="studentSurname" id="studentSurname" onChange={change}
                               value={form.studentSurname} className={fieldClass} placeholder="Maselela"
                               autoComplete="family-name" aria-required="true" aria-invalid={!!errors.studentSurname}
                               ref={surnameRef} aria-describedby={errors.studentSurname ? "surname-err" : undefined}
                        />
                        {errors.studentSurname &&
                            <p className="text-sm text-danger" id="surname-err" role="alert">{errors.studentSurname}</p>
                        }
                    </div>

                    <div className="space-y-2 col-span-1">
                        <label htmlFor="studentInitials" className={labelClass}>Initials</label>
                        <input type="text" name="studentInitials" id="studentInitials" onChange={change}
                               value={form.studentInitials} placeholder="M" className={fieldClass}
                        />
                    </div>

                    <div className="space-y-2 col-span-full">
                        <label htmlFor="studentName" className={labelClass}>
                            First name <span className="text-danger">*</span>
                        </label>
                        <input type="text" name="studentName" id="studentName" onChange={change}
                            value={form.studentName} className={fieldClass} placeholder="Lerato"
                            aria-required="true" aria-invalid={!!errors.studentName}
                            ref={nameRef} aria-describedby={errors.studentName ? "name-err" : undefined}
                        />
                        {errors.studentName &&
                            <p className="text-sm text-danger" id="name-err" role="alert">{errors.studentName}</p>
                        }
                    </div>

                    <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Segmented legend="Gender" name="gender"
                            options={[{ value: "Male", label: "Male" }, { value: "Female", label: "Female" }]}
                            value={form.gender} onChange={change}
                        />

                        <Segmented legend="South African citizen?" name="isSouthAfrican" required
                            options={[{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }]}
                            value={form.isSouthAfrican} onChange={change} inputRef={citizenRef}
                            error={errors.isSouthAfrican} errorId="citizen-err"
                        />
                    </div>

                    <div className="space-y-2 col-span-full">
                        <label htmlFor="studentID" className={labelClass}>
                            {form.isSouthAfrican !== "No" ? "ID number " : "Passport number "}
                            <span className="text-danger">*</span>
                        </label>
                        <input type="text" name="studentID" id="studentID" value={form.studentID} onChange={change}
                               className={fieldClass}
                               placeholder={form.isSouthAfrican !== "No" ? "13-digit ID number" : "Passport number"}
                               aria-required="true" aria-invalid={!!errors.studentID}
                               ref={idRef} aria-describedby={errors.studentID ? "id-err" : undefined}
                        />
                        {errors.studentID &&
                            <p className="text-sm text-danger" id="id-err" role="alert">{errors.studentID}</p>
                        }
                        <p className="text-sm text-muted">
                            If your child isn't a South African citizen, enter their passport number.
                        </p>
                    </div>

                    <div className="space-y-2 col-span-full">
                        <label htmlFor="homeLanguage" className={labelClass}>Home language</label>
                        <input type="text" name="homeLanguage" id="homeLanguage" onChange={change}
                               value={form.homeLanguage} className={fieldClass} placeholder="isiZulu"
                        />
                    </div>
                    
                    <div className="space-y-2 col-span-1 md:col-span-2">
                        <label htmlFor="schoolName" className={labelClass}>
                            School name <span className="text-danger">*</span>
                        </label>
                        <input type="text" name="schoolName" id="schoolName" onChange={change}
                               value={form.schoolName} className={fieldClass} placeholder="Current school"
                               aria-required="true" aria-invalid={!!errors.schoolName}
                               ref={schoolRef} aria-describedby={errors.schoolName ? "school-err" : undefined}
                        />
                        {errors.schoolName &&
                            <p className="text-sm text-danger" id="school-err" role="alert">{errors.schoolName}</p>
                        }
                    </div>

                    <div className="space-y-2 col-span-1">
                        <label htmlFor="grade" className={labelClass}>
                            Grade <span className="text-danger">*</span>
                        </label>
                        <select name="grade" id="grade" className={`w-full ${fieldClass}`} value={form.grade}
                                onChange={change} aria-required="true" aria-invalid={!!errors.grade}
                                aria-describedby={errors.grade ? "grade-err" : undefined}
                        >
                            <option value="">Select</option>
                            <option value="Grade R">R</option>
                            <option value="Grade 1">1</option>
                            <option value="Grade 2">2</option>
                            <option value="Grade 3">3</option>
                            <option value="Grade 4">4</option>
                            <option value="Grade 5">5</option>
                            <option value="Grade 6">6</option>
                            <option value="Grade 7">7</option>
                            <option value="Grade 8">8</option>
                            <option value="Grade 9">9</option>
                            <option value="Grade 10">10</option>
                            <option value="Grade 11">11</option>
                            <option value="Grade 12">12</option>
                        </select>
                        {errors.grade &&
                            <p className="text-sm text-danger" id="grade-err" role="alert">{errors.grade}</p>
                        }
                    </div>

                    <div className="border-t border-line mt-8 mb-4 col-span-full"/>

                    <div className="col-span-full flex items-center justify-between">
                        <Button variant="outline" onClick={back}>Back</Button>
                        <Button variant="ink" type="submit">Next: Documents</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Step2;