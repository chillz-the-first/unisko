const Placeholder = ({label, aspectRatio='4/3', dark=false}) => {
    const bg = dark ? 'bg-white/[0.06]' : 'bg-navy/[0.04]';
    const stripeColor = dark ? 'rgba(255,255,255,0.04)' : 'rgba(10,30,63,0.04)';
    const textColor = dark ? 'text-white/40': 'text-navy/40';

    return (
        <div className={`relative ${bg} rounded overflow-hidden`} style={{aspectRatio}}>
            <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(135deg, transparent 0 8px, ${stripeColor} 8px 9px)`,
            }}/>
            {label && (
                <div className={`absolute bottom-4 left-4 text-[9px] tracking-kicker ${textColor}`}>
                    {label}
                </div>
            )}
        </div>
    );
}

export default Placeholder;