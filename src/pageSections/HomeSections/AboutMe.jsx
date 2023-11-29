import { Section } from "../../components/HTMLComponents/Section";
import { H_3,H_4,H_5 } from "../../components/HTMLComponents/Headings";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const aboutMeData = {
	aboutMe: {
		heading_1: "my name is harsh",
		heading_2: "i am a web developer",
		description:
			"This is the first paragraph of the description of the web developer that will be available to you when you start developing your application and will be available to you when you start developing your application and will be available to you when you start developing ",
		projectsCompleted: 5,
		ongoingProjects: 5,
	},
	experience: [
		{
			date: "2023 to present",
			jobRole: "front end developer",
			companyName: "",
			jobDescription:
				"This is the description of your application and will be available to you when you start developing your application and will be available",
		},
		{
			date: "2023 to present",
			jobRole: "front end developer",
			companyName: "",
			jobDescription:
				"This is the description of your application and will be available to you when you start developing your application and will be available",
		},
	],
	contacts: {
		image: "",
		contacts: [
			{
				icon: "phone number icon",
				contactType: "phone number",
			},
			{
				icon: "gmail icon",
				contactType: "gmail",
			},
			{
				icon: "linkedin icon",
				contactType: "linkedin",
			},
			{
				icon: "github icon",
				contactType: "github",
			},
			{
				icon: "resume icon",
				contactType: "resume",
			},
		],
	},
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
				skillLevel: "80%",
				icon: "ri:reactjs-line",
				color: "text-blue-500", // Replace with your preferred color class
			},
			{
				skillName: "tailwind",
				skillLevel: "80%",
				icon: "teenyicons:tailwind-outline",
				color: "text-cyan-500", // Replace with your preferred color class
			},
			{
				skillName: "express js",
				skillLevel: "80%",
				icon: "devicon:express",
				color: "text-green-500", // Replace with your preferred color class
			},
			{
				skillName: "node js",
				skillLevel: "80%",
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
				skillLevel: "80%",
				icon: "devicon-plain:mongodb-wordmark",
				color: "text-green-500", // Replace with your preferred color class
			},
			{
				skillName: "git",
				skillLevel: "80%",
				icon: "raphael:github",
				color: "text-orange-500", // Replace with your preferred color class
			},
			{
				skillName: "github",
				skillLevel: "80%",
				icon: "mdi:github",
				color: "text-gray-500", // Replace with your preferred color class
			},
			{
				skillName: "html",
				skillLevel: "80%",
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
				skillLevel: "80%",
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
};
export default function AboutMe() {
    return (
        <Section id="about-me" className={" p-4 xl:p-12 grid md:grid-cols-2"}>
            <ul>
                <li>
                    <H_3>about me</H_3>
                    <div>
                        <H_5>my name is harsh</H_5>
                        <H_3 className={" uppercase"}>I AM AVAILABLE FOR UI UX DESIGN PROJECTS</H_3>
                        <p>Born in 2001,Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, error obcaecati doloremque, in animi accusantium sequi, illum cupiditate quae neque sunt. Enim sunt voluptatum nobis, labore deserunt harum nesciunt laudantium?</p>
                        <div className=" grid grid-cols-2">
                            <div>projects completed</div>
                            <div>ongoing project</div>
                        </div>
                    </div>
                </li>
                <li>
                    <H_4>EXPERIENCE</H_4>
                    <ul>
                        <div>date/from - date/to</div>
                        <div>experience card title</div>

                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </ul>
                </li>
            </ul>
            <ul>
                <li className=" sticky top-14 ">
                    <div>
                        <ul className="grid md:grid-cols-2">
                            <li>image/icon or graphic</li>
                            <li>
                                <div>
                                    <span>icon </span>
                                    <span>contact</span>
                                </div>
                                <div>
                                    <span>icon </span>
                                    <span>contact</span>
                                </div>
                                <div>
                                    <span>icon </span>
                                    <span>contact</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <H_4>skills</H_4>
                        <ul>
                            {aboutMeData.skills.programmingSKills.map((skill,i) =>(
                                <li key={skill.skillName+i} className="grid grid-cols-1">
                                    <div className="flex gap-3">
                                        <span className={` ${skill.color} text-xl`}><Icon icon={skill.icon}/></span>
                                        <span className={`hover:${skill.color}`}>{skill.skillName}</span>
                                    </div>
                                    <div className="w-full bg-text/20 relative h-1 mt-1 mb-6">
                                        <sup className=" absolute right-0 ml-auto">{skill.skillLevel}</sup>
                                        <div style={{width:skill.skillLevel}} className="h-1 bg-text/80 "></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </Section>
	);
}
