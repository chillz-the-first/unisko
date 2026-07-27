import SectionStart from "../components/SectionStart.jsx";

const Services = () => {
    return (
        <div>
            {/*Hero section*/}
            <section className="bg-white py-16 px-10">
                <div className="max-w-6xl mx-auto">
                    <SectionStart>WHAT WE OFFER</SectionStart>
                    <div className="grid grid-cols-[2fr_1fr] items-end gap-6">
                        <h1 className="font-serif text-navy text-6xl">Four ways <br/>to learn at <br/>Unisko.</h1>
                        <p className='text-muted'>
                            From daily after-school care to focused 1-on-1 sessions.
                            Pick the format that fits your child.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;