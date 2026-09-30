import Icon from "../../lib/Icon.jsx";
import Button from "../Button.jsx";
import {getWhatsAppUrl} from "../../lib/whatsapp.js";
import {formatEventDate} from "../../lib/dates.js";

const EventList = ({events}) => (
    <ul className="list-none">
        {events.map(event => {
            const date = formatEventDate(event.date);

            return (
                <li key={event.id} className="grid grid-cols-1 md:grid-cols-[6.5rem_minmax(0,1fr)_auto]
                gap-6 md:gap-x-8 border-t border-line last:border-b py-10">
                    <div className="space-y-2" aria-hidden="true">
                        <p className="text-stat ml:text-stat-lg tabular-nums font-semibold">
                            {date.day}
                        </p>
                        <p className="text-sm text-muted">{date.monthDay}</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="bg-cream px-4 py-1 text-body text-sm text-center rounded-full w-fit">
                            {event.tag}
                        </p>
                        <h2 className="text-navy text-title font-semibold">{event.title}</h2>

                        <ul className="list-none flex flex-wrap gap-y-2 gap-x-6">
                            <li className="flex items-center gap-2 text-muted text-sm">
                                <Icon name="calendar"/>
                                <p>{date.fullDate}</p>
                            </li>
                            <li className="flex items-center gap-2 text-muted text-sm">
                                <Icon name="clock"/>
                                <p>{event.time}</p>
                            </li>
                            <li className="flex items-center gap-2 text-muted text-sm">
                                <Icon name="pin"/>
                                <p>{event.place}</p>
                            </li>
                        </ul>

                        <p className="text-body">{event.desc}</p>
                    </div>

                    <div className="space-y-4">
                        <p className="text-navy md:text-right text-title font-semibold">{event.cost}</p>
                        <Button href={getWhatsAppUrl(event.msg)} external={true}>{event.ctaText}</Button>
                    </div>
                </li>
            );
        })}
    </ul>
);

export default EventList;