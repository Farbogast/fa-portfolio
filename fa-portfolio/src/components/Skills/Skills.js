import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as DiIcons from 'react-icons/di';
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import './Skills.css'

const Skills = () => {
    return (
        <IconContext.Provider value={{ className: 'react-icons-skills' }}>
        <div className='skills-container'>
            <h1>My Skills</h1>
            <div className='skills-wrapper'>
                <div className='stack'>
                    <h2 className='title-stack'>Front-end</h2>
                    <div className='stack-list'>
                    <div className='stack-stuff'><FaIcons.FaHtml5/>HTLM5</div>
                    <div className='stack-stuff'><FaIcons.FaCss3Alt/>CSS3-SASS</div>
                    <div className='stack-stuff'><FaIcons.FaBootstrap/>Bootstrap</div>
                    <div className='stack-stuff'><SiIcons.SiStyledComponents/>Styled Component</div>
                    <div className='stack-stuff'><SiIcons.SiJavascript/>JavaScript</div>
                    <div className='stack-stuff'><FaIcons.FaReact/>React(Hooks, Context, Redux)</div>
                    <div className='stack-stuff'><FaIcons.FaDatabase/>REST API</div>
                    </div>
                </div>
                <div className='stack'>
                    <h2 className='title-stack'>Back-end</h2>
                    <div className='stack-list'>
                    <div className='stack-stuff'><FaIcons.FaNodeJs/>Node.js</div>
                    <div className='stack-stuff'><FaIcons.FaServer/>Express</div>
                    <div className='stack-stuff'><SiIcons.SiMysql/>MySQL</div>
                    <div className='stack-stuff'><FiIcons.FiLogIn/>JWT</div>
                    <div className='stack-stuff'><SiIcons.SiMinutemailer/>Node Mailer</div>
                    <div className='stack-stuff'><SiIcons.SiMinutemailer/>Cron Job</div>
                    </div>
                </div>
                <div className='stack'>
                    <h2 className='title-stack'>Workflow</h2>
                    <div className='stack-list'>
                    <div className='stack-stuff'><FaIcons.FaGithubSquare/>Git-Github</div>
                    <div className='stack-stuff'><DiIcons.DiScrum/>Scrum / Agile</div>
                    <div className='stack-stuff'><AiIcons.AiOutlineDeploymentUnit/>Netifly</div>
                    <div className='stack-stuff'><FaIcons.FaFigma/>Figma</div>
                    </div>
                </div>
                <div className='stack'>
                    <h2 className='title-stack'>Currently learning</h2>
                    <div className='stack-list'>
                    <div className='stack-stuff'><SiIcons.SiBulma/>Bulma</div>
                    <div className='stack-stuff'><SiIcons.SiGatsby/>Gatsby</div>
                    <div className='stack-stuff'><SiIcons.SiGraphql/>GraphQL</div>
                    <div className='stack-stuff'><FaIcons.FaDatabase/>MangoDB</div>
                    <div className='stack-stuff'><SiIcons.SiHeroku/>Heroku</div>
                    </div>
                </div>
            </div>
            <div className='next'><Link to='/works'><button to='/works' >My Works</button></Link></div>
        </div>
        </IconContext.Provider>
    )
}

export default Skills
