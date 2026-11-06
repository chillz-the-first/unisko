import Section from "../components/Section.jsx";
import {getWhatsAppUrl} from "../lib/whatsapp.js";
import Tile from "../components/Tile.jsx";
import Icon from "../lib/Icon.jsx";
import Button from "../components/Button.jsx";
import ArrowLink from "../components/Arrowlink.jsx";
import {useState} from "react";
import {Link} from "react-router-dom";
import ContactForm from "../components/ContactForm.jsx";
import {prices} from "../lib/prices.js";

const channels = [
    {
        icon: "chat",
        title: "WhatsApp",
        desc: "Chat with the Unisko Assistant for quick answers, any time.",
        href: getWhatsAppUrl("Hello Unisko", "27740795307"),
        ctaText: "Start a chat",
        tone: "navy",
        external: true,
    },
    {
        icon: "phone",
        title: "Call us",
        value: "061 811 7116",
        href: "tel:+27618117116",
        ctaText: "Call now",
        tone: "white",
        external: false,
    },
    {
        icon: "mail",
        title: "Email",
        value: "unisko.co@gmail.com",
        href: "mailto:unisko.co@gmail.com",
        ctaText: "Send an email",
        tone: "white",
        external: false,
    },
];

const hours = [
    {days: "Monday to Friday", time: "12:00 PM to 5:30 PM"},
    {days: "Saturday", time: "8:00 AM to 1:30 PM"},
    {days: "Sunday and public holidays", time: "Closed"},
];

const faqs = [
    {
        q: "What grades do you tutor?",
        a: <>Our tutors teach learners from Grade R to Grade 12. You can tell us your child's grade and subjects
            when you enrol.</>,
    },
    {
        q: "How much does it cost?",
        a: <>The after-school programme is {prices.afterSchool} a month, group classes are {prices.groupClasses} a
            month and homework help is {prices.homeworkHelp} a visit. Online packages start
            at {prices.basic} a month. Registration is a once-off {prices.registration}.</>,
    },
    {
        q: "How do I pay?",
        a: <>Pay by bank transfer or PayShap, using your child's name and surname as the reference.
            Then send us your proof of payment on WhatsApp, or bring it to the centre. Our bank details are on
            the <Link to="/payment-details" className="text-red underline hover:text-red-hover">payment
                details page</Link>.</>,
    },
    {
        q: "Can I cancel at any time?",
        a: <>Yes. Give us one calendar month's notice on WhatsApp or by email, for any package. Monthly fees
            are due before the 10th of each month. The full details are in
            our <Link to="/terms" className="text-red underline hover:text-red-hover">terms and conditions</Link>.</>,
    },
];


const Contact = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div>
            {/*Header Section*/}
            <Section>
                <div className="space-y-4">
                    <h1 className="text-display text-navy font-semibold" tabIndex={-1}>How can we help?</h1>
                    <p className="text-lede text-muted max-w-[46ch]">Choose the way that suits you best.</p>
                </div>
            </Section>

            {/*Channel Section*/}
            <Section tone="cream">
                <div className="grid grid-cols-1 ml:grid-cols-3 gap-4">
                    {channels.map((channel) => (
                        <Tile tone={channel.tone} className="flex flex-col min-h-[17rem]" key={channel.title}>
                            <div className="space-y-4 mb-4">
                                <Icon name={channel.icon}
                                      className={`w-7 h-7 ${channel.tone === "white" ? "text-red" : "text-white"}`}
                                />

                                <h2 className={`font-semibold text-title ${channel.tone === "white" ? "text-navy" : ""}`}>
                                    {channel.title}
                                </h2>
                                {channel.desc && (<p className="text-white/80">{channel.desc}</p>)}
                                {channel.value && (<p className="font-semibold text-lede">{channel.value}</p>)}
                            </div>

                            <div className="mt-auto">
                                <Button href={channel.href} external={channel.external}
                                        variant={channel.tone === "white" ? "outline" : "white"}
                                >
                                    {channel.ctaText}
                                </Button>
                            </div>
                        </Tile>
                    ))}
                </div>
            </Section>

            {/*Address Section*/}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="rounded-tile overflow-hidden aspect-[4/3]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894.3213950583005!2d27.940691081038324!3d-26.284840552228587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950937db80359b%3A0x10fb801b5f03214f!2sUnisko!5e0!3m2!1sen!2sza!4v1785339270253!5m2!1sen!2sza"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Map showing 43 Oil Avenue, Freedom Park"
                        ></iframe>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-headline text-navy font-semibold">43 Oil Avenue, Freedom Park.</h2>
                        <dl className="space-y-2 max-w-[30ch]">
                            {hours.map((hour) => (
                                <div className="flex justify-between items-center gap-4" key={hour.days}>
                                    <dt className="text-muted">{hour.days}</dt>
                                    <dd className="text-body">{hour.time}</dd>
                                </div>
                            ))}
                        </dl>
                        <ArrowLink href="https://maps.app.goo.gl/srj88XnoX99w3nd79">Open in Maps</ArrowLink>
                    </div>
                </div>
            </Section>

            {/*FAQ Section*/}
            <Section tone="cream">
                <div className="max-w-[52rem]">
                    <h2 className="text-headline text-navy font-semibold mb-8">Questions parents ask.</h2>

                    {faqs.map((faq, i) => (
                        <div className="border-t border-line last:border-b" key={faq.q}>
                            <h3 className="font-semibold text-navy text-lede">
                                <button type="button" aria-expanded={openIndex === i} aria-controls={`faq-${i}`}
                                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                        className="flex items-center justify-between w-full py-4 text-left min-h-[44px] gap-4"
                                >
                                    {faq.q}
                                    <Icon name="plus"
                                          className={`w-4 h-4 transition-transform motion-reduce:transition-none ${openIndex === i ? "rotate-45" : ""}`}
                                    />
                                </button>
                            </h3>
                            <div id={`faq-${i}`} hidden={openIndex !== i}>
                                <p className="px-4 mb-4 text-body">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/*CTA Section*/}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <h2 className="text-headline text-navy font-semibold">Send us a message.</h2>
                        <p className="text-muted text-lede">
                            Tell us about your child's schoolwork and how we can help.
                        </p>
                        <p className="text-muted text-sm mt-4">
                            We use your details only to reply to you.{" "}
                            <Link to="/privacy" className="text-red underline hover:text-red-hover">
                                Read our privacy policy
                            </Link>
                        </p>
                    </div>

                    <ContactForm/>
                </div>
            </Section>
        </div>
    );
};

export default Contact;