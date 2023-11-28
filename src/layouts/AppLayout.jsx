import { useEffect} from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopNavbar from "../components/pageLayouts/TopNavbar";
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
            <main className="font-poppins bg-bg_1 text-text min-h-screen min-w-full">
                <Outlet />
            </main>
                    
        </>
    );
}
