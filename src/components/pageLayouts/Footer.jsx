import { logo } from "../../siteDB/SiteData";
import { footerData } from "../../siteDB/SiteData";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="bg-bg_2 transition-padding duration-200 ease-in-out sm:pl-12 mt-28 text-text/60">
            <div className="relative bottom-14">
                <Link to="/" className="w-28 h-28 transition-colors text-accent outline outline-[3px] rounded-full flex flex-col items-center justify-center mx-auto mb-4 sm:mb-0 ">
                    <Icon className="text-4xl" icon={footerData.logo.logo}/>
                    <span className="text-text capitalize self-center text-2xl font-semibold whitespace-nowrap">{logo.name}</span>
                </Link>
                <ul className=" relative top-8 flex justify-center gap-4">
                    {footerData.socialLinks.map((link,i)=>(
                        <li key={i} >
                            <Link to={link.linkTo} className={` ${link.color} block outline outline-2 outline-text/40 p-1 rounded-full`}>
                                <span><Icon className={`text-xl `} icon={link.icon}/></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className=" pb-4 lg:pb-6">
                <ul className="flex justify-center gap-2  text-sm font-medium mt-4 capitalize">
                    {footerData.navigationLinks.map((link,i)=>(
                        <li key={link.title+i}>
                            <Link className="hover:underline underline-offset-1 hover:text-accent">{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <hr className="border-text/50 mx-auto my-4 lg:my-6" />
                <span className="block text-sm text-center">
                    {footerData.copyright}
                </span>
            </div>
        </footer>
	);
}
