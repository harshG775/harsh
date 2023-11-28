const logo={
	logo:"la:dragon",
	name:"harsh"
}
const topNavbarData = {
    socialMedia:[
        {
			title: "github",
            icon:"mdi:github",
            iconColor:"hover:text-purple-600",
			linkTo: "https://github.com/harshG775",
		},
        {
            title: "linkedin",
            icon:"mdi:linkedin",
            iconColor:"hover:text-blue-600",
			linkTo: "https://www.linkedin.com/in/harshg775",
		},
    ],
    menuToggleIcon:"jam:menu"
};
const sideNavbarData = {
	navLinks: [
		{
			title: "home",
            icon:"solar:home-linear",
			linkTo: "home",
		},
		{
			title: "about",
            icon:"mdi:user-outline",
			linkTo: "about",
		},
		{
			title: "services",
            icon:"tabler:briefcase",
			linkTo: "services",
		},
		{
			title: "portfolio",
            icon:"charm:layout-stack-v",
			linkTo: "portfolio",
		},
		{
			title: "contact",
            icon:"ph:phone-bold",
			linkTo: "contact",
		},
	],
};

export { topNavbarData,sideNavbarData,logo };
