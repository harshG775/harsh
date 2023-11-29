import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { sideNavbarData } from "../../siteDB/SiteData";
import { useContext} from "react";
import Context_DB from "../../client_DB/Context_DB";
import ThemeToggle from "../ThemeToggle";
import { Actions } from "../../client_DB/ReducerDB";
export default function SideNavbar() {
    const [state,dispatch]=useContext(Context_DB);
	const handleToggle =()=>{
		dispatch({
			actionType: Actions.SIDEBAR_TOGGLE,
			payload: !state.isSideBarOpen
		})
	}
    return (
        <>
            <nav className={`
                z-40
                ${state.isSideBarOpen?"w-36":"w-0 sm:w-12"} hover:w-36
                transition-width duration-200 ease-in-out overflow-hidden
                fixed top-0 -bottom-14 pt-20 pb-20 pt- left-0 right-auto bg-bg_2/80 backdrop-blur-md
                `}>
                <ul className="p-2 capitalize container font-medium flex flex-col gap-2 h-full">
                    {sideNavbarData.navLinks.map(navLink =>(
                        <li key={navLink.title} className={`${navLink?.linkClassName}`}>
                            <Link className=" whitespace-nowrap flex gap-4 transition-colors duration-300 hover:text-accent p-1" to={`#${navLink.linkTo}`}>
                                <div className=" w-8 h-6 text-2xl"><Icon icon={navLink.icon} /></div>
                                <div className="w-full">{navLink.title}</div>
                            </Link>
                        </li>
                    ))}
                        <li className={`mt-auto`}>
                            <ThemeToggle/>
                        </li>
                </ul>
            </nav>
            <div 
                onClick={handleToggle} 
                className={` 
                ${state.isSideBarOpen?"inset-0":""} fixed bg-bg_2/50 z-30 backdrop-blur-sm
            `}></div>
        </>
	);
}
