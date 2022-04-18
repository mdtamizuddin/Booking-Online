import React from 'react'
import './About.css'
// import about from '../images/about.png'
const About = () => {
    return (
        <div className='about-page container'>
            <div>
                <img src={'about'} alt="" />
            </div>
            <div className='about-right-side'>
                <h5>Fithness Gym</h5>
                <h1>About Us</h1>

                    <p>
                    I do not know what I may appear to the world, but to myself I seem to have been only like a boy playing on the seashore, and diverting myself in now and then finding a smoother pebble or a prettier shell than ordinary, whilst the great ocean of truth lay all undiscovered before me.
                    Read more at https://www.brainyquote.com/topics/myself-quotes
                    </p>
                <button className='btn btn-primary'>Learn More</button>
            </div>
        </div>
    )
}

export default About