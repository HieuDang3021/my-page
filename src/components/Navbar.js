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
      <div href="/">
        <img className='potrait' src={potrait} alt="Potrait" />
        <p className="SidebarText">Hieu Trung Dang</p>
        <p className="SidebarText">Full-stack developer</p>
      </div>
      <ul className='SidebarList'>
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
        <p>Contact me</p>
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

    {/* Top bar for mobile */}
    <div className="TopBar">
      <img className="potrait" src={potrait} alt="Portrait" />
      <p className="SidebarText">Hieu Trung Dang</p>
      <p className="SidebarText">Full-stack developer</p>
      <button className="MenuButton" onClick={toggleMenu}>
        ☰
      </button>
    </div>

    {/* Dropdown menu */}
    <div className={`DropdownMenu ${isOpen ? 'show' : ''}`}>
      <ul className="SidebarList">
        {SidebarData.pagelink.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? 'active' : ''}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
      <div className="contact-container">
        <p>Contact me</p>
        <div className="contact-icons">
          <a
            href={SidebarData.contactme.linkedinLink || 'https://www.linkedin.com'}
            target="_blank"
            rel="noopener noreferrer"
          >
            {SidebarData.contactme.linkedinIcon}
          </a>
          <a
            href={SidebarData.contactme.facebookLink || 'https://www.facebook.com'}
            target="_blank"
            rel="noopener noreferrer"
          >
            {SidebarData.contactme.facebookIcon}
          </a>
          <a
            href={SidebarData.contactme.githubLink || 'https://www.github.com'}
            target="_blank"
            rel="noopener noreferrer"
          >
            {SidebarData.contactme.githubIcon}
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar   