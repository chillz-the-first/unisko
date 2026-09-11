import SectionStart from "../components/SectionStart.jsx";
import EmptyState from "../components/EmptyState.jsx";
import EventsList from "../components/EventsList.jsx";

const Events = () => {
    const events = [
        {
            type: "Excursion",
            title: "Science Centre day trip",
            date: "Saturday, 4 October 2026",
            time: "8:30 AM - 3:00 PM",
            location: "Sci-Bono Science Centre",
            price: "R250",
            description: "A full day of hands-on exhibits. Transport, entry and lunch included.",
            cta: "Book on Whatsapp",
            msg: "Hi Unisko, I want to book the Science Centre day trip",
        },
        {
            type: "Parent's meeting",
            title: "Term 3 progress evening",
            date: "Friday, 17 October 2026",
            time: "6:00 PM - 7:30 PM",
            location: "43 Oil Avenue, Freedom Park",
            price: "Free",
            description: "Meet your child's tutor and go through their term report.",
            cta: "Let us know you're coming",
            msg: "Hi Unisko, I'll be the upcoming parents meeting",
        },
    ];

    return (
        <div>
            {/*Intro section*/}
            <section className="bg-white py-16 px-10">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-4">
                        <SectionStart>WHAT'S ON</SectionStart>
                        <h1 className="text-navy font-serif font-semibold text-4xl md:text-5xl lg:text-6xl">
                            Events and excursions
                        </h1>
                        <p className="text-body">
                            Excursions, workshops, fundraisers, and parent meetings. This is where we post what' coming up.
                        </p>
                    </div>
                </div>
            </section>

            {/*Events section*/}
            <section className="bg-white py-10 px-10">
                <div className="max-w-6xl mx-auto">
                    {events.length === 0 ? <EmptyState/> : <EventsList events={events} />}
                </div>
            </section>
        </div>
    );
}

export default Events;