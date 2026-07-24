/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                navy: "#0a1e3f",
                red: "#c8102e",
                cream: "#f5f6fa",
                ink: "#1a1a1a",
                muted: "#5a5e6b",
                body: "#2a2e3b",
            },
            fontFamily: {
                serif: ['"Fraunces"', "serif"],
                sans: ['"Inter"', "system-ui", "sans-serif"],
            },
            letterSpacing: {
                tightest: "-0.025em",
                tighter: "-0.02em",
                kicker: "0.18em",
            },
        },
    },
    plugins: [],
};
