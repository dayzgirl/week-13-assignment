import React from 'react';
import './Navigation.css'; // Import the CSS file for styling

const Navigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
