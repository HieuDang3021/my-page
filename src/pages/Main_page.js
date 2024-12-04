import React from 'react'
import About from '../components/About';
import Head from '../components/Head';
import Projects from '../components/Projects';

function Main_page() {
  return (
    <div className='main-page'>
        <Head />
        <About />
        <Projects />
    </div>
  )
}

export default Main_page