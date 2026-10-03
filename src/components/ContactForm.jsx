import {useRef, useState} from "react";
import Button from "./Button.jsx";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "", email: "", phone: "", available: "", query: "",
    });

    const [errors, setErrors] = useState({
        name: "", email: "", query: "",
    });

    const [status, setStatus] = useState("idle");

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const queryRef = useRef(null);

    function handleChange (e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const newErrors = {};

        if (!form.name) {
            newErrors.name = "Please enter your name";
        }
        if (!form.email) {
            newErrors.email = "Please enter your email";
        }
        else if (!form.email.includes("@")) {
            newErrors.email = "Email must include an @";
        }
        if (!form.query) {
            newErrors.query = "Please enter your query";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            if (newErrors.name) {
                nameRef.current.focus();
            }
            else if (newErrors.email) {
                emailRef.current.focus();
            }
            else if (newErrors.query) {
                queryRef.current.focus();
            }

            return;
        }

        const payload = {
            ...form,
            _subject: `New message from ${form.name}`,
        };
        setStatus("submitting");
        setErrors({name: "", email: "", query: "",});

        try {
            const response = await fetch('https://formspree.io/f/xyegeaer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStatus('success');
            }
            else {
                setStatus('error');
            }
        }
        catch (e) {
            setStatus('error')
        }
    }

    return (
        <div className="space-y-4">
            <form noValidate>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-navy text-sm font-semibold">
                            Parent name <span className="text-red">*</span>
                        </label>
                        <input type="text" name="name" id="name" placeholder="Thando Mazibuko"
                               autoComplete="name" aria-required="true" value={form.name} onChange={handleChange}
                               aria-invalid={!!errors.name} aria-describedby="name-err" ref={nameRef}
                               className="rounded-xl border border-field-border px-4 py-2 text-body placeholder:text-body/60"
                        />
                        {errors.name && (<p id='name-err' role='alert' className="text-xs text-red">{errors.name}</p>)}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-navy text-sm font-semibold">
                            Email <span className="text-red">*</span>
                        </label>
                        <input type="email" name="email" id="email" placeholder="name@example.com"
                               autoComplete="email" aria-required="true" value={form.email} onChange={handleChange}
                               aria-invalid={!!errors.email} aria-describedby="email-err" ref={emailRef}
                               className="rounded-xl border border-field-border px-4 py-2 text-body placeholder:text-body/60"
                        />
                        {errors.email && (<p id='email-err' role='alert' className="text-xs text-red">{errors.email}</p>)}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-navy text-sm font-semibold">
                            Phone
                        </label>
                        <input type="tel" name="phone" id="phone" placeholder="081 234 5678" inputMode="tel"
                               aria-required="true" value={form.phone} onChange={handleChange}
                               className="rounded-xl border border-field-border px-4 py-2 text-body placeholder:text-body/60"/>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="available" className="text-navy text-sm font-semibold">
                            Email
                        </label>
                        <input type="text" name="available" id="available" placeholder="Weekday afternoons"
                               aria-required="true" value={form.available} onChange={handleChange}
                               className="rounded-xl border border-field-border px-4 py-2 text-body placeholder:text-body/60"/>
                    </div>
                </div>

                <div className="w-full space-y-2">
                    <label htmlFor="query" className="text-navy text-sm font-semibold">
                        What do you need help with? <span className="text-red">*</span>
                    </label>
                    <textarea name="query" id="query"
                              aria-required="true" value={form.query} onChange={handleChange}
                              aria-invalid={!!errors.query} aria-describedby="query-err" ref={queryRef}
                              className="block min-h-[10rem] w-full rounded-xl border border-field-border px-4 py-2"
                    />
                    {errors.query && (<p id='query-err' role='alert' className="text-xs text-red">{errors.query}</p>)}
                    <p className="text-sm text-muted">
                        Grade, subject, current school, and what's been frustrating.
                    </p>
                </div>

                <div className="mt-4 flex justify-end">
                    <Button onClick={handleSubmit} disabled={status === "submitting"} variant="ink">
                        {status === "submitting" ? "Sending..." : "Send message"}
                    </Button>
                </div>

            </form>
        </div>
    );
};

export default ContactForm;