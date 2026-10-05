const fieldClass =
    "block w-full rounded-xl border border-field-border px-4 py-2 text-body placeholder:text-body/60";
const labelClass = "block text-navy font-semibold";

const Step2 = ({ form, change, next, back }) => {
    return (
        <div>
            <div className="space-y-2 my-8">
                <h2 className="text-title text-navy font-semibold" data-step-heading tabIndex={-1}>
                    Tell us about your child.
                </h2>
                <p className="text-muted text-lede">The learner who'll be tutored.</p>
            </div>

            <form className="space-y-4" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2 col-span-1 md:col-span-2">
                        <label htmlFor="studentSurname" className={labelClass}>
                            Surname <span className="text-danger">*</span>
                        </label>
                        <input type="text" name="studentSurname" id="studentSurname" onChange={change}
                               value={form.studentSurname} className={fieldClass} placeholder="Maselela"
                               autoComplete="family-name"
                        />
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
                        />
                    </div>

                    <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-4">
                        <fieldset className="space-y-2">
                            <legend className={labelClass}>Gender</legend>

                            <div className="bg-cream rounded-xl w-[50%] flex items-center justify-between p-2">
                                <div>
                                    <input type="radio" name="gender" id="male" onChange={change} value="male"
                                        checked={form.gender === "male"} className="sr-only peer"
                                    />
                                    <label htmlFor="male" className="cursor-pointer px-5 py-2 rounded-xl transition-colors
                                        peer-checked:bg-white peer-checked:text-navy block"
                                    >Male</label>
                                </div>

                                <div>
                                    <input type="radio" name="gender" id="female" onChange={change} value="female"
                                        checked={form.gender === "female"} className="sr-only peer"
                                    />
                                    <label htmlFor="female" className="cursor-pointer px-5 py-2 rounded-xl transition-colors
                                        peer-checked:bg-white peer-checked:text-navy block"
                                    >Female</label>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className="space-y-2">
                            <legend className={labelClass}>South African citizen?</legend>

                            <div className="bg-cream rounded-xl w-[50%] flex items-center justify-between p-2">
                                <div>
                                    <input type="radio" name="isSouthAfrican" id="sa-yes" onChange={change} value="Yes"
                                           checked={form.isSouthAfrican === "Yes"} className="sr-only peer"
                                    />
                                    <label htmlFor="sa-yes" className="cursor-pointer px-5 py-2 rounded-xl transition-colors
                                        peer-checked:bg-white peer-checked:text-navy block"
                                    >Yes</label>
                                </div>

                                <div>
                                    <input type="radio" name="isSouthAfrican" id="sa-no" onChange={change} value="No"
                                           checked={form.isSouthAfrican === "No"} className="sr-only peer"
                                    />
                                    <label htmlFor="sa-no" className="cursor-pointer px-5 py-2 rounded-xl transition-colors
                                        peer-checked:bg-white peer-checked:text-navy block"
                                    >No</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    <div className="space-y-2 col-span-full">
                        <label htmlFor="studentID" className={labelClass}>
                            {form.isSouthAfrican === "No" ? "Passport number " : "ID number "}
                            <span className="text-danger">*</span>
                        </label>
                        <input type="text" name="studentID" id="studentID" value={form.studentID} onChange={change}
                               className={fieldClass}
                               placeholder={form.isSouthAfrican === "No" ? "Passport number" : "13-digit ID number"}
                        />
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
                        />
                    </div>

                    <div className="space-y-2 col-span-1">
                        <label htmlFor="grade" className={labelClass}>
                            Grade <span className="text-danger">*</span>
                        </label>
                        <div className={fieldClass}>
                            <select name="grade" id="grade" className="w-full" value={form.grade} onChange={change}>
                                <option value="">Select</option>
                                <option value="Mr">1</option>
                                <option value="Mrs">2</option>
                                <option value="Miss">3</option>
                                <option value="Dr">4</option>
                                <option value="Prof">5</option>
                                <option value="Mr">6</option>
                                <option value="Mrs">7</option>
                                <option value="Miss">8</option>
                                <option value="Dr">9</option>
                                <option value="Prof">10</option>
                                <option value="Dr">11</option>
                                <option value="Prof">12</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Step2;