import React from 'react'
import '../style_sheet/head.css'
import profileImage from '../assets/images/potrait-image-example.jpg'

function Head() {
  return (
    <section className='head-container'>
        <div className='head-content' >
            <h1 className='head-title' >Hi I'm Hieu</h1>
            <p className='head-description' > I'm a full-stack developer using React.
                Reach out if you'd like to know more!
            </p>
            <a href='mailto:trhieu1247@gmail.com' className='head-contactBtn'>Contact Me</a>
        </div>
        <img src={profileImage} className='head-img' alt=''/>
        <div className='head-topBlur' ></div>
        <div className='head-bottomBlur' ></div>
    </section>
  )
}

export default Head;