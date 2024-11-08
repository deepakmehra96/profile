import React, { useState } from 'react';
import './common.scss'; 

const DynamicBackground = () => {
    const [bgStyle, setBgStyle] = useState({
        background: 'radial-gradient(circle at center, #fff 0%, #f7f7f7 100%)',
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const x = e.clientX;
        const y = e.clientY;
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Calculate distance from the center to determine the spread
        const spreadX = (x / width) * 100;
        const spreadY = (y / height) * 100;

        // Set the desired background color and grow effect
        setBgStyle({
            background: `radial-gradient(circle at ${spreadX}% ${spreadY}%, #ff6347 0%, #87ceeb 100%)`,
        });
    };

    return (
        <div
            className="dynamic-bg-container"
            onMouseMove={handleMouseMove}
            style={bgStyle}
        >
            <h1 className="content">Move your mouse to grow the background</h1>
        </div>
    );
};

export default DynamicBackground;
