import Section from "../components/Section.jsx";
import {getWhatsAppUrl} from "../lib/whatsapp.js";
import Tile from "../components/Tile.jsx";
import Icon from "../lib/Icon.jsx";
import Button from "../components/Button.jsx";

const channels = [
    {
        icon: "chat",
        title: "WhatsApp",
        desc: "Chat with the Unisko Assistant for quick answers, any time.",
        href: getWhatsAppUrl("Hello, Unisko"),
        ctaText: "Start a chat",
        tone: "navy",
    },
    {
        icon: "phone",
        title: "Call us",
        value: "061 811 7116",
        href: "tel:+27618117116",
        ctaText: "Call now",
        tone: "white",
    },
    {
        icon: "mail",
        title: "Email",
        value: "Unisko.co@gmail.com",
        href: "mailto:Unisko.co@gmail.com",
        ctaText: "Send an email",
        tone: "white",
    },
];

const Contact = () => {
    return (
        <div>
            {/*Header Section*/}
            <Section>
                <div className="space-y-4">
                    <h1 className="text-display text-navy font-semibold">How can we help?</h1>
                    <p className="text-lede text-muted max-w-[46ch]">Pick the channel that works for you.</p>
                </div>
            </Section>

            {/*Channel Section*/}
            <Section tone="cream">
                <div className="grid grid-cols-1 ml:grid-cols-3 gap-4">
                    {channels.map((channel) => (
                        <Tile tone={channel.tone} className="flex flex-col min-h-[17rem] space-y-4" key={channel.title}>
                            <Icon name={channel.icon}
                                  className={`w-7 h-7 ${channel.tone === "white" ? "text-red" : "text-white"}`}
                            />

                            <h2 className="font-semibold text-title">{channel.title}</h2>
                            {channel.desc && (<p className="text-white/80">{channel.desc}</p>)}
                            {channel.value && (<p className="font-semibold text-lede">{channel.value}</p>)}

                            <div className="mt-auto">
                                <Button href={channel.href} external={true}
                                        variant={channel.tone === "white" ? "outline" : "white"}
                                >
                                    {channel.ctaText}
                                </Button>
                            </div>
                        </Tile>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Contact;