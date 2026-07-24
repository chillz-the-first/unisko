const SectionStart = ({children, color='red'}) => {
    const colorClass = color === 'red' ? 'text-red' : 'text-white/50';

    return (
        <div className={`text-[10px] tracking-kicker font-medium mb-4 ${colorClass}`}>
            {children}
        </div>
    );
}

export default SectionStart;