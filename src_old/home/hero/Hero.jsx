import "./hero.css"
import SectionSnap from "../../components/SectionSnap/SectionSnap"
import Navbar from "../../components/navbar/Navbar"
export default function Hero() {
    return (
        <SectionSnap id="hero-outer">
            <Navbar/>
            <div className="hero maxContainer">
                <HeroImage/>
                <HeroRight/>
            </div>
        </SectionSnap>
    )
}

function HeroImage() {
    return (
    <div className="hero-img">
        <img src="/dragon.jpg" />
    </div>
    )
}
function HeroRight() {
    return (
    <div className="hero-intro">
        <h6>👋 Hi&sbquo; I&apos;m</h6>
        <h1 className="intro-name">Harsh Gaur</h1>
        <h2 className="type">I am a Web Developer.....</h2>
        <p>I&#39;m a self-taught web developer, passionate about creating beautiful and functional websites</p>
        <div>
            <a className="theme_btn" href="assets/Harsh-_Resume.pdf" download>
                Download cv <i className="fa-solid fa-download"></i>
            </a>
        </div>
    </div>
    )
}