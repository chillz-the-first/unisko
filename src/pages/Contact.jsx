import SectionStart from "../components/SectionStart.jsx";
import ChannelCard from "../components/ChannelCard.jsx";

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
                        title='Whatsapp Chatbot'
                        body='Average reply: 30 seconds. Best for quick questions whenever you have them.'
                        status='Online now · 24/7'
                        cta='Start chat →'
                        ctaTo='#'
                        variant='featured'
                    />
                    <ChannelCard
                        kicker='PHONE'
                        title='Call us'
                        body='Mon-Fri · 8 AM - & PM'
                        number='061 811 7116'
                        cta='Call now'
                        ctaTo='#'
                        variant='std'
                    />
                    <ChannelCard
                        kicker='EMAIL'
                        title='Write to us'
                        body='For longer questions or attachments'
                        email='Unisko.co@gmail.com'
                        cta='Open email'
                        ctaTo='#'
                        variant='std'
                    />
                </div>
            </section>
        </div>
    );
}

export default Contact;