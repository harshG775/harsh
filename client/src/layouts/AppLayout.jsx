import { useEffect} from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopNavbar from "../components/pageLayouts/TopNavbar";
import SideNavbar from "../components/pageLayouts/SideNavbar";
import Footer from "../components/pageLayouts/Footer";
export default function AppLayout() {
    const location = useLocation();

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [location]);

    return (
        <>
            <TopNavbar/>
            <SideNavbar/>

            <main className={`
                font-poppins bg-bg_1 text-text min-h-screen 
                transition-padding duration-200 ease-in-out sm:pl-12
                capitalize
                `}>
                <Outlet />
            </main>
            <Footer/>
                    
        </>
    );
}
