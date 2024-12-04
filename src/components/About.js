import React from 'react'
import '../style_sheet/about.css'
import profileImage from '../assets/images/potrait-image-example.jpg'

//icon import from material UI
// import PersonPinIcon from '@mui/icons-material/PersonPin';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import StorageIcon from '@mui/icons-material/Storage';

function About() {
  return (
    <section className='about-container' id="about">
        <h2 className='about-title' >About</h2>
        <div className='about-content' >
          <img src={profileImage} className='about-img' alt=''/>
          <ul className='about-items' >
            <li className='about-item'>
              <DeveloperModeIcon className='about-icon' />
              <div>
                <h3>Frontend Developer</h3>
                <p>Specializing in creating dynamic and responsive web applications, 
                  with expertise in modern frameworks like React.</p>
              </div>
            </li>
            <li className='about-item'>
              <StorageIcon className='about-icon' />
              <div>
                <h3>Backend Developer</h3>
                <p>building robust and scalable server-side applications, specializing 
                  in modern frameworks, APIs,and data management.</p>
              </div>
            </li>
          </ul>
        </div>
    </section>
  )
}

export default About;