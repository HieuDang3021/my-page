import React, { useState, useEffect } from 'react'
import '../style_sheet/navbar.css'
import {NavbarData} from '../data/NavbarData'
import potrait from "../assets/images/potrait-image-example.jpg"
import { useNavigate } from 'react-router-dom';

function Navbar() {
  /*Navbar menu*/
  const [isOpen, setIsOpen] = useState(false); //state to check open or close navbar menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  /*hide navbar info*/
  const [isHidden, setIsHidden] = useState(false); // hidden state
  const [lastScrollY, setLastScrollY] = useState(window.scrollY); // check for window scroll

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

  /* navigate app */
  const navigate = useNavigate();

  const handleListSelect = (page) => {
    navigate(page);
  }

  return (
    <div className='Sidebar'>
      <div className={`person ${isHidden ? 'hidden' : ''}`}>
        <img className='potrait' src={potrait} alt="Potrait" />
        <p className="SidebarText name">Hieu Trung Dang</p>
        <p className="SidebarText title">Full-stack developer</p>
      </div>
      
      <div className='menu'>
        <button className="MenuButton" onClick={toggleMenu}>
          ☰
        </button>
        <ul 
          className={`SidebarList ${isOpen && "menuOpen"}`}
          onClick={() => setIsOpen(false)}
        >
          {NavbarData.pagelink.map((val, key) => {
              return (
                  <li 
                    key={key} 
                    className='row'
                    id={window.location.pathname === val.link ? "active" : ""}
                    onClick={() => handleListSelect(val.link)}
                  >
                      <div id='icon'>{val.icon}</div><div id='title'>{val.title}</div>
                  </li>
              );
          })}
        </ul>
        <div className="contact-container">
        <p className='contact-text'>Get in touch</p>
          <div className="contact-icons">
          {NavbarData.contactme.map((val, key) => {
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