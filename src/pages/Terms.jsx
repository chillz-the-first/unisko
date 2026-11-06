import {Fragment} from "react";
import {Link} from "react-router-dom";
import Section from "../components/Section.jsx";
import {prices} from "../lib/prices.js";

// Change this date whenever the terms change. Section 7 tells parents to check it.
const lastUpdated = "6 November 2026";

const linkClass = "text-red underline hover:text-red-hover";

// A list item that starts with a bold label, e.g. "Registration fee:"
const labelled = (label, text) => (
    <>
        <strong className="text-navy">{label}</strong> {text}
    </>
);

// Each section is a list of blocks, the same as in Privacy.jsx:
//   "text"           → a paragraph
//   {list: [...]}    → a bulleted list
//   <p>...</p> (JSX) → shown as written, for text with bold words or links
const sections = [
    {
        id: "about",
        title: "1. About these terms",
        blocks: [
            `"We", "us" and "Unisko" mean K2026250908 (South Africa) (Pty) Ltd, trading as Unisko, 
            registration number 2026/250908/07, which runs the after-school tutoring centre at 
            43 Oil Avenue, Freedom Park. "You" means the parent or guardian who enrols a child with us.`,
            "These terms apply from the day you submit the enrolment form, for as long as your child attends.",
            "They are governed by South African law. Nothing in them takes away your rights under the Consumer Protection Act or any other law.",
        ],
    },
    {
        id: "enrolment",
        title: "2. Enrolment",
        blocks: [
            `Sending the enrolment form is an application, not a confirmed place. Your child's place is confirmed 
            once we have received the ${prices.registration} registration fee.`,
            "Bring these to your child's first session so we can complete registration:",
            {list: [
                    "your ID",
                    "your child's ID, or their birth certificate if they are under 16",
                    "proof that you paid the registration fee",
                ]},
            "The details you give us must be true and complete. Tell us when any of them change, especially " +
            "your phone number and your emergency contact.",
        ],
    },
    {
        id: "fees",
        title: "3. Fees and payment",
        blocks: [
            {list: [
                    labelled("Registration fee:", `new learners pay ${prices.registration} once, 
                    before their first session. Learners who continue into a new year do not pay it again, 
                    but learners who leave and later come back do. It is not refundable.`),
                    // CHANGED: "on our website" → a link to the Services page, where the fees are
                    labelled("Monthly fee:", <>depends on the package you choose. Our current fees are on
                        our <Link to="/services" className={linkClass}>Services page</Link>, and we confirm yours
                        in writing when you enrol.</>),
                    labelled("Fee increases:", "we tell you on WhatsApp or by email at least one " +
                        "calendar month before fees go up."),
                    labelled("When to pay:", "monthly fees are due before the 10th of each month."),
                    labelled("December:", "the December fee also covers January, so there is no fee " +
                        "in January. The December fee must be paid for your child to keep their place in the new year."),
                    labelled("How to pay:", <>by bank transfer or PayShap, using the details on
                        our <Link to="/payment-details" className={linkClass}>payment details page</Link>, with
                        your child's name and surname as the reference. Send us your proof of payment on WhatsApp,
                        or bring it to the centre.</>),
                ]},
            <p>
                <strong className="text-navy">If a payment is late,</strong> we remind you first. If the monthly fee
                is still unpaid after the 10th, your child may not attend until it is paid. If the December fee is
                not paid, your child's registration ends, and you would need to register again in the new year.
            </p>,
            <p>
                We only take payment into the account shown on our website. We will never send you new bank details
                by WhatsApp, SMS or email. If anyone does, call us
                on <a href="tel:+27618117116" className={linkClass}>061 811 7116</a> before you pay.
            </p>,
        ],
    },
    {
        id: "leaving",
        title: "4. Leaving Unisko",
        blocks: [
            "To end your child's place, tell us on WhatsApp or by email one calendar month before their last day. " +
            "The notice starts on the day we receive your message, and you pay the monthly fee up to the end of it. " +
            "Fees already paid, including the registration fee, are not refunded. This also applies if we suspend or " +
            "end your child's place part-way through a month.",
            "We can also end your child's place with the same notice if fees stay unpaid after a written reminder.",
        ],
    },
    {
        id: "your-child",
        title: "5. Your child at Unisko",
        blocks: [
            {list: [
                    labelled("Drop-off and collection:", "bring and collect your child at the session " +
                        "times we agree with you. Only you, or an adult you have named to us on WhatsApp, may " +
                        "collect your child, and tutors may ask to see that adult's ID."),
                    labelled("Going home alone:", "learners in Grade 4 and above may leave on their " +
                        "own if you have given us written permission on WhatsApp. Learners in Grade R to Grade 3 must be collected."),
                    labelled("Late collection:", "if you are late, we wait with your child until you arrive. " +
                        "There is no fee for late collection."),
                    labelled("Absences:", "the monthly fee stays the same if your child misses sessions. " +
                        "Please tell us in advance when your child will be absent."),

                    labelled("Holidays:", "we are open during school holidays and closed on public holidays. " +
                        "The monthly fee stays the same in months with holidays."),
                    labelled("Emergencies:", "if your child is hurt or falls ill, we contact you " +
                        "straight away. If we cannot reach you or your emergency contact, a tutor may call an " +
                        "ambulance or take your child to the nearest clinic, while we keep trying to reach you."),
                    labelled("Behaviour:", "we have a zero-tolerance policy on bullying. Learners " +
                        "must treat tutors, other learners and the centre with respect. After speaking to you, " +
                        "we may suspend or end a place for bullying or repeated serious misbehaviour."),
                    labelled("Damage:", "if your child damages Unisko property, you pay for the repair or replacement."),
                    labelled("Progress:", "we send you a progress report every term. Results depend " +
                        "on many things, including attendance and practice at home, so we cannot promise particular marks."),
                ]},
        ],
    },
    {
        id: "photos-materials-information",
        title: "6. Photos, learning materials and your information",
        blocks: [
            {list: [
                    labelled("Photos:", <>we only photograph or record your child for our marketing, and use those photos
                        and videos, if you ticked the optional photo consent box when you enrolled. You can withdraw
                        consent at any time on WhatsApp or by email, and we will stop any further use, as set out in
                        section 10 of our <Link to="/privacy" className={linkClass}>privacy policy</Link>.</>),
                    labelled("Learning materials:", "worksheets, study packs and recorded lessons are " +
                        "for your child's own use. Please do not copy, share or resell them."),
                    labelled("Study packs and courses:", "you order them through our website. " +
                        "Once you have paid, we send them to you on WhatsApp or by email. We only refund a " +
                        "study pack or course that is faulty or is not what you ordered."),
                    labelled("Your information:", <>our <Link to="/privacy" className={linkClass}>privacy policy</Link> explains
                        what we collect, why we collect it, and your rights under POPIA.</>),
                ]},
        ],
    },
    {
        id: "changes-contact",
        title: "7. Changes to these terms, and contact",
        blocks: [
            "We may update these terms. We will tell you on WhatsApp or by email at least 14 days before a " +
            "change takes effect, or one calendar month before fees go up. The date at the top of this page " +
            "shows the current version.",
            <p>
                Questions about these terms: Nkosinathi
                Mlambo, <a href="mailto:unisko.co@gmail.com" className={linkClass}>unisko.co@gmail.com</a>,{" "}
                <a href="tel:+27618117116" className={linkClass}>061 811 7116</a>, 43 Oil Avenue, Freedom Park.
            </p>,
        ],
    },
];

function renderBlock(block, index) {
    if (typeof block === "string") {
        return <p key={index}>{block}</p>;
    }
    if (block.list) {
        return (
            <ul key={index} className="list-disc pl-6 space-y-2">
                {block.list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        );
    }
    return <Fragment key={index}>{block}</Fragment>;
}

const Terms = () => {
    return (
        <Section>
            <div className="max-w-[70ch]">
                <div className="space-y-4 mb-12">
                    <h1 className="font-semibold text-navy text-display" tabIndex={-1}>
                        Terms and conditions.
                    </h1>
                    <p className="text-lede text-muted">
                        These terms apply when you enrol your child at Unisko, and you accept them by ticking the box
                        on the last step of the enrolment form.
                    </p>
                    <p className="text-sm text-muted">Last updated: {lastUpdated}.</p>
                </div>

                <div className="space-y-12 text-body">
                    {sections.map((section) => (
                        <section key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
                            <h2 className="text-navy font-semibold text-title">{section.title}</h2>
                            {section.blocks.map(renderBlock)}
                        </section>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Terms;