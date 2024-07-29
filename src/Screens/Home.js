import React from "react";
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <div className="container">
                <div className="logo">
                    <div className="phone">
                        <p id="call">Call - 123-456-7890</p>
                    </div>
                    <div className="LogoImg">
                        <img src="./images/logo.svg" alt="logo" />
                    </div>
                    <div className="Reserv">
                        <p id="reservation">Reservation</p>
                    </div>
                </div>
                <div className="nav">
                    <div className="left">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#menu">Our Menu</a></li>
                            <li><a href="#pages">Pages</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact">Contact</a></li>   
                        </ul>
                    </div>
                    <div className="right">
                        <ul className="right">
                            <li><a href="#login">Login</a></li>
                            <li><a href="#register">Register</a></li>
                        </ul>
                    </div>
                </div>
                <div className="welcome">
                    <p className="top">
                    <label id="welcome2">Welcome to</label><br></br>
                    <label id="enjoy">Restaurant</label>
                    </p>
                    <p id="content">The people, food and the prime locations make the
                         perfect place good friends & family to come together and have great time.
                    </p>
                    <div className="phone">
                        <p id="call">View Menu</p>
                    </div>
                
                    <div className="TopImage">
                        <img src="./images/back.jpeg" alt="food" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;