import { useEffect} from "react";
import { Outlet, useLocation } from "react-router-dom";
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

            <main className=" bg-bg_1 text-text min-h-screen min-w-full">
                <Outlet />
            </main>
                    
        </>
    );
}
