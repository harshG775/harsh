import "./about.css"

export default function About() {
  return (
    <>
        <section id="about" className="about_outer">
            <div className="main_about maxContainer">
                <div>
                    <div className="title-01">
                        <span>About Me</span>
                    </div>
                    <div className="about-me-text">
                        <h3>My Name Is Tapsi d ouza</h3>
                        <h5><span>I Am Available</span> For UI UX Design Projects</h5>
                        <p>Born in 2000, AB type living in USA. We provide on-screen design for websites and apps, as well as front-end
                            implementation. We will continue to pursue a wide range of expressions and better code by pursuing our
                            “likes”.</p>
                        <div>
                            <div>
                                <div><span className="count">5k</span>
                                    <div>Projects <br />Completed.</div>
                                </div>
                            </div>
                            <div>
                                <div><span className="count">3k</span>
                                    <div>Satisfied <br />Clients.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="title-01">
                        <span>Experience</span>
                    </div>
                    <div className="resume-box">
                        <ul>
                            <li>
                                <div><i className="fas fa-briefcase"></i></div><span className="time">2019 - Present</span>
                                <h5>Art Director - Facebook Inc</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua.</p>
                            </li>
                            <li>
                                <div><i className="fas fa-briefcase"></i></div><span className="time">2019 - Present</span>
                                <h5>Art Director - Facebook Inc</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua.</p>
                            </li>
                            <li>
                                <div><i className="fas fa-briefcase"></i></div><span className="time">2019 - Present</span>
                                <h5>Art Director - Facebook Inc</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    </>
    )
}


export const Title = (prop)=>{
    return (
    <div className="title-01">
        <span>{prop.children}</span>
    </div>
)}
// export const Title = (prop)=>{
//     return (
//     <div className="title-01">
//         <span>{prop.children}</span>
//     </div>
// )}