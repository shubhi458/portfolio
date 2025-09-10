'use client'
import ContactPage from "./contact/page";

export default function Home() {
    return (
        <>
            <main>
                <section className="firstSection">
                    <div className="leftSection">
                        <div className="header-text">
                            <p>Full Stack Developer</p>
                            <h1>Hi, I'm Shubhi Saxena from India</h1>
                        </div>
                        <div className="buttons">
                            <a href="Shubhi_Saxena_FSD.pdf" download className="btn">Download Resume</a>
                            <a href="https://github.com/shubhi458" className="btn">Visit Github</a>
                        </div>
                    </div>
                    <div className="rightSection">
                        <img src="./ThirdImage.JPG" />
                    </div>
                </section>
                <hr />
                <section className="secondSection">
                    <span className="text-gray">What I have done so far</span>
                    <h1>Work Experience</h1>
                    <div className="box">
                        <div className="vertical">
                            <img className="image-top" src="./developer.png" alt="" />
                            <div className="vertical-title">
                                Software Engineer 2 - Deltek (May, 2021 to June, 2024)
                            </div>
                            <div className="vertical-desc">
                                Develop new end-to-end user-facing features in a Polaris PSA Product and Polaris PPM Product, leading to higher user retention and satisfaction.
                            </div>
                        </div>
                        <div className="vertical">
                            <img className="image-top" src="./developer.png" alt="" />
                            <div className="vertical-title">
                                Software Engineer - Singsys (Sep, 2020 to Dec, 2020)
                            </div>
                            <div className="vertical-desc">
                                Developed user interfaces based on provided designs, enhancing user experience and boosting customer satisfaction scores.
                            </div>
                        </div>
                        <div className="vertical">
                            <img className="image-top" src="./developer.png" alt="" />
                            <div className="vertical-title">
                                Data Visualization Engineer - Machstatz (June, 2020 to Aug, 2020)
                            </div>
                            <div className="vertical-desc">
                                Contributed to a project as a frontend developer used Angular 9 and React JS during development.
                            </div>
                        </div>
                        <div className="vertical">
                            <img className="image-top" src="./developer.png" alt="" />
                            <div className="vertical-title">
                                Software Development Intern - smartData Enterprises (Jan, 2020 to March, 2020)
                            </div>
                            <div className="vertical-desc">
                                Developed and maintained web applications using Angular and Node.js, Improving user interaction by 25%.
                            </div>
                        </div>
                        <div className="vertical">
                            <img className="image-top" src="./developer.png" alt="" />
                            <div className="vertical-title">
                                Unity Game Developer Intern - Infranix technologies (Apr, 2017 to Apr, 2018)
                            </div>
                            <div className="vertical-desc">
                                Developed 2D games using Unity Game Engine. Used C# programming for game mechanics, UI interactions, and gameplay logic.Developed and published "Amazing smilies" (an endless running 2D game) for PC, mobile (iOS/Android), and web platforms. Designed and implemented game UI/UX, animations, and interactive elements.
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className="footer">
                    <ContactPage />
                </div>
                <div className="footer-rights">
                    Copygright &#169; shubhisportfolio.com | All rights reserved
                </div>
            </footer>
        </>
    );
}
