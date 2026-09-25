import Section from "./Section.jsx";
import Arrowlink from "./Arrowlink.jsx";
import Button from "./Button.jsx";

const CTA = ({ tone = "navy", head, lede, btns }) => (
    <Section tone={tone}>
        <div className="flex flex-col items-center justify-center text-center gap-4">
            <h2 className="font-semibold text-headline text-white">{head}</h2>
            <p className="text-white/80 text-lede">{lede}</p>

            <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-4">
                {btns.map((btn, index) => {
                    if (btn.type === "btn") {
                        return (
                            <Button to={btn.destination} variant={btn.variant} key={index}>
                                {btn.text}
                            </Button>
                        );
                    }
                    if (btn.type === "link") {
                        return (
                            <Arrowlink to={btn.destination} textColor={btn.textColor} key={index}>
                                {btn.text}
                            </Arrowlink>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    </Section>
);

export default CTA;