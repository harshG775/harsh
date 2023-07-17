import "./navbar.css"
import { SideNavbar } from "./sidebar/SideBar"
export const Navbar = ()=>{
    return (<>
    <header className="main_header">
        <div className="main_header_inner maxContainer">
            <a className="logo" href=""><h2>Harsh</h2></a>
            
            <button className="menut"><label htmlFor="menuTG" className="fa-solid fa-grip-lines"></label></button>
        </div>
    </header>
        <SideNavbar/>
</>)}
