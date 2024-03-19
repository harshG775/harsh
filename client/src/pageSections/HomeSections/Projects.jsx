import { Section } from "../../components/HTMLComponents/Section";
import { H_3 } from "../../components/HTMLComponents/Headings";
import { projectsData } from "../../siteDB/SiteData";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
function ProjectsCard({data}) {
    return (
		<div className="group relative min-h-[250px] mx-auto bg-bg_2 grid place-items-center overflow-hidden rounded-md">
            <img className="transition-scale duration-1000  group-hover:scale-110  w-full scale-105" src={data.preview} alt={data.title} />
            <Link className="transition-scale duration-300 group-hover:scale-110 bg-bg_2 p-2 absolute top-4 right-4 rounded-full" to={data.projectLink} target="blank">
                <Icon icon="fluent:arrow-up-20-filled" className=" rotate-45 rounded-full text-2xl border-2 border-text"/>
            </Link>
            <div className=" transition-all duration-500 ease-in-out translate-y-28 opacity-0 group-hover:opacity-100  group-hover:translate-y-0 grid grid-rows-[1fr_2fr] p-2 absolute bottom-2 left-2 right-2 rounded-md bg-bg_2">
                <header className="capitalize flex justify-between">
                    <span className="font-bold text-xl">{data.title}</span>
                    <Link className="bg-bg_1 px-2" to={data.projectLink} target="blank">
                        <span>preview</span>
                        {/* <Icon icon="material-symbols:link" className="text-3xl"/> */}
                    </Link>
                </header>
                <p>{data.description}</p>
                
            </div>
		</div>
    );
}


export default function Projects() {
    return (
		<Section id="projects" section_title={<H_3 className={"text-accent md:text-left text-center px-4 xl:px-12"}>projects</H_3>} className={"p-4 xl:p-12"}>
			<ul className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 `}>
                {projectsData.map((projects,i)=>(
                    <li key={projects.title+i}>
                        <ProjectsCard data={projects} />
                    </li>
                ))}
            </ul>
		</Section>
	);
}
