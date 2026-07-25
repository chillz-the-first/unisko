import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx"

function TempPlaceholder({ name }) {
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
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<TempPlaceholder name="About" />} />
                    <Route path="/services" element={<TempPlaceholder name="Services" />} />
                    <Route path="/contact" element={<TempPlaceholder name="Contact" />} />
                    <Route path="/enroll" element={<TempPlaceholder name="Enroll" />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}