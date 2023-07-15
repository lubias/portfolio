import React from 'react'
import './index.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';


function Navbar() {
  return (
    <div className="Navbar">
        <ul className='Navbar__ul'>
            <li className='Navbar__li'><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
            <li className='Navbar__li'><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
            <li className='Navbar__li'><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
        </ul>
        <ul className='Navbar__ul'>
            <li className='Navbar__li'><a href='https://www.linkedin.com/in/luana-beatriz-dos-santos-4095b8107/' target='_blank'><FaLinkedin size={30} className='icones'/></a></li>
            <li className='Navbar__li'><a href='https://github.com/lubias' target='_blank'><FaGithub size={30} className='icones'/></a></li>
        </ul>
    </div>
  )
}

export default Navbar