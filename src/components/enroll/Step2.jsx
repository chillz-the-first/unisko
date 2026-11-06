import Button from "../Button.jsx";
import {useRef, useState} from "react";
import Segmented from "./Segmented.jsx";
import { fieldClass, labelClass } from "../../lib/fieldStyles.js";
import {prices} from "../../lib/prices.js";

const programmes = [
    {
        group: "At the centre",
        options: [
            {value: "After-school programme", label: `After-school (${prices.afterSchool} a month)`},
            {value: "Group classes", label: `Group classes (${prices.groupClasses} a month)`},
            {value: "Homework help", label: `Homework help (${prices.homeworkHelp} a visit)`},
        ],
    },
    {
        group: "Online",
        options: [
            {value: "Unisko Basic", label: `Unisko Basic (${prices.basic} a month)`},
            {value: "Unisko Plus", label: `Unisko Plus (${prices.plus} a month)`},
            {value: "Unisko Premium", label: `Unisko Premium (${prices.premium} a month)`},
        ],
    },
];

const Step2 = ({ form, change, next, back }) => {
    const [errors, setErrors] = useState({});

    const surnameRef = useRef(null);
    const nameRef = useRef(null);
    const citizenRef = useRef(null);
    const idRef = useRef(null);
    const schoolRef = useRef(null);
    const gradeRef = useRef(null);
    const programmeRef = useRef(null);

    const usesPassport = form.isSouthAfrican === "No";

    function handleFieldChange(e) {
        change(e);
        setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }

    function handleNext(e) {
        e.preventDefault();
        const newErrors = {};

        if (!form.studentSurname.trim()) {
            newErrors.studentSurname = "Please enter your child's surname.";
        }
        if (!form.studentName.trim()) {
            newErrors.studentName = "Please enter your child's first name.";
        }
        if (!form.isSouthAfrican) {
            newErrors.isSouthAfrican = "Please choose yes or no."
        }
        if (!form.studentID.trim()) {
            newErrors.studentID = usesPassport ? "Please enter your child's passport number."
                : "Please enter your child's ID number.";
        }
        if (!form.schoolName.trim()) {
            newErrors.schoolName = "Please enter your child's school.";
        }
        if (!form.grade) {
            newErrors.grade = "Please choose a grade.";
        }
        if (!form.programme) {
            newErrors.programme = "Please choose a programme, or choose \"Not sure yet\".";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            if (newErrors.studentSurname) surnameRef.current.focus();
            else if (newErrors.studentName) nameRef.current.focus();
            else if (newErrors.isSouthAfrican) citizenRef.current.focus();
            else if (newErrors.studentID) idRef.current.focus();
            else if (newErrors.schoolName) schoolRef.current.focus();
            else if (newErrors.grade) gradeRef.current.focus();
            else if (newErrors.programme) programmeRef.current.focus();

            return;
        }

        setErrors({});
        next();
    }

    return (
        <div>
            <div className="space-y-2 my-8">
                <h2 className="text-title text-navy font-semibold" data-step-heading tabIndex={-1}>
                    Learner details.
                </h2>
                <p className="text-muted text-lede">The learner who will attend tutoring.</p>
            </div>

            <form className="space-y-4" noValidate onSubmit={handleNext}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2 col-span-1 md:col-span-2">
                        <label htmlFor="studentSurname" className={labelClass}>
                            Surname <span className="text-danger">*</span>
                        </label>
                        <input type="text" name="studentSurname" id="studentSurname" onChange={handleFieldChange}
                               value={form.studentSurname} className={fieldClass} placeholder="Maselela"
                               autoComplete="off" aria-required="true" aria-invalid={!!errors.studentSurname}
                               ref={surnameRef} aria-describedby={errors.studentSurname ? "surname-err" : undefined}
                        />
                        {errors.studentSurname &&
                            <p className="text-sm text-danger" id="surname-err" role="alert">{errors.studentSurname}</p>
                        }
                    </div>

                    <div className="space-y-2 col-span-1">
                        <label htmlFor="studentInitials" className={labelClass}>Initials</label>
                        <input type="text" name="studentInitials" id="studentInitials" onChange={handleFieldChange}
                               value={form.studentInitials} placeholder="M" className={fieldClass} autoComplete="off"
                        />
                    </div>

                    <div className="space-y-2 col-span-full">
                        <label htmlFor="studentName" className={labelClass}>
                            First name <span className="text-danger">*</span>
                        </label>
                        <input type="text" name="studentName" id="studentName" onChange={handleFieldChange}
                            value={form.studentName} className={fieldClass} placeholder="Lerato"
                            aria-required="true" aria-invalid={!!errors.studentName} autoComplete="off"
                            ref={nameRef} aria-describedby={errors.studentName ? "name-err" : undefined}
                        />
                        {errors.studentName &&
                            <p className="text-sm text-danger" id="name-err" role="alert">{errors.studentName}</p>
                        }
                    </div>

                    <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Segmented legend="Gender" name="gender"
                            options={[{ value: "Male", label: "Male" }, { value: "Female", label: "Female" }]}
                            value={form.gender} onChange={handleFieldChange}
                        />

                        <Segmented legend="South African citizen?" name="isSouthAfrican" required
                            options={[{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }]}
                            value={form.isSouthAfrican} onChange={handleFieldChange} inputRef={citizenRef}
                            error={errors.isSouthAfrican} errorId="citizen-err"
                        />
                    </div>

                    <div className="space-y-2 col-span-full">
                        <label htmlFor="studentID" className={labelClass}>
                            {usesPassport ? "Passport number" : "ID number"} <span className="text-danger">*</span>
                        </label>
                        <input type="text" name="studentID" id="studentID" value={form.studentID} onChange={handleFieldChange}
                               className={fieldClass} autoComplete="off"
                               placeholder={usesPassport ? "Passport number" : "13-digit ID number"}
                               aria-required="true" aria-invalid={!!errors.studentID}
                               ref={idRef} aria-describedby={errors.studentID ? "id-hint id-err" : "id-hint"}
                        />
                        {errors.studentID &&
                            <p className="text-sm text-danger" id="id-err" role="alert">{errors.studentID}</p>
                        }
                        <p id="id-hint" className="text-sm text-muted">
                            {usesPassport ? "As it appears on your child's passport."
                                : "If your child does not have an ID card yet, the number is on their birth certificate."}
                        </p>
                    </div>

                    <div className="space-y-2 col-span-1">
                        <label htmlFor="homeLanguage" className={labelClass}>Home language</label>
                        <input type="text" name="homeLanguage" id="homeLanguage" onChange={handleFieldChange}
                               value={form.homeLanguage} className={fieldClass} placeholder="isiZulu"
                        />
                    </div>
                    
                    <div className="space-y-2 col-span-1 md:col-span-2">
                        <label htmlFor="schoolName" className={labelClass}>
                            School name <span className="text-danger">*</span>
                        </label>
                        <input type="text" name="schoolName" id="schoolName" onChange={handleFieldChange}
                               value={form.schoolName} className={fieldClass} placeholder="Current school"
                               aria-required="true" aria-invalid={!!errors.schoolName}
                               ref={schoolRef} aria-describedby={errors.schoolName ? "school-err" : undefined}
                        />
                        {errors.schoolName &&
                            <p className="text-sm text-danger" id="school-err" role="alert">{errors.schoolName}</p>
                        }
                    </div>

                    <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="grade" className={labelClass}>
                                Grade <span className="text-danger">*</span>
                            </label>
                            <select name="grade" id="grade" className={fieldClass} value={form.grade}
                                    onChange={handleFieldChange} aria-required="true" aria-invalid={!!errors.grade}
                                    aria-describedby={errors.grade ? "grade-err" : undefined} ref={gradeRef}
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

                        <div className="space-y-2">
                            <label htmlFor="programme" className={labelClass}>
                                Programme <span className="text-danger">*</span>
                            </label>
                            <select name="programme" id="programme" className={fieldClass} value={form.programme}
                                    onChange={handleFieldChange} aria-required="true" aria-invalid={!!errors.programme}
                                    ref={programmeRef}
                                    aria-describedby={errors.programme ? "programme-hint programme-err" : "programme-hint"}
                            >
                                <option value="">Select</option>
                                {programmes.map((group) => (
                                    <optgroup label={group.group} key={group.group}>
                                        {group.options.map((option) => (
                                            <option value={option.value} key={option.value}>{option.label}</option>
                                        ))}
                                    </optgroup>
                                ))}
                                <option value="Not sure yet">Not sure yet</option>
                            </select>
                            {errors.programme &&
                                <p className="text-sm text-danger" id="programme-err" role="alert">{errors.programme}</p>
                            }
                            <p id="programme-hint" className="text-sm text-muted">
                                Not sure which one suits your child? Choose "Not sure yet" and we will help you decide.
                            </p>
                        </div>
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