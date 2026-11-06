import {Fragment} from "react";
import {Link} from "react-router-dom";
import Section from "../components/Section.jsx";
import Tile from "../components/Tile.jsx";

const effectiveDate = "1 September 2026";
const lastUpdated = "6 November 2026";

const linkClass = "text-red underline hover:text-red-hover";

const OfficerDetails = ({showWebsite = false}) => (
    <Tile tone="cream" className="space-y-2">
        <p className="text-navy font-semibold">K2026250908 (South Africa) (Pty) Ltd, trading as Unisko</p>
        <dl className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:gap-2">
                <dt className="font-semibold text-navy">Information Officer:</dt>
                <dd>Nkosinathi Mlambo</dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2">
                <dt className="font-semibold text-navy">Email:</dt>
                <dd><a href="mailto:unisko.co@gmail.com" className={linkClass}>unisko.co@gmail.com</a></dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2">
                <dt className="font-semibold text-navy">Telephone / WhatsApp:</dt>
                <dd><a href="tel:+27618117116" className={linkClass}>061 811 7116</a></dd>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-2">
                <dt className="font-semibold text-navy">Physical address:</dt>
                <dd>43 Oil Avenue, Freedom Park</dd>
            </div>
            {showWebsite && (
                <div className="flex flex-col sm:flex-row sm:gap-2">
                    <dt className="font-semibold text-navy">Website:</dt>
                    <dd><Link to="/" className={linkClass}>unisko.co.za</Link></dd>
                </div>
            )}
        </dl>
    </Tile>
);

