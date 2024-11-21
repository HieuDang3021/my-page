import React from 'react'
import './navbar.css'
import {SidebarData} from './SidebarData'
import potrait from "../assets/images/potrait-image-example.jpg"

function Navbar() {
  return (
    <div className='Sidebar'>
      {/* add image from image folder*/}
      <img className='potrait' src={potrait} alt="Potrait" />
      {/* add title */}
      <p className="SidebarText">Hieu Trung Dang</p>
      <p className="SidebarText">Full-stack developer</p>
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
            <a href={SidebarData.contactme.linkedinLink} target="_blank" rel="noopener noreferrer">
              {SidebarData.contactme.linkedinIcon}
            </a>
            <a href={SidebarData.contactme.facebookLink} target="_blank" rel="noopener noreferrer">
              {SidebarData.contactme.facebookIcon}
            </a>
            <a href={SidebarData.contactme.githubLink} target="_blank" rel="noopener noreferrer">
              {SidebarData.contactme.githubIcon}
            </a>
          </div>
        </div>
    </div>
  )
}

export default Navbar   