// src/components/Icon.jsx

const paths = {
    calendar: (
        <>
            <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
            <path d="M3.5 10h17M8 3v4M16 3v4" />
        </>
    ),
    clock: (
        <>
            <circle cx="12" cy="12" r="8.5" />
            <path d="M12 7.5V12l3 2" />
        </>
    ),
    pin: (
        <>
            <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
            <circle cx="12" cy="10" r="2.3" />
        </>
    ),
    empty: (
        <>
            <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
            <path d="M3.5 10h17M8 3v4M16 3v4M10 15h4" />
        </>
    ),
    check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
};

const Icon = ({ name, className = "w-4 h-4", strokeWidth = 1.8 }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`flex-none ${className}`}
        aria-hidden="true"
    >
        {paths[name]}
    </svg>
);

export default Icon;