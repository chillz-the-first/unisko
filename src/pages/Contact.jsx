import SectionStart from "../components/SectionStart.jsx";
import ChannelCard from "../components/ChannelCard.jsx";
import ContactForm from "../components/ContactForm.jsx";

const questions = [
    'What grades do you tutor?', 'How much does it cost?', 'Can I cancel anytime?', 'Do you offer financial aid?'
]

const Contact = () => {
    return (
        <div>
            {/*Intro section*/}
            <section className="bg-white py-16 px-10">
                <div className="max-w-6xl mx-auto space-y-5">
                    <SectionStart>GET IN TOUCH</SectionStart>
                    <h1 className="font-serif text-navy text-6xl font-semibold">How can we help?</h1>
                    <p className="text-body max-w-md">
                        Pick the channel that works for you. We reply to everything within two business days.
                    </p>
                </div>
            </section>

            {/*Channel section*/}
            <section className="bg-cream py-16 px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-[1.5fr_1fr_1fr] gap-4">
                    <ChannelCard
                        kicker='FASTEST'
                        title='WhatsApp Chatbot'
                        body='Average reply: 30 seconds. Best for quick questions whenever you have them.'
                        status='Online now · 24/7'
                        cta='Start chat →'
                        ctaTo='#'
                        variant='featured'
                    />
                    <ChannelCard
                        kicker='PHONE'
                        title='Call us'
                        body='Mon-Fri · 8 AM - 7 PM'
                        number='061 811 7116'
                        cta='Call now'
                        ctaTo='tel:+27618117116'
                        variant='std'
                    />
                    <ChannelCard
                        kicker='EMAIL'
                        title='Write to us'
                        body='For longer questions or attachments'
                        email='Unisko.co@gmail.com'
                        cta='Open email'
                        ctaTo='mailto:unisko.co@gmail.com'
                        variant='std'
                    />
                </div>
            </section>

            {/*Visit us section*/}
            <section className="bg-white py-16 px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-[1fr_1.3fr] gap-8 items-center">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894.3213950583005!2d27.940691081038324!3d-26.284840552228587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950937db80359b%3A0x10fb801b5f03214f!2sUnisko!5e0!3m2!1sen!2sza!4v1785339270253!5m2!1sen!2sza"
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Unisko location on Google Maps"
                        ></iframe>
                    </div>

                    <div className="space-y-4">
                        <SectionStart>VISIT US</SectionStart>
                        <h2 className="text-navy text-4xl font-serif font-semibold">43 Oil Avenue, <br/>Freedom Park.</h2>

                        <div className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-1">
                            <p className="text-muted text-sm">Mon-Fri</p>
                            <p className="text-navy text-sm">3:00 - 7:00 PM</p>
                            <p className="text-muted text-sm">Saturday</p>
                            <p className="text-navy text-sm">9:00 AM - 2:00 PM</p>
                            <p className="text-muted text-sm">Sunday</p>
                            <p className="text-navy text-sm">Closed</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*FAQ section*/}
            <section className="bg-cream py-16 px-10">
                <div className="max-w-6xl mx-auto">
                    <SectionStart>BEFORE YOU WRITE</SectionStart>
                    <h2 className="text-navy text-4xl font-serif font-semibold mb-8">FAQs</h2>

                    <div className='rounded bg-white'>
                        {questions.map((q) => (
                            <div className="px-3 py-5 flex justify-between border-b-2 border-b-navy/15 last:border-b-0" key={q}>
                                <p className="text-navy">{q}</p>
                                <p className="text-navy">+</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*Note section*/}
            <section className="bg-white py-16 px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-[1fr_1.6fr] gap-6 items-start">
                    <div className="space-y-4">
                        <SectionStart>STILL HAVE QUESTIONS?</SectionStart>
                        <h2 className="text-navy text-4xl font-serif font-semibold">Send us a note.</h2>
                        <p className="text-body text-sm">
                            Tell us what's going on. We reply within 48 hours.
                        </p>
                        <p className="text-muted text-sm border-l-2 border-red px-2">We never share your info.</p>
                    </div>

                    <ContactForm/>
                </div>
            </section>
        </div>
    );
}

export default Contact;