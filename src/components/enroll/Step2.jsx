import {useRef, useState} from "react";

const Step2 = ({form, setForm, change, next, back}) => {
    const [errors, setErrors] = useState({});

    const surnameRef = useRef(null);
    const nameRef = useRef(null);
    const idRef = useRef(null);
    const schoolRef = useRef(null);
    const gradeRef = useRef(null);

    function handleNext(e) {
        e.preventDefault();
        const newErrors = {};

        if (!form.studentSurname) {
            newErrors.studentSurname = "Please enter your child's surname.";
        }
        if (!form.studentFirstName) {
            newErrors.studentFirstName = "Please enter your child's first name.";
        }
        if (!form.studentID) {
            newErrors.studentID = "Please enter your child's ID number.";
        }
        if (!form.isSouthAfrican) {
            newErrors.isSouthAfrican = "Please select one of the options."
        }
        if (!form.schoolName) {
            newErrors.schoolName = "Please enter your child's school name.";
        }
        if (!form.grade) {
            newErrors.grade = "Please select one of the options."
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            if (newErrors.studentSurname) {
                surnameRef.current.focus();
            }
            else if (newErrors.studentFirstName) {
                nameRef.current.focus();
            }
            else if (newErrors.studentID) {
                idRef.current.focus();
            }
            else if (newErrors.schoolName) {
                schoolRef.current.focus();
            }
            else if (newErrors.grade) {
                gradeRef.current.focus();
            }

            return;
        }

        setErrors({});
        next();
    }

    return (
        <div className='space-y-8 py-10'>
            <div className="space-y-2">
                <h2 className="text-navy text-4xl font-serif font-semibold">Tell us about your child</h2>
                <p className="text-sm text-muted">The applicant. The student who'll be tutored.</p>
            </div>


            <form className="space-y-4">
                <div className="grid grid-cols-[2fr_2fr_1fr] gap-4">
                    <div className="space-y-2">
                        <label className="text-sm text-navy font-semibold" htmlFor="studentSurname">
                            Surname <span className="text-red">*</span>
                        </label>
                        <input type="text" id='studentSurname' name='studentSurname' value={form.studentSurname}
                               onChange={change} placeholder='Mokoena' ref={surnameRef}
                               className="text-sm border border-muted/50 rounded px-3 py-2 w-full capitalize
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                               aria-required='true' aria-invalid={!!errors.studentSurname}
                               aria-describedby='studentSurname-err'
                        />
                        {errors.studentSurname && (<p id='studentSurname-err' role='alert' className="text-xs text-red">{errors.studentSurname}</p>)}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="studentFirstName" className="text-sm text-navy font-semibold">
                            First name <span className="text-red">*</span>
                        </label>
                        <input type="text" id='studentFirstName' name='studentFirstName' value={form.studentFirstName}
                            onChange={change} placeholder='Lerato' ref={nameRef}
                            className="text-sm border border-muted/50 rounded px-3 py-2 w-full capitalize
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                               aria-required='true' aria-invalid={!!errors.studentFirstName}
                               aria-describedby='studentFirstName-err'
                        />
                        {errors.studentFirstName && (<p id='studentFirstName-err' role='alert' className="text-xs text-red">{errors.studentFirstName}</p>)}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="studentInitials" className="text-navy text-sm font-semibold"> Initials</label>
                        <input type="text" id='studentInitials' name='studentInitials' value={form.studentInitials}
                               onChange={change} placeholder='T'
                               className="text-sm border border-muted/50 rounded px-3 py-2 w-full uppercase
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="studentID" className="text-sm text-navy font-semibold">
                        ID number <span className="text-red">*</span>
                    </label>
                    <input type="text" id='studentID' name='studentID' value={form.studentID}
                           onChange={change} placeholder='13 digit ID number' ref={idRef}
                           className="text-sm border border-muted/50 rounded px-3 py-2 w-full
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                           aria-required='true' aria-invalid={!!errors.studentID}
                           aria-describedby='studentID-err'
                    />
                    {errors.studentID && (<p id='studentID-err' role='alert' className="text-xs text-red">{errors.studentID}</p>)}
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                        <label htmlFor="gender" className="text-sm text-navy font-semibold">Gender</label>
                        <div className="flex items-center gap-4">
                            <button type='button' name='gender' id='gender' onClick={() => {
                                setForm({ ...form, gender:'Male'});
                            }} aria-pressed={form.gender === 'Male'}
                                className={` border border-navy/10 rounded px-6 py-2 
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy ${
                                    form.gender === 'Male' ? 'bg-navy text-white' : 'text-navy bg-transparent'
                                }`}
                            >Male</button>
                            <button type='button' name='gender' onClick={() => {
                                setForm({ ...form, gender:'Female'});
                            }} aria-pressed={form.gender === 'Female'}
                                className={` border border-navy/10 rounded px-6 py-2
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy ${
                                    form.gender === 'Female' ? 'bg-navy text-white' : 'text-navy bg-transparent'
                                }`}
                            >Female</button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="citizen" className="text-sm text-navy font-semibold">
                            South African citizen?</label>
                        <div className="flex items-center gap-4" role='group' aria-describedby='isSouthAfrican-err'>
                            <button type='button' name='citizen' onClick={() => {
                                setForm({ ...form, isSouthAfrican: 'Yes'});
                            }} aria-pressed={form.isSouthAfrican === 'Yes'}
                                    className={`border border-navy/10 rounded px-6 py-2
                                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy ${
                                form.isSouthAfrican === 'Yes' ? 'bg-navy text-white' : 'text-navy bg-transparent'
                            }`}
                            >Yes</button>
                            <button type='button' name='citizen' onClick={() => {
                                setForm({ ...form, isSouthAfrican: 'No'});
                            }} aria-pressed={form.isSouthAfrican === 'No'}
                                    className={`border border-navy/10 rounded px-6 py-2
                                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy ${
                                form.isSouthAfrican === 'No' ? 'bg-navy text-white' : 'text-navy bg-transparent'
                            }`}
                            >No</button>

                        </div>
                        {errors.isSouthAfrican && (<p id='isSouthAfrican-err' role='alert' className="text-xs text-red">{errors.isSouthAfrican}</p>)}
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="homeLanguage" className="text-navy text-sm font-semibold">Home language</label>
                    <input type="text" name='homeLanguage' value={form.homeLanguage} id='homeLanguage'
                           onChange={change} placeholder='e.g. English, Afrikaans, isiZulu'
                           className="text-sm border border-muted/50 rounded px-3 py-2 w-full
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="schoolName" className="text-navy text-sm font-semibold">
                            School Name <span className="text-red">*</span>
                        </label>
                        <input type="text" name='schoolName' value={form.schoolName} id='schoolName'
                               onChange={change} placeholder='Current school' ref={schoolRef}
                               className="text-sm border border-muted/50 rounded px-3 py-2 w-full capitalize
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                               aria-required='true' aria-invalid={!!errors.schoolName}
                               aria-describedby='schoolName-err'
                        />
                        {errors.schoolName && (<p id='schoolName-err' role='alert' className="text-xs text-red">{errors.schoolName}</p>)}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="grade" className="text-navy text-sm font-semibold">
                            Grade <span className="text-red">*</span>
                        </label>
                        <select name="grade" id="grade" value={form.grade} onChange={change} ref={gradeRef} aria-describedby='grade-err'
                                className="text-sm border border-muted/50 rounded px-3 py-2 w-full
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                        >
                            <option value="" disabled>Select grade...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        {errors.grade && (<p id='grade-err' role='alert' className="text-xs text-red">{errors.grade}</p>)}
                    </div>
                </div>

                {/*<p className="bg-cream text-navy text-sm p-2">*/}
                {/*    <span className="bg-navy inline-flex items-center justify-center w-5 h-5 rounded-full text-white mr-2">i</span>*/}
                {/*    You'll attach proof of ID or passport in the next step. JPG, PNG, or PDF up to 5MB.*/}
                {/*</p>*/}

                <div className='border border-navy/15'/>

                <div className="flex justify-between items-center">
                    <button type='button' onClick={back} className="bg-transparent text-navy py-2 px-4 rounded-full border border-navy">
                        ← Back
                    </button>
                    <button type='button' onClick={handleNext} className="bg-navy text-white py-2 px-4 rounded-full">
                        Next: Documents →
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Step2;