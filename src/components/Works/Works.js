import React from 'react'
import * as FaIcons from 'react-icons/fa';
import './Works.css'
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const Works = () => {
    return (
        <IconContext.Provider value={{ className: 'react-icons' }}>
        <div className='works-container'>
            <h1>My Works</h1>
            <div className='works-wrapper'>
                            <div class="portfolio-project">
                                    <div class="portfolio-description">
                                        <h2>CookinSmart</h2>
                                        <p>Creation of an application to help people to cook a recipe with
                                            the remaining ingredients from their fridge or discover new recipes by
                                            categories..</p>
                                            <p>#React, #SASS, #JavaScript, #REST-API, #Responsive</p>
                                        <div class="portfolio-links">
                                            <a href='https://github.com/project2-wildcode/project2' target="_blank" rel="noreferrer" ><FaIcons.FaGithubSquare/></a>
                                            <a href='https://silly-kepler-6d0412.netlify.app/' target="_blank" rel="noreferrer" >CookinSmart</a>
                                        </div>
                                    </div>
                            </div>
                            <div class="portfolio-project">
                                    <div class="portfolio-description">
                                        <h2>Productized Workshop App</h2>
                                        <p>Building of an application to help an event organiser to
                                            manage and create his conference with a third part system (Eventbrite) for
                                            the booking system.
                                        </p>
                                        <p> #Fullstack, #React, #Hooks, #Node.js, #Express, #MySQL</p>
                                        <div class="portfolio-links">
                                            <a href='https://github.com/Productized' target="_blank" rel="noreferrer" ><FaIcons.FaGithubSquare/></a>
                                        </div>
                                    </div>
                            </div>

                            <div class="portfolio-project">
                                    <div class="portfolio-description">
                                        <h2>Styled-component React-app</h2>
                                        <p>Building of a Website of a fictionnal financial company. 
                                        </p>
                                        <p> #Front-end, #React, #Hooks, #Styled-components, #React-router,</p>
                                        <div class="portfolio-links">
                                            <a href='https://github.com/Farbogast/react-website-styled-component 'target="_blank" rel="noreferrer" ><FaIcons.FaGithubSquare/></a>
                                        </div>
                                    </div>
                            </div>
                            <div class="portfolio-project">
                                    <div class="portfolio-description">
                                        <h2>Athrylith Gaming</h2>
                                        <p>Building a website for a french esport team. <br/><b>Work in progress!</b></p>
                                        <p> #React, #Hooks, #Node.js, #Express, #MySQL</p>
                                        <div class="portfolio-links">
                                            <a href='https://github.com/Farbogast/athrylith'target="_blank" rel="noreferrer" ><FaIcons.FaGithubSquare/></a>
                                            <a href='https://athrylith-gaming.netlify.app/'target="_blank" rel="noreferrer">Athrylith Gaming</a>
                                        </div>
                                    </div>
                            </div>
                            <div class="portfolio-project">
                                    <div class="portfolio-description">
                                        <h2>Hackathon Wild Winds</h2>
                                        <p>Travel from your cough – Select a location to have a trip.
                                        </p>
                                        <p>#React, #SASS, #JavaScript, #REST-API, #Responsive</p>
                                        <div class="portfolio-links">
                                            <a href='https://github.com/Productized' target="_blank" rel="noreferrer" ><FaIcons.FaGithubSquare/></a>
                                            <a href='https://hackathon-wildwinds.netlify.app/' target="_blank" rel="noreferrer">Wild Winds</a>
                                        </div>
                                    </div>
                            </div>
                            <div class="portfolio-project">
                                    <div class="portfolio-description">
                                        <h2>Hackathon - Take your pills</h2>
                                        <p>Building a system to notify a customer when he needs to take
                                            his drugs on a regular schedule
                                        </p>
                                        <p> #Fullstack, #React, #Hooks, #Node.js, #Express, #MySQL</p>
                                        <div class="portfolio-links">
                                            <a href='https://github.com/Take-your-Pills/Take-your-pills' target="_blank" rel="noreferrer" ><FaIcons.FaGithubSquare/></a>
                                        </div>
                                    </div>
                            </div>

            </div>
            <div className='next'><Link to='/contact'><button to='/contact' >Contact Me</button></Link></div>
        </div>
        </IconContext.Provider>
    )
}

export default Works
