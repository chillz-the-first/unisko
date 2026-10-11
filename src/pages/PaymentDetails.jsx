import Section from "../components/Section.jsx";
import Tile from "../components/Tile.jsx";
import CopyBtn from "../components/CopyBtn.jsx";
import ArrowLink from "../components/Arrowlink.jsx";
import Icon from "../lib/Icon.jsx";
import {getWhatsAppUrl} from "../lib/whatsapp.js";
import CTA from "../components/CTA.jsx";

const bankDetails = [
    { label: "Bank", value: "Capitec", copy: false },
    { label: "Account holder", value: "N. Mlambo", copy: false },
    { label: "Account number", value: "1595 480 429", copy: "1595480429" },
    { label: "Branch code", value: "470010", copy: "470010" },
    { label: "Reference", value: "Your child's name and surname", copy: false },
];

const paymentProcess = [
    {
        step: 1,
        title: "Add us as a beneficiary",
        desc: "Open your banking app and add Unisko using the banking details above.",
    },
    {
        step: 2,
        title: "Use your child's name as the reference",
        desc: "So we can match the payment to the right learner. For example: Lerato Maselela",
    },
    {
        step: 3,
        title: "Send us your proof of payment",
        desc: "Share it on WhatsApp, or bring a copy to your child's first session.",
    },
];

const ctaBtns = [
    {
        type: "href",
        destination: getWhatsAppUrl("Hello Unisko, here is my proof of payment for "),
        text: "Send proof of payment",
    },
    {
        type: "btn",
        destination: "/enroll",
        text: "Start enrolment",
    },
];

const PaymentDetails = () => {
    return (
        <div>
            <Section>
                <div className="space-y-4 mb-8">
                    <h1 className="font-semibold text-navy text-display" tabIndex={-1}>
                        Payment details.
                    </h1>
                    <p className="text-lede text-muted max-w-[46ch]">
                        Pay the R150 registration fee before your child's first session.
                        Monthly fees go to the same account.
                    </p>
                </div>

                <div className="grid grid-cols-1 ml:grid-cols-[1.5fr_1fr] gap-4">
                    <Tile tone="navy">
                        <h2 className="text-white font-semibold text-title mb-4">Bank details</h2>
                        <dl>
                            {bankDetails.map((item) => (
                                <div className="flex flex-col md:flex-row md:items-center justify-between md:gap-4 py-3
                                    border-t last:border-b border-muted" key={item.label}
                                >
                                    <dt className="text-sm text-white/80 font-semibold">{item.label}</dt>
                                    {item.copy ? (
                                        <dd className="flex items-center justify-between md:justify-normal gap-4">
                                            <span className="text-white font-semibold text-lede">{item.value}</span>
                                            <CopyBtn text={item.copy} label={item.label} />
                                        </dd>
                                    ) : (
                                        <dd className="text-white font-semibold text-lede">{item.value}</dd>
                                    )}
                                </div>
                            ))}
                        </dl>

                        <div className="rounded-tile p-7 bg-body mt-4 space-y-2">
                            <h3 className="text-white font-semibold">Or pay instantly with PayShap</h3>
                            <p className="text-white/80">
                                Choose PayShap in your banking app and pay to this cellphone number.
                                It reflects in seconds.
                            </p>

                            <div className="flex items-center justify-between gap-4">
                                <p className="text-white text-lede font-semibold tabular-nums">061 811 7116</p>
                                <CopyBtn text="0618117116" label="Phone number" />
                            </div>
                        </div>
                    </Tile>

                    <Tile tone="cream" className="h-fit">
                        <h2 className="text-navy font-semibold text-title mb-4">What to pay</h2>

                        <div className="py-4 space-y-2 border-t border-line">
                            <div className="flex justify-between items-end gap-4">
                                <p className="text-navy font-semibold">Registration fee</p>
                                <p className="text-navy font-semibold text-stat tabular-nums">R150</p>
                            </div>
                            <p className="text-muted text-sm font-semibold">
                                Once-off, before your child's first session.
                            </p>
                        </div>

                        <div className="py-4 space-y-2 border-t border-line">
                            <p className="text-navy font-semibold">Monthly fee</p>
                            <p className="text-muted text-sm font-semibold">Depends on the package you choose.</p>
                            <ArrowLink to="/services">See packages</ArrowLink>
                        </div>
                    </Tile>
                </div>
            </Section>

            <Section tone="cream">
                <h2 className="text-navy font-semibold text-headline mb-8">How to pay.</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {paymentProcess.map((item) => (
                        <Tile tone="white" key={item.title} className="space-y-2">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-navy text-white font-semibold">
                                {item.step}
                            </span>
                            <h3 className="text-navy font-semibold text-lede">{item.title}</h3>
                            <p className="text-body">{item.desc}</p>
                        </Tile>
                    ))}
                </div>

                <Tile tone="white" className="border border-line flex items-start gap-4">
                    <Icon name="warning" className="w-5 h-5 mt-0.5 text-danger" />
                    <p className="text-body">
                        <span className="font-semibold">We'll never change these details by message.</span>{" "}
                        If you get a WhatsApp or SMS saying our bank details have changed, call us on{" "}
                        <a href="tel:+27618117116" className="text-red underline">061 811 7116</a> before you pay.
                    </p>
                </Tile>
            </Section>

            <CTA
                head="Paid already?"
                lede="Send your proof of payment on WhatsApp so we can match it to your child."
                btns={ctaBtns}
            />
        </div>
    );
};

export default PaymentDetails;