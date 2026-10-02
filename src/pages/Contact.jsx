import Section from "../components/Section.jsx";
import {getWhatsAppUrl} from "../lib/whatsapp.js";
import Tile from "../components/Tile.jsx";
import Icon from "../lib/Icon.jsx";
import Button from "../components/Button.jsx";
import ArrowLink from "../components/Arrowlink.jsx";
import {useState} from "react";

const channels = [
    {
        icon: "chat",
        title: "WhatsApp",
        desc: "Chat with the Unisko Assistant for quick answers, any time.",
        href: getWhatsAppUrl("Hello, Unisko"),
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
        value: "Unisko.co@gmail.com",
        href: "mailto:Unisko.co@gmail.com",
        ctaText: "Send an email",
        tone: "white",
        external: false,
    },
];

const hours = [
    { days: "Monday to Friday", time: "12:00 PM to 5:30 PM" },
    { days: "Saturday", time: "8:00 AM to 12:00 PM" },
    { days: "Sunday", time: "Closed" },
];

const faqs = [
    {
        q: "What grades do you tutor?",
        a: "Our tutors teach from Foundation Phase through to Grade 12. Tell us your child's grade and subjects when you enroll.",
    },
    {
        q: "How much does it cost?",
        a: "The After-School Program is R500 a month, Group Classes are R250 a month, and Homework Help is R250 a visit. Online packages start at R149 a month. Registration is a once-off R150.",
    },
    {
        q: "Can I cancel anytime?",
        a: "Online packages are billed monthly and need 30 days' notice to cancel. For programmes at the centre, monthly fees are due before the 10th of each month.",
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
                    <p className="text-lede text-muted max-w-[46ch]">Pick the channel that works for you.</p>
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

                                <h2 className="font-semibold text-title">{channel.title}</h2>
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
                        <ArrowLink href="https://maps.app.goo.gl/p7qbEnEDy93Epscc8">Open in Maps</ArrowLink>
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
                                        className={`w-4 h-4 transition-transform ${openIndex === i ? "rotate-45" : ""}`}
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
        </div>
    );
};

export default Contact;