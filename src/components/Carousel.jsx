import {useEffect, useRef} from "react";

const Carousel = ({items, trackRef, cardWidth, ratio="aspect-[4/5]", autoScroll = false}) => {
    const localRef = useRef(null);
    const track = trackRef || localRef;

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!autoScroll || reduceMotion) return;

        const timer = setInterval(() => {
            const el = track.current;
            const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
            if (atEnd) {
                el.scrollTo({left: 0, behavior: "smooth"});
            } else {
                el.scrollBy({left: el.clientWidth + 16, behavior: "smooth"});
            }
        }, 5000);

        return () => clearInterval(timer);
    }, [autoScroll, track]);

    return (
      <div ref={track}
        className="flex gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        scroll-smooth snap-x snap-mandatory"
      >
          {items.map(item => (
              <div key={item.src} className={`${cardWidth} flex-shrink-0 snap-start`}>
                  <img src={item.src} alt={item.alt} className={`${ratio} w-full object-contain bg-transparent rounded`}/>
                  {item.name && <h3 className="font-serif text-navy text-xl mt-3">{item.name}</h3>}
                  {item.subject &&
                      <p className="text-muted text-sm">{item.subject}{item.grade && ` · ${item.grade}`}</p>
                  }

              </div>
          ))}
      </div>
    );
}

export default Carousel;