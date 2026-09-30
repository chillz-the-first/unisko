import Section from "../components/Section.jsx";

const Events = () => {
    return (
        <div>
            {/*Header Section*/}
            <Section>
                <div className="space-y-4">
                    <h1 className="text-display text-navy font-semibold">Events and excursions.</h1>
                    <p className="text-lede text-muted max-w-[46ch]">
                        Excursions, workshops, fundraisers and parent meetings. This is where we post what's coming up.
                    </p>
                </div>
            </Section>
        </div>
    );
};

export default Events;