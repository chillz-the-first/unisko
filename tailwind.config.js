/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                navy: "#0a1e3f",
                body: "#243552",
                red: "#c80f2d",
                "red-hover": "#a90c26",
                cream: "#f5f6f8",
                muted: "#5a6477",
                line: "rgba(10, 30, 63, 0.12)",
                focus: "#2f6fed",
                danger: "#b3261e",
                success: "#1d7a46",
                "field-border": "#8a93a3",
            },
            fontFamily: {
                sans: ["Figtree", "system-ui", "sans-serif"],
            },
            fontSize: {
                display: ["clamp(2.75rem, 7.2vw, 5.25rem)", {lineHeight: "1.04", letterSpacing: "-0.028em"}],
                headline : ["clamp(2rem, 4.8vw, 3.5rem)", {lineHeight: "1.07", letterSpacing: "-0.022em"}],
                title: ["1.75rem", {lineHeight: "1.1", letterSpacing: "-0.02em"}],
                lede: ["clamp(1.1875rem, 2.2vw, 1.5rem)", {lineHeight: "1.35", letterSpacing: "-0.01em"}],
            },
            screens: {
                'ml': '900px', // Medium-Large custom breakpoint
            },
            maxWidth: {
                wrap: "65rem",
            },
            borderRadius: {
                tile: "20px",
            },
        },
    },
    plugins: [],
};
