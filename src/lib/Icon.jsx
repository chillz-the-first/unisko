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
    chat: <path d="M4.5 19.5 5.8 15.8A8 8 0 1 1 8.3 18.4z" />,
    phone: (
        <path d="M6.6 3.5h2.8l1.4 4-2 1.3a11 11 0 0 0 6.4 6.4l1.3-2 4 1.4v2.8a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2z" />
    ),
    mail: (
        <>
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <path d="m4 7 8 6 8-6" />
        </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    alert: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7.5v5.5M12 16.5v.01" />
        </>
    ),
    warning: <path d="M12 3 2 20h20L12 3zM12 10v4M12 17h.01" />,
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