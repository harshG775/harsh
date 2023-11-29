const logo={
	logo:"la:dragon",
	name:"harsh"
}
const topNavbarData = {
    socialMedia:[
        {
			title: "github",
            icon:"line-md:github-loop",
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
			title: "about me",
            icon:"mdi:user-outline",
			linkTo: "about-me",
		},
		{
			title: "skills",
            icon:"tabler:briefcase",
			linkTo: "skills",
		},
		{
			title: "projects",
            icon:"charm:layout-stack-v",
			linkTo: "projects",
		},
		{
			title: "contact",
            icon:"ph:phone-bold",
			linkTo: "contact",
		},
	],
};
const footerData = {
	copyright: "© 2023 Harsh | Web Developer",
    socialLinks: [
        {
          icon: "line-md:github-loop",
          linkTo: "https://github.com/harshG775",
          color: "hover:border-purple-600 hover:text-purple-600",
        },
        {
          icon: "line-md:instagram",
          linkTo: "https://www.instagram.com/harsh_l_l/",
          color: "hover:border-pink-600 hover:text-pink-600",
        },
        {
          icon: "line-md:linkedin",
          linkTo: "https://www.linkedin.com/in/harshg775",
          color: "hover:border-blue-600 hover:text-blue-600",
        },
      ],
	contact: {
		email: "your.email@example.com",
		phone: "+1 123-456-7890",
	},
	logo: {
        logo:"la:dragon",
        name:"harsh"
    },
	navigationLinks: [
		{
			title: "about",
			linkTo: "",
		},
		{
			title: "privacy policy",
			linkTo: "",
		},
		{
			title: "licensing",
			linkTo: "",
		},
		{
			title: "contact",
			linkTo: "",
		},
	],
};


const projectsData = [
    {
        preview:"https://tapsi-react.vercel.app/assets/img/project-3.jpg",
        title:"project title",
        projectLink:"",
        description:"Lorem ipsum Lorem ipsum Lorem ipsum"
    },
    {
        preview:"https://tapsi-react.vercel.app/assets/img/project-3.jpg",
        title:"project title",
        projectLink:"",
        description:"Lorem ipsum Lorem ipsum Lorem ipsum"
    },
    {
        preview:"https://tapsi-react.vercel.app/assets/img/project-3.jpg",
        title:"project title",
        projectLink:"",
        description:"Lorem ipsum Lorem ipsum Lorem ipsum"
    },
    {
        preview:"https://tapsi-react.vercel.app/assets/img/project-3.jpg",
        title:"project title",
        projectLink:"",
        description:"Lorem ipsum Lorem ipsum Lorem ipsum"
    },
    {
        preview:"https://tapsi-react.vercel.app/assets/img/project-3.jpg",
        title:"project title",
        projectLink:"",
        description:"Lorem ipsum Lorem ipsum Lorem ipsum"
    },
    {
        preview:"https://tapsi-react.vercel.app/assets/img/project-3.jpg",
        title:"project title",
        projectLink:"",
        description:"Lorem ipsum Lorem ipsum Lorem ipsum"
    },
]
const aboutMeData = {
    aboutMe: {
        heading_1: "Hi, I'm H\u0061rsh!", // Unicode for 'a'
        heading_2: "A Web Developer on a Mission",
        description: `Passionate about transforming ideas into digital 
experiences,I dive into the world of web development with enthusiasm. My journey is marked by a commitment to continuous learning and a knack for turning challenges into opportunities. With a focus on user-centric design and functionality, I bring creativity and precision to every project.`,
        projectsCompleted: projectsData.length,
        ongoingProjects: 5,
    },
	experiences: [
		{
			date: "2023 to present",
			jobRole: "front end developer",
			companyName: "",
			jobDescription:"This is the description of your application and will be available to you when you start developing your application and will be available",
		},
		{
			date: "2023 to present",
			jobRole: "front end developer",
			companyName: "",
			jobDescription:"This is the description of your application and will be available to you when you start developing your application and will be available",
		},
	],
	skills: {
		programmingSKills: [
			{
				skillName: "javascript",
				skillLevel: "80%",
				icon: "ion:logo-javascript",
				color: "text-yellow-500", // Replace with your preferred color class
			},
			{
				skillName: "react",
				skillLevel: "70%",
				icon: "ri:reactjs-line",
				color: "text-blue-500", // Replace with your preferred color class
			},
			{
				skillName: "tailwind",
				skillLevel: "90%",
				icon: "teenyicons:tailwind-outline",
				color: "text-cyan-500", // Replace with your preferred color class
			},
			{
				skillName: "express js",
				skillLevel: "60%",
				icon: "devicon:express",
				color: "text-green-500", // Replace with your preferred color class
			},
			{
				skillName: "node js",
				skillLevel: "60%",
				icon: "logos:nodejs",
				color: "text-green-800", // Replace with your preferred color class
			},
			{
				skillName: "rest-full apis",
				skillLevel: "80%",
				icon: "eos-icons:api-outlined",
				color: "text-purple-500", // Replace with your preferred color class
			},
			{
				skillName: "mongodb",
				skillLevel: "50%",
				icon: "devicon-plain:mongodb-wordmark",
				color: "text-green-500", // Replace with your preferred color class
			},
			{
				skillName: "git",
				skillLevel: "70%",
				icon: "raphael:github",
				color: "text-orange-500", // Replace with your preferred color class
			},
			{
				skillName: "github",
				skillLevel: "90%",
				icon: "mdi:github",
				color: "text-gray-500", // Replace with your preferred color class
			},
			{
				skillName: "html",
				skillLevel: "96%",
				icon: "nonicons:html-16",
				color: "text-red-500", // Replace with your preferred color class
			},
			{
				skillName: "css",
				skillLevel: "80%",
				icon: "bi:filetype-css",
				color: "text-blue-500", // Replace with your preferred color class
			},
			{
				skillName: "bootstrap",
				skillLevel: "70%",
				icon: "ri:bootstrap-line",
				color: "text-purple-500", // Replace with your preferred color class
			},
		],
		softSkills: [
			{
				skillName: "figma",
				skillLevel: "80%",
				icon: "",
				color: "",
			},
		],
	},
	contacts: {
		image: "la:dragon",
		contacts: [
			{
				icon: "ph:phone",
				color: "text-blue-500", // Replace with your preferred color class
				contactType: "phone number",
				linkTo:"tel:9310745921",
			},
			{
				icon: "ic:baseline-whatsapp",
				color: "text-green-500", // Replace with your preferred color class
				contactType: "whatsapp",
				linkTo:"https://wa.me/8588828394",
				
			},
			{
				icon: "basil:gmail-outline",
				color: "text-red-500", // Replace with your preferred color class
				contactType: "gmail",
				linkTo:"mailto:hgaur491@gmail.com",
				
			},
			{
				icon: "mdi:linkedin",
				color: "text-indigo-500", // Replace with your preferred color class
				contactType: "linkedin",
				linkTo:"https://www.linkedin.com/in/harshg775",
			},
			{
				icon: "mdi:github",
				color: "text-gray-500", // Replace with your preferred color class
				contactType: "github",
				linkTo:"https://github.com/harshG775",
			},
			{
				icon: "ph:file-pdf",
				color: "text-red-500", // Replace with your preferred color class
				contactType: "resume",
				linkTo:"/Harsh-_-resume_.pdf",
                download:true,
			},
		],
	},
};

export { topNavbarData,sideNavbarData,logo,  aboutMeData,projectsData,footerData };
