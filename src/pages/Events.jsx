import Section from "../components/Section.jsx";
import EmptyList from "../components/events/EmptyList.jsx";
import EventList from "../components/events/EventList.jsx";

const events = [
    {
        id: "e1",
        date: "2026-10-04",
        tag: "Excursion",
        title: "Science Centre day trip",
        time: "8:30 AM to 3:00 PM",
        place: "Sci-Bono Science Centre",
        desc: "A full day of hands-on exhibits. Transport, entry and lunch included.",
        cost: "R250",
        ctaText: "Book on WhatsApp",
        msg: "Hello Unisko, could I get help registering my child for this trip?",
    },
    {
        id: "e2",
        date: "2026-10-17",
        tag: "Parent meeting",
        title: "Term 3 progress evening",
        time: "6:00 PM to 7:30 PM",
        place: "43 Oil Avenue, Freedom Park",
        desc: "Meet your child's tutor and go through their term report.",
        cost: "Free",
        ctaText: "Tell us you're coming",
        msg: "Hello Unisko, I'll be attending the upcoming parent meeting.",
    },
];

const Events = () => {
    return (
        <div>
            {/*Header Section*/}
            <Section>
                <div className="space-y-4">
                    <h1 className="text-display text-navy font-semibold" tabIndex={-1}>Events and excursions.</h1>
                    <p className="text-lede text-muted max-w-[46ch]">
                        Excursions, workshops, fundraisers and parent meetings. This is where we post what's coming up.
                    </p>
                </div>

                <div className="mt-8">
                    {events.length === 0 ? <EmptyList/> : <EventList events={events} />}
                </div>
            </Section>
        </div>
    );
};

export default Events;