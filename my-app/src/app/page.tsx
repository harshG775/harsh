function HeroSection() {
    return (
        <header>
            <h1>My App</h1>
        </header>
    );
}
function AboutSection() {
    return (
        <header>
            <h1>AboutSection</h1>
        </header>
    );
}
function ProjectsSection() {
    return (
        <header>
            <h1>ProjectsSection</h1>
        </header>
    );
}
function SkillsSection() {
    return (
        <header>
            <h1>SkillsSection</h1>
        </header>
    );
}
function ContactSection() {
    return (
        <header>
            <h1>ContactSection</h1>
        </header>
    );
}

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
