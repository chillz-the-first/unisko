import {useEffect, useRef, useState} from "react";

const GAP = 16;

const Carousel = ({items, children, cardWidth, label, autoScroll = false, interval = 5000}) => {
    const track = useRef(null);

    const [index, setIndex] = useState(0); // which card is currently at the left edge

    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const [paused, setPaused] = useState(false);

    const reduceMotion = typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduce-motion: reduce)").matches;

    const step = () => {
        const card = track.current?.firstElementChild;
        if (!card) return 0;
        return card.getBoundingClientRect().width + GAP;
    };

    const update = () => {
        const el = track.current;
        if (!el) return;

        const distance = step();
        if (distance > 0) setIndex(Math.round(el.scrollLeft / distance));

        setAtStart(el.scrollLeft <= 1);
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    };

    const scrollByCards = (direction) => {
        track.current?.scrollBy({
            left: step() * direction,
            behavior: reduceMotion ? "auto" : "smooth",
        });
    };

    useEffect(() => {
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [update]); //Maybe remove

    useEffect(() => {
        if (!autoScroll || reduceMotion || paused) return;

        const timer = setInterval(() => {
            const el = track.current;
            if (!el) return;

            if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
                el.scrollTo({left: 0, behavior: "smooth"});
            }
            else {
                scrollByCards(1);
            }
        }, interval);
        return () => clearInterval(timer);
    }, [autoScroll, interval, paused, reduceMotion]);

    return (
        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
             onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}
        >
            <div ref={track} onScroll={update} tabIndex={0} role="group" aria-label={label}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::webkit-scrollbar]:hidden"
            >
                {items.map((item) => (
                    <div key={item.id} className={`${cardWidth} flex-shrink-0 snap-start`}>
                        {children(item)}
                    </div>
                ))}
            </div>

            {!autoScroll && (
                <p className="sr-only" aria-live="polite">
                    Showing {index + 1} of {items.length}
                </p>
            )}

            <div className="flex gap-2 mt-6">
                <button type="button" onClick={() => scrollByCards(-1)} disabled={atStart}
                        aria-label="Previous"
                    className="w-11 h-11 inline-grid place-items-center rounded-full border border-line text-navy
                    hover:bg-cream disabled:opacity-40 disabled:cursor-not-allowed">
                    ←
                </button>
                <button type="button" onClick={() => scrollByCards(1)} disabled={atEnd}
                        aria-label="Next"
                    className="w-11 h-11 inline-grid place-items-center rounded-full border border-line text-navy
                    hover:bg-cream disabled:opacity-40 disabled:cursor-not-allowed">
                    →
                </button>
            </div>
        </div>
    );

};

export default Carousel;