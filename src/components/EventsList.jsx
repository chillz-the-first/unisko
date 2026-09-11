const EventsList = ({events}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {events.map((event) => {
                    const details = [
                        {icon: "/icons/calendar-check.svg", text: event.date},
                        {icon: "/icons/location-pin.svg", text: event.location},
                        {icon: "/icons/time.svg", text: event.time},
                    ];

                    return (
                        <div key={event.title} className="border border-navy/20 p-5 rounded-lg">
                            <div className="flex justify-between items-center">
                                <p className="bg-cream text-navy px-3 py-1 text-sm rounded-full">{event.type}</p>
                                <p className={`font-serif ${
                                    event.price === "Free" ? "text-muted text-sm" : "text-red font-semibold"
                                }`}>{event.price}</p>
                            </div>

                            <hr className="border-t border-navy/20 my-3"/>

                            <div className="space-y-3">
                                <p className="font-serif font-semibold text-navy text-xl">{event.title}</p>

                                <div className="space-y-1">
                                    {details.map((d) => (
                                        <div key={d.text} className="flex items-center gap-2">
                                            <img src={d.icon} alt="" className="w-5 h-5"/>
                                            <p className="text-body text-sm">{d.text}</p>
                                        </div>
                                    ))}
                                </div>


                                <p className="text-body text-sm">{event.description}</p>

                                <a href={`https://wa.me/27618117116?text=${encodeURIComponent(event.msg)}`}
                                   className="bg-red text-white w-full block text-center rounded-full py-2
                                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red">
                                    {event.cta}
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default EventsList;