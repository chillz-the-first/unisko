import {useRef, useState} from "react";

const Step1 = ({form, change, next}) => {
    const [errors, setErrors] = useState({});

    const surnameRef = useRef(null);
    const firstNameRef = useRef(null);
    const idNumberRef = useRef(null);
    const addressRef = useRef(null);
    const cityRef = useRef(null);
    const cellPhoneRef = useRef(null);

    function handleNext(e) {
        e.preventDefault();
        const newErrors = {};

        if (!form.surname) {
            newErrors.surname = 'Please enter your surname.';
        }
        if (!form.firstName) {
            newErrors.firstName = 'Please enter your name.';
        }
        if (!form.idNumber) {
            newErrors.idNumber = 'Please enter your ID number.';
        }
        if (!form.address) {
            newErrors.address = 'Please enter your address.';
        }
        if (!form.city) {
            newErrors.city = 'Please enter your city.';
        }
        if (!form.cellPhone) {
            newErrors.cellPhone = 'Please enter your phone number.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            if (newErrors.surname) {
                surnameRef.current.focus();
            }
            else if (newErrors.firstName) {
                firstNameRef.current.focus();
            }
            else if (newErrors.idNumber) {
                idNumberRef.current.focus();
            }
            else if (newErrors.address) {
                addressRef.current.focus();
            }
            else if (newErrors.city) {
                cityRef.current.focus();
            }
            else if (newErrors.cellPhone) {
                cellPhoneRef.current.focus();
            }

            return;
        }

        setErrors({});
        next();
    }

    return (
        <div className='space-y-8 py-10'>
            <div className="space-y-4">
                <h2 className="font-semibold font-serif text-navy text-4xl">Let's start with you.</h2>
                <p className="text-muted text-sm">The parent or guardian responsible for enrollment.</p>

                <form className='space-y-4'>
                    {/*Parent' info*/}
                    <div className="grid grid-cols-[1fr_2fr_1fr] gap-4">
                        <div className='space-y-2'>
                            <label htmlFor="title" className="text-navy text-sm font-semibold">Title</label>
                            <select name="title" id="title" value={form.title}
                                    className="text-sm border border-muted/50 rounded px-3 py-2 w-full
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                                    onChange={change}
                            >
                                <option value=""></option>
                                <option value='Mr.'>Mr.</option>
                                <option value='Mrs.'>Mrs.</option>
                                <option value='Miss'>Miss</option>
                                <option value='Dr.'>Dr.</option>
                                <option value='Prof.'>Prof.</option>
                            </select>
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="surname" className="text-navy text-sm font-semibold">
                                Surname <span className="text-red">*</span>
                            </label>
                            <input type="text" id="surname" name="surname" value={form.surname}
                                   placeholder="Mokoena" onChange={change}
                                   className="text-sm border border-muted/50 rounded px-3 py-2 w-full capitalize
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                                   aria-required='true' aria-invalid={!!errors.surname}
                                   aria-describedby='surname-err' ref={surnameRef}
                            />
                            {errors.surname && (<p id='surname-err' role='alert' className="text-xs text-red">{errors.surname}</p>)}
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="initials" className="text-navy text-sm font-semibold">Initials</label>
                            <input type="text" id="initials" name="initials" value={form.initials}
                                   placeholder="T.M" onChange={change}
                                   className="text-sm border border-muted/50 rounded px-3 py-2 w-full uppercase
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"/>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className='space-y-2'>
                            <label htmlFor="firstName" className="text-navy text-sm font-semibold">
                                First name <span className="text-red">*</span>
                            </label>
                            <input type="text" id="firstName" name="firstName" value={form.firstName}
                                   placeholder="Thabo" onChange={change}
                                   className="text-sm border border-muted/50 rounded px-3 py-2 w-full capitalize
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                                   aria-required='true' aria-invalid={!!errors.firstName}
                                   aria-describedby='firstName-err' ref={firstNameRef}
                            />
                            {errors.firstName &&
                                (<p id='firstName-err' role='alert' className="text-xs text-red">{errors.firstName}</p>)}
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="idNumber" className="text-navy text-sm font-semibold">
                                ID / Passport number <span className="text-red">*</span>
                            </label>
                            <input type="text" id="idNumber" name="idNumber" value={form.idNumber}
                                   placeholder="13 digit ID or passport" onChange={change} inputMode='numeric'
                                   className="text-sm border border-muted/50 rounded px-3 py-2 w-full
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                                   aria-required='true' aria-invalid={!!errors.idNumber}
                                   aria-describedby='idNumber-err' ref={idNumberRef}
                            />
                            {errors.idNumber && (<p id='idNumber-err' role='alert' className="text-xs text-red">{errors.idNumber}</p>)}
                        </div>
                    </div>

                    <div className='border border-navy/15 my-4'/>

                    {/*Residential info*/}
                    <p className="text-muted tracking-kicker font-medium mb-2">RESIDENTIAL ADDRESS</p>
                    <div className='space-y-2'>
                        <label htmlFor="address" className="text-navy text-sm font-semibold">
                            Street address <span className="text-red">*</span>
                        </label>
                        <input type="text" id="address" name="address" value={form.address}
                               placeholder="House number and street" onChange={change}
                               className="text-sm border border-muted/50 rounded px-3 py-2 w-full capitalize
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                               aria-required='true' aria-invalid={!!errors.address}
                               aria-describedby='address-err' ref={addressRef}
                        />
                        {errors.address && (<p id='address-err' role='alert' className="text-xs text-red">{errors.address}</p>)}
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className='space-y-2'>
                            <label htmlFor="town" className="text-navy text-sm font-semibold">Town</label>
                            <input type="text" id="town" name="town" value={form.town}
                                   placeholder="Town" onChange={change}
                                   className="text-sm border border-muted/50 rounded px-3 py-2 w-full capitalize
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"/>
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="city" className="text-navy text-sm font-semibold">
                                City <span className="text-red">*</span>
                            </label>
                            <input type="text" id="city" name="city" value={form.city}
                                   placeholder="City" onChange={change}
                                   className="text-sm border border-muted/50 rounded px-3 py-2 w-full capitalize
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                                   aria-required='true' aria-invalid={!!errors.city}
                                   aria-describedby='city-err' ref={cityRef}
                            />
                            {errors.city && (<p id='city-err' role='alert' className="text-xs text-red">{errors.city}</p>)}
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="cellPhone" className="text-navy text-sm font-semibold">
                                Cell phone <span className="text-red">*</span>
                            </label>
                            <input type="text" id="cellPhone" name="cellPhone" value={form.cellPhone}
                                   placeholder="081 234 5678" onChange={change} inputMode='numeric'
                                   className="text-sm border border-muted/50 rounded px-3 py-2 w-full
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                                   aria-required='true' aria-invalid={!!errors.cellPhone}
                                   aria-describedby='cellPhone-err' ref={cellPhoneRef}
                            />
                            {errors.cellPhone && (<p id='cellPhone-err' role='alert' className="text-xs text-red">{errors.cellPhone}</p>)}
                        </div>
                    </div>
                    <p className="text-navy text-sm p-2 bg-cream">
                        <span className="bg-navy inline-flex items-center justify-center w-5 h-5 rounded-full text-white mr-2">i</span>
                        This is the parent or guardian's information. You'll add the student's detail in the next step.
                    </p>

                    <div className='border border-navy/15 my-4'/>

                    <div className="flex justify-end">
                        <button type='button' className="bg-navy text-white py-2 px-4 rounded-full" onClick={handleNext}>
                            Next: Applicant→</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Step1;