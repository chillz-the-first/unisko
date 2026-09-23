import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const Layout = ({children}) => {
    const {pathname} = useLocation(); //gives the current URL

    useEffect(() => {
        const heading = document.querySelector("h1")

        if (heading) heading.focus();

        window.scrollTo(0, 0); // scroll back to the top
    }, [pathname])
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-1">{children}</main>
            <Footer/>
        </div>
    );
};

export default Layout;