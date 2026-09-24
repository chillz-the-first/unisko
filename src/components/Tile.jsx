const tones = {
    cream: "bg-cream",
    white: "bg-white",
    navy: "bg-navy text-white",
};

const Tile = ({tone = "cream", className = "", children}) => {
    return (
        <div className={`rounded-tile p-7 ${tones[tone]} ${className}`}>{children}</div>
    );
};

export default Tile;