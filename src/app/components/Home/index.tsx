"use client";

import { Fragment, useState } from "react";
import "./homeMain.scss"; // Updated to SCSS
import me1 from "../../images/me1.jpg";
import Image from "next/image";

const MainContainer = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="backGroundDiv">
                    <div className="profileImageOut">
                        <Image alt="Profile" src={me1} />
                    </div>
                </div>
                <div className="mainConatiner">
                    <div className="slide">
                        <p className="nameMain">Deepak Mehra</p>
                        <p className="lessDetails">Software Developer</p>
                    </div>
                    <div className="aboutDetailsOut">
                        <div className="triangle-left"></div>
                        <div className="aboutDetails">
                            <p>Developer</p>
                            <p>Designer</p>
                            <p>Dude</p>
                        </div>
                        <div className="triangle-right"></div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

const MyProfile = () => {
    const [bgStyle, setBgStyle] = useState({
        background: `#0f172a, radial-gradient(circle 100px at ${100}px ${100}px, red 10%, yellow 100%)`,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const x = e.clientX;
        const y = e.clientY;
        const width = window.innerWidth;
        const height = window.innerHeight;
        const spreadX = (x / width) * 100;
        const spreadY = (y / height) * 100;

        setBgStyle({
            background: `#0f172a, radial-gradient(circle 100px at ${spreadX}px ${spreadY}px, red 10%, yellow 100%)`,
        });
    };

    return (
        <div
            className="dynamic-bg-container"
            onMouseMove={handleMouseMove}
            style={bgStyle}
        >
            <MainContainer />
        </div>
    );
};

export default MyProfile;
