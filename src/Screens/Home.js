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
            <div className="Locate">
                    <div className="grid">
                        <div className="pin">
                            <img src="./images/location.svg" alt="location" />
                            <div className="toppa">
                                <p id="locate">Locate Us</p>
                                <p id="location">Riverside 25, Nairobi, Kenya</p>
                            </div>
                        </div>
                        <div className="pin">
                            <img src="./images/location.svg" alt="location" />
                            <div className="toppa">
                                <p id="locate">Reservation</p>
                                <p id="location">restuarantate@gmail.com</p>
                            </div>
                        </div>
                        <div className="pin">
                            <img src="./images/location.svg" alt="location" />
                            <div className="toppa">
                                <p id="locate">Open hours</p>
                                <p id="location">Mon To Fri 9:00 AM - 9:00 PM</p>
                            </div>
                        </div>

                    </div>
                    <div className="Interior">
                        <img className="story-image" src="./images/seats.jpg" alt="map" />
                    </div>

                    <div className="story">
                        <h1 id="about">The Delicious Story</h1>
                        <p id="content1">The people, food and the prime locations make the perfect
                             place good friends & family to come together and have great time. </p>
                            <div className="grid1">
                                <div className="year1">
                                    <h1 id='year'>2022</h1>
                                    <p id="Plan">Plan for this restaurant to deliver healthy food.</p>
                                </div>
                                <div className="year1">
                                    <h1 id='year'>2024</h1>
                                    <p id="Plan">Happily in the fourth year by fulfilling the motto.</p>
                                </div>
                            </div>

                        <div className="sign">
                            <p id="sign">Desmond</p>
                            <img src="./images/sign.svg" alt="sign" />
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Home;