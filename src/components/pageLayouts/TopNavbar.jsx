import { Link } from "react-router-dom";
import { topNavbarData } from "../../siteDB/SiteData";
import { Icon } from "@iconify/react";

import { useContext } from "react";
import Context_DB from "../../client_DB/Context_DB";
import { Actions } from "../../client_DB/ReducerDB";

export default function TopNavbar() {
	const [state,dispatch]=useContext(Context_DB)
	const handleToggle =()=>{
		dispatch({
			actionType: Actions.SIDEBAR_TOGGLE,
			payload: !state.isSideBarOpen
		})
	}
	return (
		<nav className=" sticky top-0 bg-bg_2 p-2 py-3">
			<ul className="flex items-center capitalize font-medium">
				<li className={` ${state.isSideBarOpen?"text-accent":""} flex text-3xl hover:text-accent mr-3`}>
					<button onClick={handleToggle}>
						<Icon icon={topNavbarData.menuToggleIcon} />
					</button>
				</li>
				<li>
					<Link className="transition-colors duration-300 hover:text-accent p-1 flex gap-2 flex-nowrap items-center" to="/">
						<Icon className="text-2xl" icon={topNavbarData.logoName} />
						logo name
					</Link>
				</li>
				<li className=" ml-auto">
					<ul className="flex gap-2 md:gap-6">
						{topNavbarData.socialMedia.map(socialMedia =>(
							<li key={socialMedia.title}>
								<Link className={`transition-colors duration-300  ${socialMedia.iconColor} py-1 flex items-center gap-1`} target="_blank" to={socialMedia.linkTo}>
									<Icon icon={socialMedia.icon} className=" text-xl" />
									<small>{socialMedia.title}</small>
								</Link>
							</li>
						))}
					</ul>
				</li>
			</ul>
		</nav>
	);
}
