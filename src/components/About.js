import React from 'react'
import '../style_sheet/about.css'
import profileImage from '../assets/images/potrait-image-example.jpg'

function About() {
  return (
    <section className='about-container'>
        <div className='about-content' >
            <h1 className='about-title' >Hi I'm Hieu</h1>
            <p className='about-description' > I'm a full-stack developer using React.
                Reach out if you'd like to know more!
            </p>
            <a href='mailto:trhieu1247@gmail.com' className='about-contactBtn'>Contact Me</a>
        </div>
        <img src={profileImage} className='about-img' alt=''/>
        <div className='about-topBlur' ></div>
        <div className='about-bottomBlur' ></div>
    </section>
  )
}

export default About;