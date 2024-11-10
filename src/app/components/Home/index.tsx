'use client'

import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import me1 from "../../images/myPic.png";
import "./homeMain.scss"; // Updated to SCSS
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin.svg";
import medium from "../../images/medium.svg";
import instagram from "../../images/instagram.svg";
import email from "../../images/email.svg";


const HomeMain: React.FC = () => {
    return (
        <Fragment>
            <div className={'container'}>
                <div className={'leftColumn'}>
                    <div className={'profileImageOut'}>
                        <Image alt="Profile" src={me1} />
                    </div>

                    <div className={'profileInfo'}>
                        <p className={'nameMain'}>Deepak Mehra</p>
                        <p className={'profileTitle'}>Full Stack Developer</p>
                    </div>
                    <div className='skillContainer'>
                        <div className='skills__skill'>JavaScript</div>
                        <div className='skills__skill'>React JS</div>
                        <div className='skills__skill'>React Native</div>
                        <div className='skills__skill'>Next JS</div>
                        <div className='skills__skill'>Node JS</div>
                        <div className='skills__skill'>Firebase</div>
                        <div className='skills__skill'>AWS</div>
                        <div className='skills__skill'>HTML/CSS</div>
                        <div className='skills__skill'>MongoDB</div>
                        <div className='skills__skill'>SEO</div>
                        <div className='skills__skill'>Chat App</div>
                        <div className='skills__skill'>Perfromance</div>
                        <div className='skills__skill'>Plasmo JS</div>
                        <div className='skills__skill'>Responsive Design</div>
                    </div>

                    <div className={'socialContainer'}>
                        <div className="socialIconsOut">
                            <div className="socialIcons">
                                <div 
                                    onClick={() => window.open("https://twitter.com/imabhi96/", "_blank")}
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
                        </div>
                    </div>
                </div>

                <div className={'rightColumn'}>
                    <div className={'aboutMeSection'}>
                        <h3>About Me</h3>
                        <p>
                            I’m a skilled developer with a strong focus on progressive enhancement, design systems, and crafting seamless, high-performance user interfaces. Experienced in delivering robust and visually engaging digital solutions, I've successfully built impactful products for clients across diverse regions, driving their business objectives forward. My approach combines a meticulous attention to detail with a deep commitment to user-centered design, ensuring that each project not only meets but exceeds expectations. With proven experience in collaborating across teams and adapting to client needs, I’m dedicated to creating efficient, scalable, and innovative solutions that stand out.
                        </p>
                    </div>

               
                    <div className={'conatactMe'}>
                        <h3>Check out my blogs</h3>
                        <p>I write about tech, programming, and more. Feel free to explore my thoughts!</p>
                        <div className='socialIconsContainer'>
                            <div className="socialIcons" onClick={() => window.open("https://medium.com/@deepakmehra149", "_blank")}>
                                <Image alt="medium" src={medium} />
                            </div>
                        </div>
                    </div>

                    <div className={'conatactMe'}>
                        <h3>Let's collaborate!</h3>
                        <p>I'd love to hear about your project. Feel free to drop a message.</p>
                       <div className='socialIconsContainer'>
                            <div className='socialIcons'
                                onClick={() => window.open("mailto:deepakmehra149@gmail.com", "_blank")}
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
        </Fragment>
    );
};


export default HomeMain;
