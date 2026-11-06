import Section from "../components/Section.jsx";
import EmptyList from "../components/events/EmptyList.jsx";
import EventList from "../components/events/EventList.jsx";

const events = [
    {
        id: "e1",
        date: "2026-10-10",
        tag: "Parents' meeting",
        title: "End-of-year parents' meeting and open day",
        time: "10:00 AM to 12:00 PM",
        place: "Unisko Centre, 43 Oil Avenue, White House, Freedom Park",
        desc: "The new weekday learning plan, Saturday attendance, updated packages and December payments, "
            + "with one-on-one feedback from tutors and the launch of the Unisko website.",
    },
    {
        id: "e2",
        date: "2026-11-07",
        tag: "Parents' meeting",
        title: "Last parents' meeting of the year and open day",
        time: "11:00 AM to 12:00 PM",
        place: "Unisko Centre, 43 Oil Avenue, White House, Freedom Park",
        desc: "The new weekday learning plan, Saturday attendance, behaviour and suspensions, updated packages "
            + "and December payments, with one-on-one feedback from tutors, the launch of the Unisko website "
            + "and the new refer-and-earn programme.",
        ctaText: "RSVP on WhatsApp",
        msg: "Hello Unisko, I would like to attend the parents' meeting and open day on Saturday, 7 November.",
    },
];

const today = new Date().toLocaleDateString("en-CA");
const upcoming = events.filter((e) => e.date >= today);
const past = events
    .filter((e) => e.date < today)
    .sort((a, b) => b.date.localeCompare(a.date));

const formatDate = (iso) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString("en-ZA", {
        weekday: "long", day: "numeric", month: "long", year: "numeric",
    });

const Events = () => {
    return (
        <div>
            {/*Header Section*/}
            <Section>
                <div className="space-y-4">
                    <h1 className="text-display text-navy font-semibold" tabIndex={-1}>Events and excursions.</h1>
                    <p className="text-lede text-muted max-w-[46ch]">
                        Excursions, workshops, fundraisers and parents' meetings. Upcoming events are posted here.
                    </p>
                </div>

                <div className="mt-8">
                    {upcoming.length === 0 ? <EmptyList/> : <EventList events={upcoming}/>}
                </div>
            </Section>

            {past.length > 0 && (
                <Section tone="cream">
                    <h2 className="text-headline text-navy font-semibold mb-8">Past events.</h2>

                    <ul className="list-none" role="list">
                        {past.map((event) => (
                            <li key={event.id} className="py-6 border-t border-line space-y-2">
                                <p className="text-sm text-muted">
                                    <time dateTime={event.date}>{formatDate(event.date)}</time> · {event.tag}
                                </p>
                                <h3 className="text-title font-semibold text-navy">{event.title}</h3>
                                <p className="text-sm text-muted">{event.time} · {event.place}</p>
                                <p className="text-body max-w-[65ch]">{event.desc}</p>
                            </li>
                        ))}
                    </ul>
                </Section>
            )}
        </div>
    );
};

export default Events;