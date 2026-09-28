import {useEffect, useRef, useState} from "react";

const GAP = 16;

const Carousel = ({items, children, cardWidth, label, autoScroll = false, interval = 5000}) => {
    const track = useRef(null);

    const [index, setIndex] = useState(0); // which card is currently at the left edge

    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const [paused, setPaused] = useState(false);
    const [userPaused, setUserPaused] = useState(false);

    const reduceMotion = typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    }, []);

    useEffect(() => {
        if (!autoScroll || reduceMotion || paused || userPaused) return;

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
    }, [autoScroll, interval, paused, userPaused, reduceMotion]);

    return (
        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
             onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}
             className="relative"
        >
            <div ref={track} onScroll={update} tabIndex={0} role="group" aria-label={label}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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

            {!autoScroll && (
                <div className="flex gap-2 mt-6 justify-center">
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
            )}

            {autoScroll && (
                <button type="button" onClick={() => setUserPaused((p) => !p)}
                        aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
                    className="absolute bottom-4 right-4 w-11 inline-grid place-items-center rounded-full
                    bg-white/90 backdrop-blur-sm text-navy hover:bg-white shadow-sm"
                >
                    {userPaused ? (
                        <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true" fill="currentColor">
                            <path d="M7 5h3v14H7zM14 5h3v14h-3z" />
                        </svg>
                    )}
                </button>
            )}

        </div>
    );

};

export default Carousel;