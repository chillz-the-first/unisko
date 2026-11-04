import {useEffect, useRef, useState} from "react";
import Button from "./Button.jsx";
import {getWhatsAppUrl} from "../lib/whatsapp.js";

const fieldClass =
    "block w-full rounded-xl border border-field-border px-4 py-2 text-body placeholder:text-body/60";
const labelClass = "block text-navy text-sm font-semibold";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "", email: "", phone: "", available: "", query: "",
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const queryRef = useRef(null);
    const successRef = useRef(null);

    function handleChange (e) {
        const {name, value} = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    function reset() {
        setForm({name: "", email: "", phone: "", available: "", query: ""});
        setErrors({});
        setStatus("idle");
    }

    useEffect(() => {
        if (status === "success") successRef.current?.focus();
    }, [status]);

    async function handleSubmit(e) {
        e.preventDefault();
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Please enter your name.";
        }
        if (!form.email.trim()) {
            newErrors.email = "Please enter your email address.";
        }
        else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
            newErrors.email = "Please check your email address, e.g. name@example.com.";
        }
        if (!form.query.trim()) {
            newErrors.query = "Please tell us what you need help with.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            if (newErrors.name) nameRef.current.focus();
            else if (newErrors.email) emailRef.current.focus();
            else if (newErrors.query) queryRef.current.focus();

            return;
        }

        const payload = {
            ...form,
            _subject: `New message from ${form.name}`,
        };
        setStatus("submitting");
        setErrors({});

        try {
            const response = await fetch('https://formspree.io/f/xyegeaer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            setStatus(response.ok ? "success" : "error");
        }
        catch {
            setStatus('error')
        }
    }

    if (status === "success") {
        return(
            <div className="flex flex-col items-center justify-center space-y-2">
                <h3 ref={successRef} tabIndex={-1} className="text-navy text-title font-semibold">
                    Thank you for your message.
                </h3>
                <p className="text-lede text-muted">We will reply within 48 hours.</p>
                <Button variant="outline" onClick={reset}>Send another message</Button>
            </div>
        );
    }

    return (
        <form noValidate onSubmit={handleSubmit} className={"space-y-4"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="name" className={labelClass}>
                        Parent name <span className="text-danger">*</span>
                    </label>
                    <input type="text" name="name" id="name" placeholder="Thando Mazibuko"
                           autoComplete="name" aria-required="true" value={form.name} onChange={handleChange}
                           aria-invalid={!!errors.name} ref={nameRef} className={fieldClass}
                           aria-describedby={errors.name ? "name-err" : undefined}
                    />
                    {errors.name && (<p id='name-err' role='alert' className="text-sm text-danger">{errors.name}</p>)}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className={labelClass}>
                        Email <span className="text-danger">*</span>
                    </label>
                    <input type="email" name="email" id="email" placeholder="name@example.com"
                           autoComplete="email" aria-required="true" value={form.email} onChange={handleChange}
                           aria-invalid={!!errors.email} ref={emailRef} className={fieldClass}
                           aria-describedby={errors.email ? "email-err" : undefined}
                    />
                    {errors.email && (<p id='email-err' role='alert' className="text-sm text-danger">{errors.email}</p>)}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="phone" className={labelClass}>Phone</label>
                    <input type="tel" name="phone" id="phone" placeholder="081 234 5678" inputMode="tel"
                           value={form.phone} onChange={handleChange} autoComplete="tel" className={fieldClass}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="available" className={labelClass}>Best time to reach you</label>
                    <input type="text" name="available" id="available" placeholder="Weekday afternoons"
                           value={form.available} onChange={handleChange} className={fieldClass}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="query" className={labelClass}>
                    What do you need help with? <span className="text-danger">*</span>
                </label>
                <textarea name="query" id="query"
                          aria-required="true" value={form.query} onChange={handleChange}
                          aria-invalid={!!errors.query} ref={queryRef} className={`${fieldClass} min-h-[10rem]`}
                          aria-describedby={errors.query ? "query-help query-err" : "query-help"}
                />
                {errors.query && (<p id='query-err' role='alert' className="text-sm text-danger">{errors.query}</p>)}
                <p id="query-help" className="text-sm text-muted">
                    Include your child's grade, the subject, their school, and what they are struggling with.
                </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4">
                <p role="alert" className="text-sm text-danger">
                    {status === "error" && (
                        <>
                            Your message was not sent. Please try again, or{" "}
                            <a href={getWhatsAppUrl("Hello Unisko, I tried to send a message on the website, " +
                                "but it did not go through.")}
                               target="_blank" rel="noopener noreferrer"
                               className="text-red underline hover:text-red-hover"
                            >
                                message us on WhatsApp<span className="sr-only"> (opens in a new tab)</span>
                            </a>.
                        </>
                    )}
                </p>
                <Button disabled={status === "submitting"} variant="ink" type="submit">
                    {status === "submitting" ? "Sending..." : "Send message"}
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;