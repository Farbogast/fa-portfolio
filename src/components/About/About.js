import React from 'react'
import * as CgIcons from 'react-icons/cg';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import me from '../../images/me.JPG'
import './About.css'



const About = () => {
    return (
<IconContext.Provider value={{ className: 'react-icons' }}>
        <div className='about-container'>        
            <h1>About me..</h1>
            <div className='about-wrapper'>
                <div className='about-wrapper-left'> 
                    <div className='img-container'>
                     <img src={me} alt='François'></img>
                    </div>
                    <div className='hobby-list'>
                        <h2>I am</h2>
                        <div className='hobby'><p>Name: François Arbogast</p></div>
                        <div className='hobby'><p>Age: 30</p></div>
                        <div className='hobby'><p>Location: London(UK)</p></div>
                    </div>
                    <div className='hobby-list'>
                        <h2>I like</h2>
                        <div className='hobby'><CgIcons.CgGames/><p > Video Games</p> </div>
                        <div className='hobby'><FaIcons.FaMusic/><p > Music - Bass Guitar</p>  </div>
                        <div className='hobby'><BiIcons.BiFootball/><p >Sports - Football</p>  </div>
                     </div>
                    <div className='hobby-list'>
                     <h2>My Strength</h2>
                        <div className='hobby'><GiIcons.GiEmbrassedEnergy/> <p> Hightly Motivated</p></div>
                        <div className='hobby'><RiIcons.RiTeamLine/> <p> Team Worker</p></div>
                        <div className='hobby'><GiIcons.GiSpeedometer/> <p> Quick Learner</p></div>
                    </div>
                </div>
                <div className='about-wrapper-right'>
                        <h2>A little bit more..</h2>
                        <p>I'm a french Fullstack Softaware Engineer, but not only. I used to be a construction manager for 10 years. I learned a lot from this job. It makes me an Autonomous and Organized Team Worker. 
                            Atfer these years, I wasn't in phase with the 'World' of the construction and the race of 'Build faster and cheaper'. That's why I decided in 2020 to do my professional retraining as a Software Engineer.
                            I successfully ended my Bootcamp at the Wild Code School in August 2020. If you want to learn more about me you can download my resume <Link className='cv' to="/files/CV.pdf" target="_blank" download >here</Link>.
                        </p>
                </div>
                <div className='next'><Link to='/skills'><button to='/skills' >My Skills</button></Link></div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default About
