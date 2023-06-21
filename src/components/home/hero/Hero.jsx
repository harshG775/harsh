import "./hero.css"
import Typed from "./type/Typed"


export const Hero = ()=>(<>
    <section className="hero_outer">
        <div className="hero maxContainer">
            <div className="hero_img_outer">
                <div className="hero_Img">
                    <img src="https://tapsi-react.vercel.app/assets/img/home-banner.jpg" alt="title" />
                    <div className="icon1">
                        <svg width="100" height="100" viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.4879 2.72729C18.0681 -8.74866 -8.74539 18.0655 2.73027 44.486L4.62443 48.8556C6.3577 52.8463 7.2521 57.1507 7.2521 61.5015C7.2521 65.8524 6.3577 70.1568 4.62443 74.1475L2.7272 78.5141C-8.74847 104.935 18.065 131.749 44.491 120.273L48.8574 118.375C52.848 116.642 57.1523 115.748 61.5031 115.748C65.8538 115.748 70.1581 116.642 74.1488 118.375L78.5152 120.273C104.932 131.749 131.748 104.935 120.273 78.511L118.376 74.1445C116.642 70.1537 115.748 65.8493 115.748 61.4985C115.748 57.1476 116.642 52.8432 118.376 48.8525L120.273 44.486C131.748 18.0655 104.935 -8.74866 78.5121 2.72729L74.1457 4.62457C70.1551 6.35788 65.8508 7.25231 61.5 7.25231C57.1492 7.25231 52.8449 6.35788 48.8543 4.62457L44.4879 2.72729Z" fill="#9aafef"></path></svg>
                    </div>
                    <div className="icon2">
                        <svg width="100" height="100" viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.4879 2.72729C18.0681 -8.74866 -8.74539 18.0655 2.73027 44.486L4.62443 48.8556C6.3577 52.8463 7.2521 57.1507 7.2521 61.5015C7.2521 65.8524 6.3577 70.1568 4.62443 74.1475L2.7272 78.5141C-8.74847 104.935 18.065 131.749 44.491 120.273L48.8574 118.375C52.848 116.642 57.1523 115.748 61.5031 115.748C65.8538 115.748 70.1581 116.642 74.1488 118.375L78.5152 120.273C104.932 131.749 131.748 104.935 120.273 78.511L118.376 74.1445C116.642 70.1537 115.748 65.8493 115.748 61.4985C115.748 57.1476 116.642 52.8432 118.376 48.8525L120.273 44.486C131.748 18.0655 104.935 -8.74866 78.5121 2.72729L74.1457 4.62457C70.1551 6.35788 65.8508 7.25231 61.5 7.25231C57.1492 7.25231 52.8449 6.35788 48.8543 4.62457L44.4879 2.72729Z" fill="#9aafef"></path></svg>
                    </div>
                </div>
            </div>
            <div className="hero_intro">
                <div className="intro_inner">
                    <h6>👋 Hi&sbquo; I&apos;m</h6>
                    <h1>Harsh <i><img src="https://scontent.fdel8-1.fna.fbcdn.net/v/t1.6435-9/131401583_101605511863038_6328768218145818062_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6DHwjjbc4s8AX9x_ADp&_nc_ht=scontent.fdel8-1.fna&oh=00_AfAh1oDQwYVKZf2lK54no9j7raFYroxdLNsWG_jGyHvleg&oe=64BA4AC2" alt="title" /></i>Gaur</h1>
                    <h2 className="type">I am a <Typed /></h2>
                    <p>We work with professionals and leaders who want to build careers that fulfil them intellectually, financially</p>
                    <div>
                        <a className="theme_btn" href="../../../assets/Harsh-_Resume.pdf" download>
                            Download cv <i className="fa-solid fa-download"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>)
