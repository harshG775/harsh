import { Link } from "react-router-dom";
import { topNavbarData } from "../../siteDB/SiteData";
import { Icon } from "@iconify/react";
export default function TopNavbar() {
	return (
		<nav className=" sticky top-0 bg-bg_2 p-2 py-3">
			<ul className="flex items-center capitalize container mx-auto font-medium">
				<li>
					<Link className=" transition-colors duration-300 hover:text-accent block p-1" to="/">{topNavbarData.logoName}</Link>
				</li>
				<li className="mx-auto hidden sm:block">
					<ul className="flex gap-2 md:gap-6">
						{topNavbarData.navLinks.map(navLink =>(
							<li key={navLink.title}>
								<Link className=" transition-colors duration-300 hover:text-accent block p-1" to={navLink.linkTo}>{navLink.title}</Link>
							</li>
						))}
					</ul>
				</li>
				<li className="ml-auto">
					<ul className="flex gap-2 md:gap-6">
						{topNavbarData.socialMedia.map(socialMedia =>(
							<li key={socialMedia.title}>
								<Link className={`transition-colors duration-300 hover:text-${socialMedia.iconColor} py-1 flex items-center gap-1`} target="_blank" to={socialMedia.linkTo}>
									<Icon icon={socialMedia.icon} className=" text-xl" />
									<small>{socialMedia.title}</small>
								</Link>
							</li>
						))}
							<li className="sm:hidden flex text-3xl hover:text-accent">
								<button>
									<Icon icon={topNavbarData.menuToggleIcon} />
								</button>
							</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}
