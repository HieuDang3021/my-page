import React from 'react'
import '../style_sheet/about.css'
import profileImage from '../assets/images/potrait-image-example.jpg'

//icon import from material UI
import PersonPinIcon from '@mui/icons-material/PersonPin';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

function About() {
  return (
    <section className='about-container' id="about">
        <h2 className='about-title' >About</h2>
        <div className='about-content' >
          <img src={profileImage} className='about-img' alt=''/>
          <ul className='about-items' >
            <li className='about-item'>
              <i className='about-img'><DeveloperModeIcon/></i>
              <div>
                <h3>Frontend Developer</h3>
                <p>Specializing in creating dynamic and responsive web applications, 
                  with expertise in modern frameworks like React and a passion for 
                  delivering exceptional user experiences.</p>
              </div>
            </li>
          </ul>
        </div>
    </section>
  )
}

export default About;