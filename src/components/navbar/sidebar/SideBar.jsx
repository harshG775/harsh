import "./sidebar.css"
export const SideNavbar=()=>{
    return(<>
            <input type="checkbox" name="" id="menuTG" />
        <nav className="side_navbar">
            <a className="logo" href=""><h2>Harsh</h2></a>
            <ul>
                <li><a href="#"><i className="fa-solid fa-house active"></i>Home</a></li>
                <li><a href="#"><i className="fa-solid fa-user-large"></i>About</a></li>
                <li><a href="#"><i className="fa-solid fa-briefcase"></i>Services</a></li>
                <li><a href="#"><i className="fa-solid fa-address-card"></i>Portfolio</a></li>
                <li><a href="#"><i className="fa-solid fa-phone"></i>Contact</a></li>
            </ul>
            
            <div className="theme"><i className="fa-solid fa-circle-half-stroke"></i></div>

        </nav>
        
    </>)
}