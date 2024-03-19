import { Section } from "../../components/HTMLComponents/Section";
import { H_3,H_4,H_5,H_6 } from "../../components/HTMLComponents/Headings";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { aboutMeData } from "../../siteDB/SiteData";

function AboutMe_section({main_heading,heading_2,description,projects_completed,ongoing_projects,}) {
	return (
		<div>
			<H_4 className={"text-accent mt-8"}>about me</H_4>
			<div>
				<div>
					<H_5 className={"sm:mt-0"}>{main_heading}</H_5>
					<H_3 className={"sm:mt-0  uppercase "}>{heading_2}</H_3>
				</div>
				<p className="leading-8 max-w-[50ch] text-text/70 font-normal text-lg mb-4 whitespace-pre-line">{description}</p>
				<div className=" grid md:grid-cols-2 gap-4 md:gap-8">
					<div className=" outline-dashed outline-text/10 grid justify-center py-4 md:py-8 grid-cols-[1fr_3fr] gap-2">
						<span className="grid place-content-center text-4xl font-bold">{projects_completed}</span>
						<span className="text-xl">projects <br /> completed</span>
					</div>
					<div className=" outline-dashed outline-text/10 grid justify-center py-4 md:py-8 grid-cols-[1fr_3fr] gap-2">
						<span className="grid place-content-center text-4xl font-bold">{ongoing_projects}</span>
						<span className="text-xl">ongoing <br /> project</span>
					</div>
				</div>
			</div>
		</div>
	);
}

function Experience({experiences}) {
	return (
		<div>
			<H_4 className="text-accent mt-8">EXPERIENCE</H_4>
			<div className=" grid gap-4 ">
				{experiences.map((experience,i) =>(
					<ul key={i} className="p-4 sm:p-6 bg-bg_2/30 outline outline-2 outline-secondary/20  rounded-lg grid ">
						<div>{experience.date}</div>
						<H_6>{experience.jobRole}</H_6>
						<div>{experience.jobDescription}</div>
					</ul>
				))}
			</div>
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
			<H_4 className="text-accent mt-8">skills</H_4>
			<ul className="">
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
