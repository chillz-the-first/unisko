import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Resources from "./pages/Resources.jsx";
import Events from "./pages/Events.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/resources" element={<Resources/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}