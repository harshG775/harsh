import { Section } from "../../components/HTMLComponents/Section";
import { H_3,H_4,H_5 } from "../../components/HTMLComponents/Headings";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { aboutMeData } from "../../siteDB/SiteData";

function AboutMe_section({heading_1,heading_2,description,projectsCompleted,ongoingProjects,}) {
	return (
		<div>
			<H_3 className={"lg:mt-0"}>about me</H_3>
			<div className="grid gap-0">
				<H_5 className={"sm:mb-0"}>{heading_1}</H_5>
				<H_3 className={" uppercase "}>{heading_2}</H_3>
				<p className="text-text/70 font-normal text-lg mb-4 whitespace-pre-line">{description}</p>
				<div className=" grid sm:grid-cols-2 gap-2">
					<div className="grid grid-cols-2 sm:grid-cols-1">
						<span className="text-xl">projects completed</span>
						<span className=" text-4xl font-bold">{projectsCompleted}</span>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-1">
						<span className="text-xl">ongoing project</span>
						<span className=" text-4xl font-bold">{ongoingProjects}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

function Experience({experiences}) {
	return (
		<div className="grid gap-4 ">
			<H_4>EXPERIENCE</H_4>
			{experiences.map((experience,i) =>(
				<ul key={i} className="bg-bg_2/30 outline outline-2 outline-secondary/20  rounded-lg p-4 grid ">
					<div>{experience.date}</div>
					<div>{experience.jobRole}</div>
					<div>{experience.jobDescription}</div>
				</ul>
			))}
		</div>
	);
}


function Contacts({image,contacts}) {
	return (
		<ul className="grid md:grid-cols-2 gap-4">
			<li className=" bg-bg_2/30 md:sticky top-16 max-h-60 outline outline-2 outline-secondary/20 rounded-lg ">
				<Icon className=" text-secondary  hover:text-accent transition-colors  p-12 w-full h-full" icon={image} />
			</li>
			
			<li className="grid gap-4">
				{contacts.map((contact,i) =>(
					<Link target="blank" to={contact.linkTo} key={contact.contactType+i} className=" whitespace-nowrap bg-bg_2/30  transition-colors hover:bg-primary hover:outline-0 outline outline-2 outline-secondary/20  rounded-lg flex items-center gap-2 p-4">
						<span className={`${contact.color} bg-bg_2 rounded-full p-2 text-2xl`}><Icon icon={contact.icon} /></span>
						<span className="flex gap-2">
							<span>{contact.contactType}</span>
							<Icon icon={"ph:link"} />
						</span>
					</Link>
				))}
			</li>
		</ul>
	);
}

function Skills({programmingSKills}) {
	return (
		<div>
			<H_4>skills</H_4>
			<ul>
				{programmingSKills.map((skill,i) =>(
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
	);
	
}


export default function AboutMe() {
    return (
        <Section id="about-me" className={" p-4 xl:p-12 grid lg:grid-cols-2 gap-4"}>
			<ul>
				<div className=" lg:sticky top-14 py-4">
					<AboutMe_section {...aboutMeData.aboutMe}/>
					<Experience experiences={aboutMeData.experiences}/>
				</div>
			</ul>
			<ul>
				<div className=" lg:sticky top-14 py-4">
					<Contacts {...aboutMeData.contacts}/>
					<Skills {...aboutMeData.skills}/>
				</div>
			</ul>
        </Section>
	);
}
