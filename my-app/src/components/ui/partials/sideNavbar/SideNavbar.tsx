"use client";

import React, { useState } from "react";
import SidebarLinks from "./sidebar/SidebarLinks";
type Props  = React.HtmlHTMLAttributes<HTMLHtmlElement>;
const SidebarLinksData = [
	{
        linkTo: "/home",
		title: "home",
        iconName: "ic:baseline-home",
	},
	{
        linkTo: "/tv",
		title: "Tv Shows",
        iconName: "ic:baseline-home",
	},
	{
        linkTo: "/movie",
		title: "Movies",
        iconName: "ic:baseline-home",
	},
];
export default function SideNavbar({ className }: Props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleCloseSidebar = ()=>{
        setIsSidebarOpen(false);
    }
	return (
        <>
            <aside  className={` ${className} grid grid-rows-[auto,1fr]`} >
                <div>
                    LOGO
                    {/* logo toggleBTN */}
                </div>
                <nav className="overflow-y-auto scrollbar-thin">
                    <SidebarLinks linksData={SidebarLinksData} />
                    {/* user */}
                </nav>
            </aside>
            <div
                className={`sidebar-backdrop ${
                    isSidebarOpen ? "" : " hidden "
                }`}
                onClick={handleCloseSidebar}
            ></div>
        </>
    );
}
