export function formatEventDate(iso) {
    const d = new Date(`${iso}T00:00:00`);

    const weekdayShort = d.toLocaleDateString("en-ZA", { weekday: "short" }); // Sat
    const weekdayLong = d.toLocaleDateString("en-ZA", { weekday: "long" });   // Saturday
    const monthShort = d.toLocaleDateString("en-ZA", { month: "short" });     // Oct
    const monthLong = d.toLocaleDateString("en-ZA", { month: "long" });       // October

    return {
        day: String(d.getDate()),                                      // "4"
        monthDay: `${monthShort}, ${weekdayShort}`,                     // "Oct, Sat"
        fullDate: `${weekdayLong}, ${d.getDate()} ${monthLong} ${d.getFullYear()}`,
    };
}