import Icon from "../../lib/Icon.jsx";
import Button from "../Button.jsx";
import {useRef, useState} from "react";

const fieldClass =
    "block w-full rounded-xl border border-field-border px-4 py-2 text-body placeholder:text-body/60";
const labelClass = "block text-navy font-semibold";

const Step1 = ({ form, change, next}) => {
    const [errors, setErrors] = useState({});

    const surnameRef = useRef(null);
    const nameRef = useRef(null);
    const idRef = useRef(null);
    const addressRef = useRef(null);
    const cityRef = useRef(null);
    const phoneRef = useRef(null);

    function handleFieldChange(e) {
        change(e);
        setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }

    function handleNext(e) {
        e.preventDefault();
        const newErrors = {};

        if (!form.firstName.trim()) {
            newErrors.firstName = "Please enter your name.";
        }
        if (!form.surname.trim()) {
            newErrors.surname = "Please enter your surname.";
        }
        if (!form.idNumber.trim()) {
            newErrors.idNumber = "Please enter your id/passport number.";
        }
        if (!form.address.trim()) {
            newErrors.address = "Please enter your address.";
        }
        if (!form.city.trim()) {
            newErrors.city = "Please enter your city.";
        }
        if (!form.cellPhone.trim()) {
            newErrors.cellPhone = "Please enter your phone number.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            if (newErrors.surname) surnameRef.current.focus();
            else if (newErrors.firstName) nameRef.current.focus();
            else if (newErrors.idNumber) idRef.current.focus();
            else if (newErrors.address) addressRef.current.focus();
            else if (newErrors.city) cityRef.current.focus();
            else if (newErrors.cellPhone) phoneRef.current.focus();

            return;
        }

        setErrors({});
        next();
    }

    return (
        <div>
            <div className="space-y-2 my-8">
                <h2 data-step-heading tabIndex={-1} className="text-title text-navy font-semibold">
                    Let's start with you.
                </h2>
                <p className="text-muted text-lede">The parent or guardian responsible for enrollment.</p>
            </div>

            <form className="space-y-4" noValidate onSubmit={handleNext}>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    <div className="space-y-2 col-span-2">
                        <label htmlFor="title" className={labelClass}>Title</label>
                        <div className={fieldClass}>
                            <select name="title" id="title" className="w-full" value={form.title} onChange={handleFieldChange}>
                                <option value="">Select</option>
                                <option value="Mr">Mr.</option>
                                <option value="Mrs">Mrs.</option>
                                <option value="Miss">Miss.</option>
                                <option value="Dr">Dr.</option>
                                <option value="Prof">Prof.</option>
                            </select>
                        </div>

                    </div>

                    <div className="space-y-2 col-span-2 md:col-span-4">
                        <label htmlFor="surname" className={labelClass}>
                            Surname <span className="text-danger">*</span>
                        </label>
                        <input type="text" className={fieldClass} name="surname" id="surname"
                               value={form.surname} onChange={handleFieldChange} placeholder="Maselela" autoComplete="family-name"
                               aria-required="true" aria-invalid={!!errors.surname} ref={surnameRef}
                               aria-describedby={errors.surname ? "surname-err" : undefined}
                        />
                        {errors.surname &&
                            <p className="text-sm text-danger" id="surname-err" role="alert">{errors.surname}</p>
                        }
                    </div>

                    <div className="space-y-2 col-span-2 md:col-span-4">
                        <label htmlFor="firstName" className={labelClass}>
                            First Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className={fieldClass} name="firstName" id="firstName"
                               value={form.firstName} onChange={handleFieldChange} placeholder="Thabo" autoComplete="given-name"
                               aria-required="true" aria-invalid={!!errors.firstName} ref={nameRef}
                               aria-describedby={errors.firstName ? "name-err" : undefined}
                        />
                        {errors.firstName &&
                            <p className="text-sm text-danger" id="name-err" role="alert">{errors.firstName}</p>
                        }
                    </div>

                    <div className="space-y-2 col-span-2">
                        <label htmlFor="initials" className={labelClass}>Initials</label>
                        <input type="text" className={fieldClass} name="initials" id="initials" value={form.initials}
                               onChange={handleFieldChange} placeholder="T"
                        />
                    </div>

                    <div className="space-y-2 col-span-2 md:col-span-full">
                        <label htmlFor="idNumber" className={labelClass}>
                            ID or Passport number <span className="text-danger">*</span>
                        </label>
                        <input type="text" name="idNumber" id="idNumber" value={form.idNumber} onChange={handleFieldChange}
                               placeholder="13-digit ID or Passport number" className={fieldClass}
                               inputMode="numeric"
                               aria-required="true" aria-invalid={!!errors.idNumber} ref={idRef}
                               aria-describedby={errors.idNumber ? "id-err" : undefined}
                        />
                        {errors.idNumber &&
                            <p className="text-sm text-danger" id="id-err" role="alert">{errors.idNumber}</p>
                        }
                    </div>

                    <div className="border-t border-line mt-8 mb-4 col-span-full"/>

                    <h3 className="text-navy font-semibold text-lede col-span-full">Residential address</h3>

                    <div className="space-y-2 col-span-2 md:col-span-full">
                        <label htmlFor="address" className={labelClass}>
                            Street address <span className="text-danger">*</span>
                        </label>
                        <input type="text" className={fieldClass} name="address" id="address"
                               value={form.address} onChange={handleFieldChange} placeholder="12 Jan de Necker Drive"
                               aria-required="true" aria-invalid={!!errors.address} ref={addressRef}
                               aria-describedby={errors.address ? "address-err" : undefined}
                        />
                        {errors.address &&
                            <p className="text-sm text-danger" id="address-err" role="alert">{errors.address}</p>
                        }
                    </div>

                    <div className="space-y-2 col-span-2 md:col-span-3">
                        <label htmlFor="town" className={labelClass}>Town</label>
                        <input type="text" name="town" id="town" value={form.town} onChange={handleFieldChange}
                               placeholder="Freedom Park" className={fieldClass}
                        />
                    </div>

                    <div className="space-y-2 col-span-2 md:col-span-3">
                        <label htmlFor="city" className={labelClass}>
                            City <span className="text-danger">*</span>
                        </label>
                        <input type="text" name="city" id="city" value={form.city} onChange={handleFieldChange}
                               placeholder="Freedom Park" className={fieldClass}
                               aria-required="true" aria-invalid={!!errors.city} ref={cityRef}
                               aria-describedby={errors.city ? "city-err" : undefined}
                        />
                        {errors.city &&
                            <p className="text-sm text-danger" id="city-err" role="alert">{errors.city}</p>
                        }
                    </div>

                    <div className="space-y-2 col-span-2 md:col-span-3">
                        <label htmlFor="cellPhone" className={labelClass}>
                            Cell phone <span className="text-danger">*</span>
                        </label>
                        <input type="tel" name="cellPhone" id="cellPhone" value={form.cellPhone} onChange={handleFieldChange}
                               placeholder="081 234 5678" className={fieldClass} autoComplete="tel"
                               aria-required="true" aria-invalid={!!errors.cellPhone} ref={phoneRef}
                               aria-describedby={errors.cellPhone ? "phone-err" : undefined}
                        />
                        {errors.cellPhone &&
                            <p className="text-sm text-danger" id="phone-err" role="alert">{errors.cellPhone}</p>
                        }
                    </div>

                    <div className="space-y-2 col-span-2 md:col-span-3">
                        <label htmlFor="email" className={labelClass}>Email</label>
                        <input type="text" name="email" id="email" value={form.email} onChange={handleFieldChange}
                               placeholder="name@example.com" className={fieldClass} autoComplete="email"
                        />
                    </div>

                    <div className="col-span-full bg-cream py-4 px-5 rounded-xl text-body
                        flex items-center gap-4"
                    >
                        <Icon name="alert"/>
                        <p>These are your details. You'll add your child's details in the next step.</p>
                    </div>

                    <div className="border-t border-line my-4 col-span-full"/>

                    <div className="col-span-full flex justify-end">
                        <Button variant="ink" type="submit">Next: Your child</Button>
                    </div>
                </div>
            </form>
        </div>


    );
};

export default Step1;