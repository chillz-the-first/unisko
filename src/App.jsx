import { BrowserRouter, Routes, Route } from "react-router-dom";

function Placeholder({ name }) {
    return (
        <div className="p-10">
            <h1 className="text-2xl font-serif">{name} page</h1>
            <p className="text-muted">This page is not built yet.</p>
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Placeholder name="Home" />} />
                <Route path="/about" element={<Placeholder name="About" />} />
                <Route path="/services" element={<Placeholder name="Services" />} />
                <Route path="/contact" element={<Placeholder name="Contact" />} />
                <Route path="/enroll" element={<Placeholder name="Enroll" />} />
            </Routes>
        </BrowserRouter>
    );
}