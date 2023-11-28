const logo="Logo Name"
const topNavbarData = {
	logoName: logo,
	navLinks: [
		{
			title: "home",
			linkTo: "home",
		},
		{
			title: "about",
			linkTo: "about",
		},
		{
			title: "services",
			linkTo: "services",
		},
		{
			title: "portfolio",
			linkTo: "portfolio",
		},
		{
			title: "contact",
			linkTo: "contact",
		},
	],
    socialMedia:[
        {
			title: "github",
            icon:"mdi:github",
            iconColor:"purple-600",
			linkTo: "https://github.com/harshG775",
		},
        {
            title: "linkedin",
            icon:"mdi:linkedin",
            iconColor:"blue-600",
			linkTo: "https://www.linkedin.com/in/harshg775",
		},
    ],
    menuToggleIcon:"jam:menu"
};
const sideNavbarData = {
	logoName: logo,
	navLinks: [
		{
			title: "home",
			linkTo: "home",
		},
		{
			title: "about",
			linkTo: "about",
		},
		{
			title: "services",
			linkTo: "services",
		},
		{
			title: "portfolio",
			linkTo: "portfolio",
		},
		{
			title: "contact",
			linkTo: "contact",
		},
	],
};

export { topNavbarData,sideNavbarData };
