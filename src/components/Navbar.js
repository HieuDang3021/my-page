import React, { useState } from 'react'
import './navbar.css'
import {SidebarData} from './SidebarData'
import potrait from "../assets/images/potrait-image-example.jpg"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="Navbar">
    <div className='Sidebar'>
      <div className='person'>
        <img className='potrait' src={potrait} alt="Potrait" />
        <p className="SidebarText">Hieu Trung Dang</p>
        <p className="SidebarText">Full-stack developer</p>
      </div>
      
      <ul className='SidebarList'>
        <button className="MenuButton" onClick={toggleMenu}>
          ☰
        </button>
        {SidebarData.pagelink.map((val, key) => {
            return (
                <li 
                  key={key} 
                  className='row'
                  id={window.location.pathname === val.link ? "active" : ""}
                  onClick={() => {window.location.pathname = val.link}}
                >
                    <div id='icon'>{val.icon}</div><div id='title'>{val.title}</div>
                </li>
            );
        })}
      </ul>

      <div className="contact-container">
        <p className='contact-text'>Contact me</p>
          <div className="contact-icons">
          {SidebarData.contactme.map((val, key) => {
              return (
                  <a key={key} href={val.link} target="blank" rel="noopener noreferrer" alt={val.title} >
                  {val.icon}
                  </a>
              );
          })}
          </div>
      </div>
    </div>

  </div>
  )
}

export default Navbar   