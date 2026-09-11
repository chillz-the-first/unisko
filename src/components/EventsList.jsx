const EventsList = ({events}) => {
    const icons = [
        "/icons/calendar-check.svg",
        "/icons/location-pin.svg",
        "/icons/time.svg",
    ];

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {events.map((event) => (
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
                            {/*{icons.map((icon, index) => (*/}
                            {/*    <div key={index} className="flex gap-2">*/}
                            {/*        <img src={icon} alt="calendar icon" className="w-6 h-6" />*/}
                            {/*        <p className="text-body"></p>*/}
                            {/*    </div>*/}
                            {/*))}*/}
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <img src={icons[0]} alt="calendar icon" className="w-5 h-5" />
                                    <p className="text-body text-sm">{event.date}</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src={icons[1]} alt="calendar icon" className="w-5 h-5" />
                                    <p className="text-body text-sm">{event.location}</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src={icons[2]} alt="calendar icon" className="w-5 h-5" />
                                    <p className="text-body text-sm">{event.time}</p>
                                </div>
                            </div>

                            <p className="text-body text-sm">{event.description}</p>

                            <a href={`https://wa.me/27618117116?${event.msg}`}
                               className="bg-red text-white w-full block text-center rounded-full py-2
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red">
                                {event.cta}
                            </a>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default EventsList;