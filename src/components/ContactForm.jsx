import {useRef, useState} from "react";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: '', email: '', phone: '', time: '', query: '',
    });

    const [errors, setErrors] = useState({
        name: '', email: '', query: '',
    });

    const [status, setStatus] = useState('idle');

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const queryRef = useRef(null);

    function handleChange(e) {
        setForm({
            ...form,        // keeps the other fields as they were
            [e.target.name]: e.target.value,        // overwrites only the field that was changed
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const newErrors = {};

        if (!form.name) {
            newErrors.name = 'Please enter your name';
        }
        if (!form.query) {
            newErrors.query = 'Please enter your query, so we\'ll be able to assist you';
        }
        if (!form.email) {
            newErrors.email = 'Please enter your email';
        }
        else if (!form.email.includes('@')) {
            newErrors.email = 'Email must include @';
        }

        if (Object.keys(newErrors).length > 0) {    // Object.keys(newErrors) returns an array of the object's keys
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
        }
        setStatus('submitting')

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

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center space-y-2">
                <h3 className="text-navy text-2xl font-serif">Thanks for reaching out</h3>
                <p className="text-muted text-lg">We'll get back to you within 48 hours.</p>
            </div>
        );
    }
    else {
        return (
            <div>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className='space-y-2'>
                            <label htmlFor="name" className="text-navy text-sm font-semibold">
                                Parent name <span className="text-red">*</span>
                            </label>
                            <input type="text" id="name" name="name" placeholder='Your full name'
                                   className=" text-sm border border-muted/50 rounded px-3 py-2 w-full
                                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                                   aria-required="true" value={form.name} onChange={handleChange}
                                   aria-invalid={!!errors.name} aria-describedby="name-err" ref={nameRef}
                            />
                            {errors.name && (<p id='name-err' role='alert' className="text-xs text-red">{errors.name}</p>)}
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="email" className="text-navy text-sm font-semibold">
                                Email <span className="text-red">*</span>
                            </label>
                            <input type="email" id="email" name="email" placeholder='you@example.com'
                                   className=" text-sm border border-muted/50 rounded px-3 py-2 w-full
                                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                                   aria-required="true" value={form.email} onChange={handleChange}
                                   aria-invalid={!!errors.email} aria-describedby="email-err" ref={emailRef}
                            />
                            {errors.email && (<p id='email-err' role='alert' className="text-xs text-red">{errors.email}</p>)}
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="phone" className="text-navy text-sm font-semibold">
                                Phone
                            </label>
                            <input type="tel" id="phone" name="phone" placeholder='081 234 5678'
                                   value={form.phone} onChange={handleChange}
                                   className=" text-sm border border-muted/50 rounded px-3 py-2 w-full
                                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                            />
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="time" className="text-navy text-sm font-semibold">
                                Best time to reach
                            </label>
                            <input type="text" id="time" name="time" placeholder='e.g. weekdays afternoons'
                                   value={form.time} onChange={handleChange}
                                   className=" text-sm border border-muted/50 rounded px-3 py-2 w-full
                                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                            />
                        </div>
                    </div>

                    <div className="w-full mt-4 space-y-2">
                        <label htmlFor="query" className="text-navy text-sm font-semibold">
                            What do you need help with? <span className="text-red">*</span>
                        </label>
                        <textarea name="query" id="query" rows="5"
                                  placeholder="Tell us about your child and what you're hoping for ..."
                                  className="w-full text-sm border border-muted/50 rounded px-3 py-2
                                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                                  aria-required="true" value={form.query} onChange={handleChange}
                                  aria-invalid={!!errors.query} aria-describedby="query-err" ref={queryRef}
                        />
                        {errors.query && (<p id='query-err' role='alert' className="text-xs text-red">{errors.query}</p>)}
                        <p className="text-xs text-body/80 m-0">
                            Helper: grade, subject, current school, and what's been frustrating.
                        </p>
                    </div>
                    {status === 'error' && (
                        <p className="text-red font-serif text-lg my-1">Couldn't send message. Please try again later.</p>
                    )}

                    <div className="mt-4 flex justify-end">
                        <button type='submit' disabled={status === 'submitting'}
                            className="bg-navy text-white px-5 py-3 rounded-full"
                        >{status === 'submitting' ? 'Sending...' : 'Send message →'}</button>
                    </div>
                </form>
            </div>
        );
    }


}

export default ContactForm;