import React, { useState, useEffect } from 'react'
import './navbar.css'
import {SidebarData} from '../data/SidebarData'
import potrait from "../assets/images/potrait-image-example.jpg"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true); // Hide navbar when scrolling down
        
      } else {
        setIsHidden(false); // Show navbar when scrolling up
      }

      setLastScrollY(currentScrollY); // Update the last scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup event listener on unmount
    };
  }, [lastScrollY]);

  return (
    <div className="Navbar">
    <div className='Sidebar'>
      <div className={`person ${isHidden ? 'hidden' : ''}`}>
        <img className='potrait' src={potrait} alt="Potrait" />
        <p className="SidebarText name">Hieu Trung Dang</p>
        <p className="SidebarText title">Full-stack developer</p>
      </div>
      
      <div className='menu'>
        <a className="MenuButton" onClick={toggleMenu}>
          ☰
        </a>
        <ul 
        // className="SidebarList"
          className={`SidebarList ${isOpen && "menuOpen"}`}
          onClick={() => setIsOpen(false)}
        >
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

  </div>
  )
}

export default Navbar   