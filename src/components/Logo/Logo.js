import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 ">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"><img src="https://www.freeiconspng.com/uploads/brain-2.png" width="350" alt="logo" /></div>
            </Tilt>
        </div>
    );
}

export default Logo;