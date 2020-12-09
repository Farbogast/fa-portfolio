import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as GrIcons from 'react-icons/gr';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
    return (
        <IconContext.Provider value={{ className: 'react-icons-contact' }}>
        <div className='contact-container'>
            <h1>How to contact me</h1>
            <div className='contact-wrapper'>
                <div className='contact-icon'>
                <div className='icon'><a href='https://www.linkedin.com/in/fran%C3%A7ois-arbogast-8bb67978/' target="_blank" rel="noreferrer"><FaIcons.FaLinkedin/></a></div>
                <div className='icon'><a href='https://github.com/farbogast' target="_blank" rel="noreferrer"><FaIcons.FaGithubSquare/></a></div>
                <div className='icon'><a href='mailto: arbogast.francois@gmail.com' target="_blank" rel="noreferrer"><GrIcons.GrMail/></a></div>
                </div>
            </div>
            <div className='next'><Link to='/'><button to='/works' >Take an another trip?</button></Link></div>
        </div>
        </IconContext.Provider>
    )
}

export default Contact