// Each section is a list of blocks:
//   "text"              → a paragraph
//   {heading: "..."}    → a sub-heading, e.g. 3.1
//   {list: [...]}       → a bulleted list
//   <p>...</p> (JSX)    → shown as written, for text with bold words or links
const sections = [
    {
        id: "introduction",
        title: "1. Introduction",
        blocks: [
            <p>
                K2026250908 (South Africa) (Pty) Ltd, trading as Unisko, registration number 2026/250908/07
                ("<strong>Unisko</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>")
                is committed to protecting the privacy and personal information of our learners, parents and guardians,
                customers, employees, tutors, service providers and website users.
            </p>,
            "Unisko provides educational and academic support services, including tutoring, homework assistance, " +
            "online classes, recorded lessons, study materials, holiday programmes, educational events, excursions " +
            "and related services. In providing these services, we may collect and process personal information " +
            "relating to learners and their parents or legal guardians.",
            "This Privacy Policy explains how Unisko collects, uses, stores, protects and, where necessary, " +
            "shares personal information.",
            "This Privacy Policy applies to personal information collected through:",
            {list: [
                    "the Unisko website;",
                    "learner registration forms;",
                    "online registration and enrolment;",
                    "tutoring and educational programmes;",
                    "online classes and learning platforms;",
                    "purchases of educational products and services;",
                    "events and excursions;",
                    "social media platforms;",
                    "email, telephone and messaging services;",
                    "payment processes;",
                    "marketing and promotional activities; and",
                    "any other interaction between you and Unisko.",
                ]},
            <p>
                Unisko is committed to processing personal information in accordance with
                the <strong>Protection of Personal Information Act 4 of 2013 ("POPIA")</strong>, together with
                other applicable South African legislation.
            </p>,
        ],
    },
    {
        id: "information-officer",
        title: "2. Information Officer",
        blocks: [
            "Unisko is the responsible party for personal information processed in connection with its services.",
            "For privacy-related enquiries, requests or complaints, please contact:",
            <OfficerDetails />,
        ],
    },
    {
        id: "information-we-collect",
        title: "3. Personal information we collect",
        blocks: [
            "Depending on the services you use and your relationship with Unisko, we may collect and process different categories of personal information.",
            {heading: "3.1 Learner information"},
            "This may include:",
            {list: [
                    "full name and surname;",
                    "date of birth or age;",
                    "identity or passport number;",
                    "citizenship;",
                    "home language;",
                    "gender, where reasonably necessary;",
                    "grade;",
                    "school;",
                    "subjects;",
                    "academic information;",
                    "assessment results;",
                    "academic progress;",
                    "attendance records;",
                    "homework and class participation;",
                    "learner-generated work;",
                    "photographs;",
                    "video recordings;",
                    "audio recordings;",
                    "testimonials;",
                    "emergency contact information;",
                    "relevant dietary information where required for an event or programme;",
                    "relevant medical or safety information where reasonably necessary; and",
                    "other information necessary to provide educational or related services.",
                ]},
            {heading: "3.2 Parent or legal guardian information"},
            "This may include:",
            {list: [
                    "full name and surname;",
                    "identity or passport number;",
                    "relationship to the learner;",
                    "telephone number;",
                    "WhatsApp number;",
                    "email address;",
                    "physical or postal address where necessary;",
                    "payment and billing information;",
                    "registration information;",
                    "consent records;",
                    "correspondence with Unisko; and",
                    "information necessary to administer the learner's participation.",
                ]},
            {heading: "3.3 Website and online learning information"},
            "When you use our website or online learning services, we may collect:",
            {list: [
                    "name;",
                    "email address;",
                    "telephone number;",
                    "account information;",
                    "registration information;",
                    "course enrolments;",
                    "purchased products or services;",
                    "class attendance;",
                    "learning activity;",
                    "assessment information;",
                    "IP address;",
                    "browser and device information;",
                    "cookies and similar technical information; and",
                    "information submitted through online forms.",
                ]},
        ],
    },
    {
        id: "how-we-collect",
        title: "4. How we collect personal information",
        blocks: [
            "We may collect personal information directly from you or from an authorised parent, guardian or representative.",
            "Information may be collected when you:",
            {list: [
                    "register a learner with Unisko;",
                    "enrol in a tutoring programme;",
                    "register for an online class;",
                    "purchase a recorded class;",
                    "purchase a study pack or other educational resource;",
                    "register for an event or excursion;",
                    "communicate with Unisko;",
                    "contact us through WhatsApp, email or telephone;",
                    "interact with our social media platforms;",
                    "complete a form on our website;",
                    "make a payment;",
                    "participate in an Unisko programme;",
                    "provide feedback or a testimonial;",
                    "participate in a competition or promotional activity; or",
                    "otherwise use our services.",
                ]},
            "Where lawful and necessary, we may also receive personal information from schools, educational partners, service providers or other authorised third parties.",
        ],
    },
    {
        id: "purposes",
        title: "5. Purposes for which we process personal information",
        blocks: [
            "Unisko collects and processes personal information for specific and legitimate purposes.",
            "These purposes may include:",
            {heading: "5.1 Provision of educational services"},
            "To provide and administer:",
            {list: [
                    "tutoring;",
                    "homework assistance;",
                    "academic support;",
                    "Mathematics and English programmes;",
                    "examination preparation;",
                    "online classes;",
                    "recorded lessons;",
                    "study materials;",
                    "holiday classes; and",
                    "other educational services.",
                ]},
            {heading: "5.2 Learner administration"},
            "To:",
            {list: [
                    "register learners;",
                    "maintain learner records;",
                    "manage class allocations;",
                    "monitor attendance;",
                    "monitor academic progress;",
                    "communicate with parents and guardians; and",
                    "administer educational programmes.",
                ]},
            {heading: "5.3 Online learning"},
            "To provide access to:",
            {list: [
                    "live online classes;",
                    "recorded lessons;",
                    "digital study packs;",
                    "online assessments;",
                    "educational resources; and",
                    "other online learning services.",
                ]},
            {heading: "5.4 Events and excursions"},
            "To administer Unisko events, excursions and educational activities, including:",
            {list: [
                    "registration;",
                    "attendance;",
                    "transport arrangements;",
                    "meal arrangements;",
                    "emergency communication;",
                    "safety and supervision; and",
                    "communication with parents and guardians.",
                ]},
            {heading: "5.5 Payments and financial administration"},
            "To:",
            {list: [
                    "process payments;",
                    "confirm transactions;",
                    "administer learner accounts;",
                    "issue invoices or payment notices;",
                    "maintain financial records; and",
                    "manage outstanding fees.",
                ]},
            {heading: "5.6 Communication"},
            "To communicate with parents, guardians, learners and customers regarding:",
            {list: [
                    "classes;",
                    "schedules;",
                    "attendance;",
                    "academic matters;",
                    "payments;",
                    "events;",
                    "excursions;",
                    "holiday programmes;",
                    "online learning;",
                    "changes to services;",
                    "customer support; and",
                    "other relevant Unisko matters.",
                ]},
            {heading: "5.7 Marketing and promotion"},
            "Subject to applicable consent and legal requirements, Unisko may process personal information for marketing, advertising and promotional purposes.",
            "This may include promoting:",
            {list: [
                    "tutoring services;",
                    "online classes;",
                    "recorded classes;",
                    "study packs;",
                    "educational programmes;",
                    "events;",
                    "excursions;",
                    "merchandise;",
                    "holiday programmes; and",
                    "other Unisko services.",
                ]},
        ],
    },
    {
        id: "children",
        title: "6. Processing of children's personal information",
        blocks: [
            "Unisko recognises that many of the individuals who use our services are children and that children's personal information requires a heightened level of protection.",
            "Where Unisko processes personal information relating to a child, we will comply with the requirements applicable to children's personal information under POPIA.",
            "Where required, Unisko will obtain consent from a competent person, ordinarily the child's parent or legal guardian, before processing children's personal information.",
            "A parent or legal guardian providing information on behalf of a learner confirms that they are authorised to provide that information and, where applicable, provide the required consent.",
            "Unisko will not knowingly collect or process children's personal information for purposes unrelated to our legitimate educational, administrative, operational or legal requirements.",
        ],
    },
    {
        id: "photographs",
        title: "7. Photographs, video recordings and audiovisual material",
        blocks: [
            "As part of our educational programmes, events, excursions and other activities, Unisko may photograph or record learners, tutors, employees and participants.",
            "This may include:",
            {list: [
                    "photographs;",
                    "videos;",
                    "group photographs;",
                    "event footage;",
                    "educational activity footage;",
                    "interviews;",
                    "testimonials;",
                    "audio recordings; and",
                    "other audiovisual material.",
                ]},
            "These materials may be used for legitimate Unisko purposes, subject to applicable legal requirements and consent.",
        ],
    },
    {
        id: "marketing-photos",
        title: "8. Use of learner photographs and videos for marketing",
        blocks: [
            "With the appropriate consent from a parent or legal guardian, Unisko may use photographs and video recordings containing learners for marketing, advertising and promotional purposes.",
            "This may include publication on:",
            {list: [
                    "the Unisko website;",
                    "Instagram;",
                    "Facebook;",
                    "TikTok;",
                    "YouTube;",
                    "WhatsApp;",
                    "digital advertising platforms;",
                    "printed promotional material;",
                    "brochures;",
                    "flyers;",
                    "posters;",
                    "promotional videos;",
                    "advertisements;",
                    "social media campaigns; and",
                    "other official Unisko marketing channels.",
                ]},
            "The purpose of using such content is to:",
            {list: [
                    "promote Unisko's educational services;",
                    "showcase educational activities;",
                    "highlight learner achievements;",
                    "document events and excursions;",
                    "demonstrate the Unisko learning environment;",
                    "communicate the impact of our programmes; and",
                    "promote future Unisko programmes and services.",
                ]},
            "Where appropriate, Unisko may use a learner's name, grade or achievement together with a photograph or video, provided that the necessary consent has been obtained and the use is lawful.",
        ],
    },
    {
        id: "marketing-consent",
        title: "9. Marketing and social media consent",
        blocks: [
            "Consent for the use of learner photographs, videos and other identifiable audiovisual material for advertising and promotional purposes will, where applicable, be obtained separately from the consent required to provide educational services.",
            "A parent or legal guardian may choose whether to provide such optional marketing/media consent.",
            "Where consent has been provided, Unisko may continue to use the relevant material for the purposes for which consent was provided until such consent is withdrawn, subject to applicable legal requirements.",
        ],
    },
    {
        id: "withdrawing-consent",
        title: "10. Withdrawal of media consent",
        blocks: [
            "A parent or legal guardian may withdraw consent for future use of a learner's photograph or video for marketing purposes by contacting Unisko in writing.",
            "Upon receiving a valid withdrawal request, Unisko will take reasonable steps to stop future use of the relevant material within its control.",
            "Withdrawal of consent does not necessarily require Unisko to retrieve or remove material that:",
            {list: [
                    "has already been printed;",
                    "has already been distributed;",
                    "has already been published;",
                    "has been incorporated into previously produced advertising material;",
                    "has been downloaded or copied by third parties; or",
                    "has been independently reposted or distributed by third parties.",
                ]},
            "Unisko cannot guarantee the removal of content from third-party platforms where such content is no longer under Unisko's control.",
        ],
    },
    {
        id: "social-media",
        title: "11. Social media and public platforms",
        blocks: [
            "Content published on public social media platforms may be accessible to individuals beyond Unisko's control.",
            "Once content is published on a public platform, third parties may potentially:",
            {list: [
                    "view it;",
                    "share it;",
                    "download it;",
                    "screenshot it;",
                    "repost it; or",
                    "otherwise reproduce it.",
                ]},
            "Unisko will take reasonable steps to use learner photographs and videos responsibly and appropriately. However, Unisko cannot guarantee that third parties will not independently copy or distribute content published on public platforms.",
        ],
    },
    {
        id: "achievements",
        title: "12. Learner achievements and testimonials",
        blocks: [
            "With the appropriate consent, Unisko may showcase learner achievements and testimonials for educational and promotional purposes.",
            "This may include:",
            {list: [
                    "academic achievements;",
                    "certificates;",
                    "awards;",
                    "examination results;",
                    "improvements in academic performance;",
                    "learner projects;",
                    "creative work;",
                    "testimonials;",
                    "feedback; and",
                    "success stories.",
                ]},
            "Unisko will take reasonable steps to ensure that such content is presented respectfully and does not unnecessarily disclose sensitive personal information.",
        ],
    },
    {
        id: "direct-marketing",
        title: "13. Direct marketing",
        blocks: [
            "Unisko may communicate with existing customers regarding services and products that may reasonably be of interest to them, subject to applicable legal requirements.",
            "Marketing communications may relate to:",
            {list: [
                    "tutoring;",
                    "online learning;",
                    "recorded classes;",
                    "study packs;",
                    "events;",
                    "excursions;",
                    "holiday programmes;",
                    "merchandise;",
                    "promotions; and",
                    "new Unisko services.",
                ]},
            "Where required by law, Unisko will obtain consent before sending direct marketing communications.",
            "Recipients may request that Unisko stop sending marketing communications.",
        ],
    },
    {
        id: "online-classes",
        title: "14. Online classes and recorded content",
        blocks: [
            "Unisko may provide live and recorded educational classes through its website and/or third-party technology platforms.",
            "Information processed in connection with online learning may include:",
            {list: [
                    "learner registration information;",
                    "account information;",
                    "course enrolment;",
                    "attendance;",
                    "participation;",
                    "assessments;",
                    "purchases;",
                    "communication records; and",
                    "technical information.",
                ]},
            "Recorded classes may be made available for educational purposes and may be sold as part of Unisko's online learning services.",
            "Where a live class is recorded and learners may be identifiable in the recording, Unisko will take reasonable steps to provide appropriate notice and obtain any consent required by law.",
        ],
    },
    {
        id: "educational-materials",
        title: "15. Educational materials and digital products",
        blocks: [
            "Unisko may sell or distribute:",
            {list: [
                    "study packs;",
                    "worksheets;",
                    "revision material;",
                    "recorded lessons;",
                    "digital resources;",
                    "examination preparation material; and",
                    "other educational products.",
                ]},
            "Personal information associated with purchases may be processed for:",
            {list: [
                    "order fulfilment;",
                    "payment processing;",
                    "account administration;",
                    "customer support;",
                    "delivery where applicable; and",
                    "record keeping.",
                ]},
        ],
    },
    {
        id: "payment-information",
        title: "16. Payment information",
        blocks: [
            "Unisko may process information necessary to administer and verify payments.",
            "This may include:",
            {list: [
                    "payer name;",
                    "learner name;",
                    "invoice number;",
                    "transaction reference;",
                    "payment amount;",
                    "payment date; and",
                    "other information necessary for financial administration.",
                ]},
            "Where payments are processed through third-party payment providers, those providers may process personal information in accordance with their own privacy policies and applicable legal requirements.",
            "Unisko will not request unnecessary confidential banking credentials such as banking passwords or PINs.",
        ],
    },
    {
        id: "service-providers",
        title: "17. Third-party service providers",
        blocks: [
            "Unisko may engage third-party service providers to assist with its operations.",
            "These may include providers of:",
            {list: [
                    "website hosting;",
                    "online learning platforms;",
                    "payment processing;",
                    "cloud storage;",
                    "email services;",
                    "communication platforms;",
                    "analytics;",
                    "advertising services;",
                    "marketing services;",
                    "IT services;",
                    "transport services;",
                    "printing services; and",
                    "event-related services.",
                ]},
            "The Unisko website and WhatsApp line currently use the following providers:",
            {list: [
                    "Cloudflare, which hosts the Unisko website;",
                    "Formspree, which receives the enrolment and contact forms on the website and sends them to Unisko by email;",
                    "Google, which provides Unisko's email (Gmail); and",
                    "Meta, which provides WhatsApp.",
                ]},
            "When you message Unisko on WhatsApp, an automated assistant may reply. The assistant runs on Render, " +
            "uses Google's Gemini to understand your message and prepare a reply, and takes its answers from Google Sheets.",
            "Where a third party processes personal information on behalf of Unisko, Unisko will take reasonable " +
            "steps to ensure that appropriate confidentiality and security measures are maintained.",
            <p><strong>Unisko does not sell or rent learners' personal information to third parties.</strong></p>,
        ],
    },
    {
        id: "disclosure",
        title: "18. Disclosure of personal information",
        blocks: [
            "Personal information may be disclosed where reasonably necessary for the provision of Unisko's services or where permitted or required by law.",
            "Recipients may include:",
            {list: [
                    "authorised Unisko employees;",
                    "tutors;",
                    "administrators;",
                    "professional advisers;",
                    "technology providers;",
                    "payment providers;",
                    "educational partners;",
                    "event providers;",
                    "transport providers;",
                    "emergency services;",
                    "regulatory authorities; and",
                    "law enforcement authorities where legally required.",
                ]},
            "Unisko will seek to limit the personal information disclosed to what is reasonably necessary for the relevant purpose.",
        ],
    },
    {
        id: "partners",
        title: "19. School and educational partners",
        blocks: [
            "Unisko may work with schools, educational institutions, community organisations and other partners.",
            "Where necessary and lawful, personal information may be shared with such organisations for purposes directly related to an agreed educational programme or service.",
            "Unisko will seek to ensure that personal information is not disclosed unnecessarily.",
        ],
    },
    {
        id: "security",
        title: "20. Information security",
        blocks: [
            "Unisko takes reasonable technical and organisational measures to safeguard personal information against:",
            {list: [
                    "unauthorised access;",
                    "unlawful processing;",
                    "accidental loss;",
                    "destruction;",
                    "damage;",
                    "alteration;",
                    "disclosure; and",
                    "other security risks.",
                ]},
            "Security measures may include:",
            {list: [
                    "access controls;",
                    "password protection;",
                    "restricted access to learner records;",
                    "confidentiality obligations;",
                    "secure storage;",
                    "appropriate administrative procedures;",
                    "secure website practices; and",
                    "periodic review of information-security measures.",
                ]},
            "Despite these measures, no electronic transmission or storage system can be guaranteed to be completely secure.",
        ],
    },
    {
        id: "confidentiality",
        title: "21. Confidentiality",
        blocks: [
            "Unisko requires employees, tutors and other authorised persons who have access to personal information to maintain appropriate confidentiality.",
            "Personal information may only be accessed or used where reasonably necessary for the person's authorised responsibilities.",
            "Personal information obtained through Unisko may not be used for unauthorised personal, commercial or other purposes.",
        ],
    },
    {
        id: "cookies",
        title: "22. Cookies and website technologies",
        blocks: [
            "The Unisko website may use cookies and similar technologies to support website functionality and improve user experience.",
            "Cookies may be used to:",
            {list: [
                    "maintain website functionality;",
                    "remember preferences;",
                    "understand website usage;",
                    "improve website performance;",
                    "analyse website traffic; and",
                    "support marketing activities where applicable.",
                ]},
            "Users may manage certain cookie preferences through their browser settings.",
            "Disabling cookies may affect the functionality of certain areas of the website.",
        ],
    },
    {
        id: "third-party-websites",
        title: "23. Third-party websites and platforms",
        blocks: [
            "The Unisko website may contain links to third-party websites, social media platforms, payment providers and other external services.",
            "Unisko does not control the privacy practices, security measures or content of third-party platforms.",
            "Users should review the privacy policies of third-party platforms before submitting personal information to them.",
        ],
    },
    {
        id: "retention",
        title: "24. Retention of personal information",
        blocks: [
            "Unisko will retain personal information only for as long as reasonably necessary for the purposes for which it was collected or where retention is required or permitted by law.",
            "Information may be retained for purposes including:",
            {list: [
                    "educational administration;",
                    "financial record keeping;",
                    "contractual obligations;",
                    "legal compliance;",
                    "dispute resolution;",
                    "maintaining consent records;",
                    "legitimate business purposes; and",
                    "protecting Unisko's legal rights.",
                ]},
            "When personal information is no longer required, Unisko will take reasonable steps to securely delete, destroy or de-identify it.",
        ],
    },
    {
        id: "accuracy",
        title: "25. Accuracy of personal information",
        blocks: [
            "Unisko takes reasonable steps to ensure that personal information in its possession is accurate, complete and up to date.",
            "Parents, guardians and customers are encouraged to notify Unisko when relevant information changes.",
            "This may include changes to:",
            {list: [
                    "contact details;",
                    "emergency contacts;",
                    "learner grade;",
                    "school;",
                    "email address;",
                    "telephone number; or",
                    "other relevant information.",
                ]},
        ],
    },
    {
        id: "your-rights",
        title: "26. Rights of data subjects",
        blocks: [
            "Subject to applicable legal requirements and limitations, data subjects have rights in relation to their personal information.",
            "These may include the right to:",
            {list: [
                    "request access to personal information held by Unisko;",
                    "request correction of inaccurate or incomplete information;",
                    "request deletion of personal information where appropriate;",
                    "object to certain processing;",
                    "withdraw consent where processing is based on consent;",
                    "object to direct marketing; and",
                    "lodge a complaint concerning the processing of personal information.",
                ]},
            "Where a request is made on behalf of a learner, Unisko may require proof of the requesting person's identity and authority to act on behalf of the learner.",
        ],
    },
    {
        id: "parent-rights",
        title: "27. Parent and guardian rights",
        blocks: [
            "Where a learner is a minor, the parent or legal guardian may exercise applicable rights on behalf of the learner, subject to POPIA and other applicable legislation.",
            "Parents and guardians may contact Unisko regarding:",
            {list: [
                    "information held about their child;",
                    "correction of learner information;",
                    "applicable consent records;",
                    "media and marketing preferences;",
                    "privacy concerns; and",
                    "other matters concerning the processing of the learner's personal information.",
                ]},
        ],
    },
    {
        id: "data-breaches",
        title: "28. Data breaches",
        blocks: [
            "If Unisko becomes aware of a security compromise involving personal information, we will take reasonable steps to:",
            {list: [
                    "assess the incident;",
                    "contain and address the security risk;",
                    "investigate the incident;",
                    "mitigate potential harm;",
                    "implement appropriate remedial measures; and",
                    "provide notifications where required by applicable law.",
                ]},
            "Where legally required, affected data subjects and/or the Information Regulator will be notified.",
        ],
    },
    {
        id: "cross-border",
        title: "29. Cross-border processing",
        blocks: [
            "Certain technology and service providers used by Unisko may store or process information outside the Republic of South Africa.",
            <p>
                For example, Cloudflare, Formspree, Google, Meta and Render, named
                in <a href="#service-providers" className={linkClass}>section 17</a>, are based outside South
                Africa. Information sent through the website or WhatsApp may therefore be stored or processed
                in other countries, including the United States.
            </p>,
            "Where personal information is transferred across borders, Unisko will take reasonable steps to ensure that such transfers comply with applicable legal requirements.",
        ],
    },
    {
        id: "children-online",
        title: "30. Privacy of children on public platforms",
        blocks: [
            "Unisko recognises the particular risks associated with publishing information about children online.",
            "Accordingly, Unisko will take reasonable steps to avoid unnecessarily publishing information such as:",
            {list: [
                    "a learner's private contact details;",
                    "residential address;",
                    "personal identification numbers;",
                    "sensitive family information;",
                    "detailed schedules;",
                    "unnecessary school information; or",
                    "other information that could reasonably place the learner at risk.",
                ]},
            "Where learner images are used for marketing, Unisko will seek to ensure that the accompanying information is limited to what is reasonably necessary for the intended purpose.",
        ],
    },
    {
        id: "changes",
        title: "31. Changes to this Privacy Policy",
        blocks: [
            "Unisko reserves the right to amend this Privacy Policy from time to time.",
            "Changes may be made to reflect:",
            {list: [
                    "changes to our services;",
                    "changes to our website;",
                    "new online learning services;",
                    "changes in technology;",
                    "changes in applicable legislation;",
                    "changes in our information-processing practices; or",
                    "improvements to our privacy and security procedures.",
                ]},
            <p>
                The most recent version will be published on the Unisko website and will contain the
                applicable <strong>"Last Updated"</strong> date.
            </p>,
        ],
    },
    {
        id: "contact",
        title: "32. Contact us",
        blocks: [
            "If you have any questions, concerns, requests or complaints relating to this Privacy Policy or the processing of your personal information, please contact Unisko's Information Officer.",
            <OfficerDetails showWebsite />,
            "When making a privacy request, you may be required to provide sufficient information to enable Unisko to verify your identity and locate the relevant personal information.",
        ],
    },
    {
        id: "complaints",
        title: "33. Complaints to the Information Regulator",
        blocks: [
            "If you believe that Unisko has not handled your personal information appropriately, you are encouraged to contact Unisko's Information Officer so that the matter can be investigated and addressed.",
            <p>
                You may also lodge a complaint with the <strong>Information Regulator of South Africa</strong> in
                accordance with applicable legislation.{" "}
                Complaints are lodged on the{" "}
                <a href="https://inforegulator.org.za/complaints/" target="_blank" rel="noopener noreferrer"
                   className={linkClass}
                >
                    Information Regulator's website<span className="sr-only"> (opens in a new tab)</span>
                </a>.
            </p>,
        ],
    },
    {
        id: "consent",
        title: "34. Consent to processing",
        blocks: [
            "By registering for or using Unisko's services, submitting personal information to Unisko, purchasing an Unisko product or service, or otherwise interacting with Unisko, you acknowledge that you have read and understood this Privacy Policy.",
            "Where processing requires consent, Unisko will obtain such consent in accordance with applicable law.",
            <p>
                <strong>
                    Consent relating to the use of learner photographs, videos and other audiovisual material for
                    marketing, advertising and social media purposes may be obtained separately.
                </strong>
            </p>,
        ],
    },
    {
        id: "media-consent",
        title: "35. Media and marketing consent",
        blocks: [
            "For learners under the age of 18, the parent or legal guardian should be presented with a " +
            "separate media consent option during registration.",
            "On the website, this is the optional photo and video checkbox on the last step of the enrolment form. " +
            "It is only ticked if you tick it, and leaving it unticked does not affect your child's enrolment. " +
            "On a paper registration form, it is the separate media consent section.",
            "The consent reads:",
            <Tile tone="cream" className="space-y-3">
                <h3 className="text-navy font-semibold">Media, photography and video consent</h3>
                <p>
                    I, the parent/legal guardian, hereby provide consent for Unisko Ltd to photograph and/or
                    record my child during Unisko classes, educational activities, events, excursions and programmes.
                </p>
                <p>
                    I understand that approved photographs and/or recordings may be used by Unisko for legitimate
                    marketing, advertising, promotional and communications purposes, including on the Unisko website,
                    social media platforms, digital advertising, printed promotional material and other official
                    Unisko marketing channels.
                </p>
                <p>
                    I understand that this consent is separate from the consent required for Unisko to provide
                    educational services.
                </p>
            </Tile>,
            <p>
                To withdraw this consent, see <a href="#withdrawing-consent" className={linkClass}>section 10</a>.
            </p>,
        ],
    },
    {
        id: "final-statement",
        title: "36. Final statement",
        blocks: [
            "Unisko is committed to protecting the privacy, dignity and safety of the learners, " +
            "families and individuals who interact with our organisation.",
            "We recognise that education involves a relationship of trust between learners, parents," +
            " guardians, educators and the organisation. We therefore aim to ensure that personal information" +
            " is collected responsibly, used for legitimate purposes, protected appropriately and handled in" +
            " accordance with applicable privacy legislation.",
        ],
    },
];

