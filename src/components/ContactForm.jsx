import SectionStart from "./SectionStart.jsx";
import {useState} from "react";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: '', email: '', phone: '', time: '', query: '',
    });

    function handleChange(e) {
        setForm({
            ...form,        // keeps the other fields as they were
            [e.target.name]: e.target.value,        // overwrites only the field that was changed
        });
    }

    return (
        <div>
            <form>
                <div className="grid grid-cols-2 gap-4">
                    <div className='space-y-2'>
                        <label htmlFor="name" className="text-navy text-sm font-semibold">
                            Parent name <span className="text-red">*</span>
                        </label>
                        <input type="text" id="name" name="name" placeholder='Your full name'
                               className=" text-sm border border-muted/50 rounded px-3 py-2 w-full
                                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                               required aria-required="true" value={form.name} onChange={handleChange}
                        />
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor="email" className="text-navy text-sm font-semibold">
                            Email <span className="text-red">*</span>
                        </label>
                        <input type="email" id="email" name="email" placeholder='you@example.com'
                               className=" text-sm border border-muted/50 rounded px-3 py-2 w-full
                                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                               required aria-required="true" value={form.email} onChange={handleChange}
                        />
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
                              required aria-required="true" value={form.query} onChange={handleChange}
                    />
                    <p className="text-xs text-body/80 m-0">
                        Helper: grade, subject, current school, and what's been frustrating.
                    </p>
                </div>

                <div className="mt-4 flex justify-end">
                    <button type='submit' className="bg-navy text-white px-5 py-3 rounded-full">Send message →</button>
                </div>
            </form>
            <pre className="text-xs">{JSON.stringify(form, null, 2)}</pre>
        </div>
    );
}

export default ContactForm;