import SectionStart from "../components/SectionStart.jsx";
import EmptyState from "../components/EmptyState.jsx";

const Events = () => {
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
            <section className="bg-white py-16 px-10">
                <div className="max-w-6xl mx-auto">
                    <EmptyState/>
                </div>
            </section>
        </div>
    );
}

export default Events;