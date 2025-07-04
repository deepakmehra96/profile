'use client'

import React, { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import me1 from "../../images/myPic.png";
import "./homeMain.scss"; // Updated to SCSS
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin.svg";
import medium from "../../images/medium.svg";
import instagram from "../../images/instagram.svg";
import email from "../../images/email.svg";
import projectsSvg from "../../images/projects.svg";
import Projects from '../Projects';
import { FaYoutube } from "react-icons/fa";


const HomeMain: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)

    useEffect(() => {
        if (openModal) {
          document.body.style.overflowY = 'hidden';
        } else {
          document.body.style.overflowY = 'auto';
        }
    
        return () => {
          document.body.style.overflowY = 'auto';
        };
    }, [openModal]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if(window.innerWidth < 1080) return

        const { clientX, clientY } = e;
        console.log(clientX, clientY);
        const width = window.innerWidth;
        const height = window.innerHeight;
        const spreadX = (clientX / width) * 100;
        const spreadY = (clientY / height) * 100;
        console.log(spreadX, spreadY);
     
        document.body.style.background = `radial-gradient(circle at ${spreadX}% ${spreadY}%, #4f7be2ee -100%, #0f172a 10%)`;
        document.body.style.transition = 'background 0.5s ease';
    };
    
    return (
        <Fragment>
            <div  onMouseMove={handleMouseMove}>
                <div className={'container'}>
                    <div className={'leftColumn'}>
                        <div className='responsiveContainer'>
                            <div className={'profileImageOut'}>
                                <Image alt="Profile" src={me1} />
                            </div>

                            <div className={'profileInfo'}>
                                <p className={'nameMain'}>Deepak Mehra</p>
                                <p className={'profileTitle'}>Software Developer</p>
                            </div>
                        </div>
                        <div className='skillContainer'>
                            <div className='skills__skill'>JavaScript</div>
                            <div className='skills__skill'>React JS</div>
                            <div className='skills__skill'>React Native</div>
                            <div className='skills__skill'>Next JS</div>
                            <div className='skills__skill'>Node JS</div>
                            <div className='skills__skill'>Firebase</div>
                            <div className='skills__skill'>Prompt Engineering</div>
                            <div className='skills__skill'>SEO</div>
                            <div className='skills__skill'>AWS</div>
                            <div className='skills__skill'>HTML/CSS</div>
                            <div className='skills__skill'>MongoDB</div>
                            <div className='skills__skill'>Chat App</div>
                            <div className='skills__skill'>Plasmo JS</div>
                            <div className='skills__skill'>Responsive Design</div>
                        </div>

                        <div className={'socialContainer'}>
                            <div className="socialIconsOut">
                                <div className="socialIcons">
                                    <div 
                                        onClick={() => {
                                            window.open('https://twitter.com/imabhi96');
                                        }}
                                    >
                                        <Image alt="twitter" src={twitter} />
                                    </div>
                                </div>
                                <div className="socialIcons">
                                    <div 
                                        onClick={() => window.open("https://www.instagram.com/deepak_kashyap96/", "_blank")}
                                    >
                                        <Image alt="instagram" src={instagram} />
                                    </div>
                                </div>
                                <div className="socialIcons">
                                    <div 
                                        style={{
                                            fontSize: "2.5rem",
                                            marginTop: "-0.1rem",
                                            cursor: "pointer",
                                            color: "#fff",
                                        }}
                                        onClick={() => window.open("https://www.youtube.com/@BuildWithDeep", "_blank")}
                                    >
                                        <FaYoutube />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'rightColumn'}>
                        <div className={'aboutMeSection'}>
                            <h3>About Me</h3>
                            <p>
                                I&apos;m a developer focused on building high-quality, user-friendly interfaces that work smoothly and look great. I&apos;ve helped clients from different regions create digital products that make a real impact and support their business goals. I pay close attention to detail and always prioritize the user experience, making sure each project goes beyond what&apos;s expected. I&apos;m skilled at working with teams and adjusting to client needs to deliver the best results. I&apos;ve had the opportunity to contribute to million-dollar brands, bringing their vision to life and driving growth through effective digital solutions.
                            </p>
                        </div>

                        <div className={'conatactMe'}>
                            <h3>My Work</h3>
                            <p>
                                Here&apos;s a showcase of my work, highlighting impactful solutions and innovative projects.
                            </p>
                            <div className='socialIconsContainer'>
                                <div className='socialIconsProject'
                                    onClick={() => setOpenModal(!openModal)}
                                >
                                    <Image alt="project" src={projectsSvg} />
                                </div>
                            </div>
                        </div>
                
                        <div className={'conatactMe'}>
                            <h3>Check out my blogs and videos</h3>
                            <p>I talk about tech, programming, and more. Feel free to explore my thoughts and learn something new!</p>
                            <div className='socialIconsContainer'>
                                <div className="socialIcons" onClick={() => window.open("https://medium.com/@deepakmehra149", "_blank")}>
                                    <Image alt="medium" src={medium} />
                                </div>
                                <div
                                    style={{
                                        fontSize: "2.5rem",
                                        marginTop: "0.4rem",
                                        cursor: "pointer",
                                        color: "#fff",
                                    }}
                                    onClick={() => window.open("https://www.youtube.com/@BuildWithDeep", "_blank")}
                                >
                                    <FaYoutube />
                                </div>
                            </div>
                        </div>

                        <div className={'conatactMe'}>
                            <h3>Let&apos;s collaborate!</h3>
                            <p>I&apos;d love to hear about your project. Feel free to drop a message at <u>deepakmehra149@gmail.com</u>.</p>
                        <div className='socialIconsContainer'>
                                <div className='socialIcons'
                                    onClick={() => window.open("mailto:deepakmehra149@gmail.com", "_blank")}
                                    title="Email me"
                                >
                                    <Image alt="email" src={email} />
                                </div>
                                <div className="socialIcons"
                                    onClick={() => window.open("https://www.linkedin.com/in/deepakmehra96/", "_blank")}
                                >
                                    <Image alt="linkedin" src={linkedin} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
        </Fragment>
    );
};


export default HomeMain;
