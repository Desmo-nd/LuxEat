import React, { useState, useEffect } from 'react';
import './Home.css';
import TestimonialCarousel from '../Components/Testimonials'

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
                        <img src="./images/book1.svg" alt="location" />
                        <div className="toppa">
                            <p id="locate">Reservation</p>
                            <p id="location">restuarantate@gmail.com</p>
                        </div>
                    </div>
                    <div className="pin">
                        <img src="./images/speed.svg" alt="location" />
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

            <div className="menu">
                <div className="menu-grid">
                    <div className="menu1">
                    <hi id="menu">Menu</hi>
                       <h1 id="try">Try Our Special Dishes</h1>
                       <p id="content2">Every time you perfectly dine with us, it should happy 
                        for great inspired food in an environment designed with individual touches unique to the local area.</p> 
                        <img src="./images/crab.jpg" alt="food" />
                        <div className="See">
                            <p id="see">See all dishes</p>
                        </div>
                    </div>

                    <div className="menu2">
                        <h1 id="starter">Starters</h1>
                        <div className="pin">
                            <img src="./images/glass3.jpg" alt="location" />
                            <div className="toppa">
                                <p id="locate">Raw Scallops from Erquy</p>
                                <p id="location">Shuck the scallop to that used for oysters___$40</p>
                            </div>
                        </div>

                        <div className="pin">
                            <img src="./images/chapps.jpg" alt="location" />
                            <div className="toppa">
                                <p id="locate">Spring Roll</p>
                                <p id="location">Add oil to a hot pan spring onion whites___$20</p>
                            </div>
                        </div>

                        <div className="pin">
                            <img src="./images/egg.jpg" alt="location" />
                            <div className="toppa">
                                <p id="locate">French Onion Soup</p>
                                <p id="location">Wheat flour, apple cider vinegar, bread___$25</p>
                            </div>
                        </div>
                        
                        <div className="pin">
                            <img src="./images/plata3.jpg" alt="location" />
                            <div className="toppa">
                                <p id="locate">Tomato Bruschetta</p>
                                <p id="location">Bread, olive oil, garlic, black pepper___$30</p>
                            </div>
                        </div>

                        <h1 id="starter">Main Dish</h1>
                        <div className="pin">
                            <img src="./images/plata.jpg" alt="location" />
                            <div className="toppa">
                                <p id="locate">Grilled Salmon with Dill Sauce</p>
                                <p id="location">Brown sugar, salmon fillet, Dijon mustard___$40</p>
                            </div>
                        </div>

                        <div className="pin">
                            <img src="./images/plata2.jpg" alt="location" />
                            <div className="toppa">
                                <p id="locate">Roast Beef with Vegetable</p>
                                <p id="location">Green beans, rib eye, olive oil, beef___$20</p>
                            </div>
                        </div>

                        <div className="pin">
                            <img src="./images/plata22.jpg" alt="location" />
                            <div className="toppa">
                                <p id="locate">Marrkesh Vegetetarian Curruy</p>
                                <p id="location">Sweet potato, eggplant, garbanzo bean___$25</p>
                            </div>
                        </div>

                        <div className="pin">
                            <img src="./images/plata11.jpg" alt="location" />
                            <div className="toppa">
                                <p id="locate">Spicy Vegan Potato Curry</p>
                                <p id="location">Coconut milk, beans, potatoes, curry powder___$35</p>
                            </div>
                        </div>

                        <h1 id="starter">Dessert</h1>
                        <div className="pin">
                            <img src="./images/plata4.jpg" alt="location" />
                            <div className="toppa">
                                <p id="locate">Apple Pie with Cream</p>
                                <p id="location">Whipping cream, egg white, cinnamon___$15</p>
                            </div>
                        </div>
                        
                        <div className="pin">
                            <img src="./images/cup1.jpg" alt="location" />
                            <div className="toppa">
                                <p id="locate">Lemon Meringue Pie</p>
                                <p id="location">Frozen pie crust, meringue, lemon___$30</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TestimonialCarousel/>

            <div className='offers'>
                <div className='tittleHead'>
                    <h1 id='Offers'>OFFERS</h1>
                </div>
                <h1 id='offer'>Our Offer Dishes</h1>
                <p id='chefs'>Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now
                    the dishes are in offers use it based on hunger.
                </p>
                <div className='offerGrid'>
                    <div className='Bugger'>
                        <div className='offerpic'>
                            <img src='./images/offer2.svg' alt='offer1' />
                            <div className='KshOffer'>
                                <label id='only'>ONLY</label> <br/>
                                <label id='Kshs'>$ 10</label>
                            </div>
                        </div>
                        <p id='going'>50% OFFER GOING</p>
                        <h1 id='offerName'>Chicken Burger</h1>
                        <p id='offerDec'>Chicken burger with the tasty toppings and leaves.</p>
                        <img src='./images/bugger.png' alt='offer1' />
                    </div>
                    <div className='Pizza'>
                    <div className='offerpic'>
                            <img src='./images/offer1.svg' alt='offer1' />
                            <div className='KshOffer'>
                                <label id='only1'>ONLY</label> <br/>
                                <label id='Kshs1'>$ 9</label>
                            </div>
                        </div>
                        <p id='going'>50% OFFER GOING</p>
                        <h1 id='offerName'>Chicken Pizzae</h1>
                        <p id='offerDec'>Pizza with multiple flavor and the toping are mixed.</p>
                        <img src='./images/pizza.png' alt='offer2' />
                        
                    </div> 
                </div>
            </div>


            <div className='MenuMain'>
                <div className='tittleHead'>
                    <h1 id='Offers'>MENU</h1>
                </div>
                <h1 id='offer'>Popular Dishes</h1>
                <p id='chefs'>There is a game between the waiters in restaurant to see who serves the food to
                    each table fastest. That led to attempting the Guinness Record.
                </p>
                <div className='grid-popular'>
                    <div className='popular'>
                        <div className='popularCard'>
                            <img src='./images/yammy.jpg' alt='kenya'/>
                            <div className='popularContent'>
                                <h1 id='manjoor'>Chicken Manjoori</h1>
                                <h1 id='prize'>$15</h1>
                            </div>
                            <p id='dish'>Dish relished by all age groups as a starter dish at parties.</p>
                        </div>
                    </div>
                    <div className='popular'>
                        <div className='popularCard'>
                            <img src='./images/yammy.jpg' alt='kenya'/>
                            <div className='popularContent'>
                                <h1 id='manjoor'>Chicken Manjoori</h1>
                                <h1 id='prize'>$15</h1>
                            </div>
                            <p id='dish'>Dish relished by all age groups as a starter dish at parties.</p>
                        </div>
                    </div>
                    <div className='popular'>
                        <div className='popularCard'>
                            <img src='./images/yammy.jpg' alt='kenya'/>
                            <div className='popularContent'>
                                <h1 id='manjoor'>Chicken Manjoori</h1>
                                <h1 id='prize'>$15</h1>
                            </div>
                            <p id='dish'>Dish relished by all age groups as a starter dish at parties.</p>
                        </div>
                    </div>
                    <div className='popular'>
                        <div className='popularCard'>
                            <img src='./images/yammy.jpg' alt='kenya'/>
                            <div className='popularContent'>
                                <h1 id='manjoor'>Chicken Manjoori</h1>
                                <h1 id='prize'>$15</h1>
                            </div>
                            <p id='dish'>Dish relished by all age groups as a starter dish at parties.</p>
                        </div>
                    </div>
                </div>
                <div className="See">
                    <p id="see">See all dishes</p>
                </div>
            </div>
        </div>

       
    );
   
};

export default Home;