const tones = {
    white: "bg-white",
    cream: "bg-cream",
    navy: "bg-navy text-white",
};

const Section = ({tone = "white", children}) => {
    return (
        <section className={`py-[clamp(4rem,_9vw,_7rem)] ${tones[tone]}`}>
            <div className="max-w-wrap mx-auto px-6">
                {children}
            </div>
        </section>
    );
}

export default Section;