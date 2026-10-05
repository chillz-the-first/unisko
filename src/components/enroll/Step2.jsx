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
                        <fieldet className="space-y-2">
                            <legend className={labelClass}>Gender</legend>

                            <div className="bg-cream rounded-xl w-[60%] py-4 px-8 flex items-center justify-between">
                                <input type="radio" name="gender" id="male" onChange={change} value="male"
                                       checked={form.gender === "male"} className="sr-only peer"
                                />
                                <label htmlFor="male">Male</label>

                                <input type="radio" name="gender" id="female" onChange={change} value="female"
                                       checked={form.gender === "female"} className="sr-only peer"
                                />
                                <label htmlFor="female">Female</label>
                            </div>
                        </fieldet>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Step2;