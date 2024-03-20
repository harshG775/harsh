import HeroSection from "@/components/pagesComponents/HeroSection";
import AboutSection from "@/components/pagesComponents/AboutSection";
import ProjectsSection from "@/components/pagesComponents/ProjectsSection";
import SkillsSection from "@/components/pagesComponents/SkillsSection";
import ContactSection from "@/components/pagesComponents/ContactSection";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
        </main>
    );
}
