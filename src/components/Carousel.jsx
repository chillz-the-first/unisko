const Carousel = ({images}) => {
    return (
      <div className="flex gap-4 overflow-x-auto">
          {images.map(item => (
              <div key={item.src} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0">
                  <img src={item.src} alt={item.alt} className="w-full aspect-[4/5] object-cover rounded"/>
                  <h3 className="font-serif text-navy text-xl mt-3">{item.name}</h3>
                  <p className="text-muted text-sm">{item.subject}{item.grade && ` · ${item.grade}`}</p>
              </div>
          ))}
      </div>
    );
}

export default Carousel;