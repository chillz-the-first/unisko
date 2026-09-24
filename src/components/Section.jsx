const Section = ({tone = "white", children}) => {
    return (
        <section className={`py-[clamp(4rem,_9vw,_7rem)] ${tone === "white" ? "bg-white" : "bg-cream"}`}>
            <div className="max-w-wrap mx-auto px-6">
                {children}
            </div>
        </section>
    );
}

export default Section;