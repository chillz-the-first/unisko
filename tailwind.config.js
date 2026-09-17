/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                navy: "#0a1e3f", //#004ecd(blue) #0a1e3f(navy)
                red: "#c80f2d",
                cream: "#f5f6f8",
                muted: "#5a6477",
                body: "#2a2e3b",
                "navy-2": "#243552",
                focus: "#2f6fed",
                danger: "#b3261e",
                "field-border": "#8a93a3",
            },
            fontFamily: {
                serif: ['Fraunces', "serif"],
                sans: ["Inter", "system-ui", "sans-serif"],
                display: ["Figtree", "system-ui", "sans-serif"],
            },
            letterSpacing: {
                display: "-0.028em",
                headline: "-0.022em",
                kicker: "0.18em",
            },
        },
    },
    plugins: [],
};
