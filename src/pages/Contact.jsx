import SectionStart from "../components/SectionStart.jsx";
import ChannelCard from "../components/ChannelCard.jsx";
import Placeholder from "../components/Placeholder.jsx";

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
                    <Placeholder aspectRatio='4/3'/>
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

                        <div>
                            <a href="#" className="text-navy text-sm pb-1 border-b border-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy">
                                Get directions →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;