import { Section } from "../../components/HTMLComponents/Section";
import { H_3,H_4,H_5 } from "../../components/HTMLComponents/Headings";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { aboutMeData } from "../../siteDB/SiteData";

function Contacts({image,contacts}) {
	return (
		<ul className="grid md:grid-cols-2 gap-4">
			<li className=" bg-bg_2/30 md:sticky top-16 max-h-60 outline outline-2 outline-secondary/20 rounded-lg ">
				<Icon className=" text-secondary  hover:text-accent transition-colors  p-12 w-full h-full" icon={image} />
			</li>
			
			<li className="grid gap-4">
				{contacts.map((contact,i) =>(
					<Link target="blank" to={contact.linkTo} key={contact.contactType+i} className=" bg-bg_2/30  transition-colors hover:bg-primary hover:outline-0 outline outline-2 outline-secondary/20  rounded-lg flex items-center gap-2 p-4">
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
        <Section id="about-me" className={" p-4 xl:p-12 grid lg:grid-cols-2 gap-8"}>
            <ul>
				<li className=" sticky top-14">
					<div>
						<H_3 className={"lg:mt-0"}>about me</H_3>
						<div>
							<H_5>my name is harsh</H_5>
							<H_3 className={" uppercase"}>I AM AVAILABLE FOR UI UX DESIGN PROJECTS</H_3>
							<p>Born in 2001,Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, error obcaecati doloremque, in animi accusantium sequi, illum cupiditate quae neque sunt. Enim sunt voluptatum nobis, labore deserunt harum nesciunt laudantium?</p>
							<div className=" grid grid-cols-2">
								<div>projects completed</div>
								<div>ongoing project</div>
							</div>
						</div>
					</div>
					<div>
						<H_4>EXPERIENCE</H_4>
						<ul>
							<div>date/from - date/to</div>
							<div>experience card title</div>

							<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
						</ul>
					</div>
				</li>
            </ul>
            <ul>
                <li className=" lg:sticky top-14 ">
					<Contacts {...aboutMeData.contacts}/>
					<Skills {...aboutMeData.skills}/>
                </li>
            </ul>
        </Section>
	);
}
