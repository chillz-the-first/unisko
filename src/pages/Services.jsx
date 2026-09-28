import Section from "../components/Section.jsx";

const Services = () => {
    return (
        <div>
            {/*Header Section*/}
            <Section>
                <div className="space-y-4">
                    <h1 className="text-display font-semibold text-navy" tabIndex={-1}>Four ways to learn at Unisko.</h1>
                    <p className="text-lede text-muted max-w-[46ch]">
                        From weekday afternoons at the centre to lessons at home. Pick what fits your child.
                    </p>
                </div>
            </Section>
        </div>
    );
};

export default Services;