function renderBlock(block, index) {
    if (typeof block === "string") {
        return <p key={index}>{block}</p>;
    }
    if (block.heading) {
        return <h3 key={index} className="text-navy font-semibold text-lede pt-4">{block.heading}</h3>;
    }
    if (block.list) {
        return (
            <ul key={index} className="list-disc pl-6 space-y-1">
                {block.list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        );
    }
    return <Fragment key={index}>{block}</Fragment>;
}

const Privacy = () => {
    return (
        <Section>
            <div className="max-w-[70ch]">
                <div className="space-y-4 mb-8">
                    <h1 className="font-semibold text-navy text-display" tabIndex={-1}>
                        Privacy policy.
                    </h1>
                    <p className="text-lede text-muted">
                        How Unisko Ltd collects, uses, stores and protects personal information, in line with
                        the Protection of Personal Information Act (POPIA).
                    </p>
                    <p className="text-sm text-muted">
                        Effective date: {effectiveDate}. Last updated: {lastUpdated}.
                    </p>
                </div>

                <details className="rounded-tile bg-cream px-7 py-4 mb-12">
                    <summary className="cursor-pointer py-2 font-semibold text-navy">Contents</summary>
                    <nav aria-label="Privacy policy contents">
                        <ul className="mt-2 sm:columns-2 gap-8">
                            {sections.map((section) => (
                                <li key={section.id} className="break-inside-avoid">
                                    <a href={`#${section.id}`}
                                       className="block py-2 text-sm text-body hover:text-navy hover:underline"
                                    >
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </details>

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

export default Privacy;