import React from 'react'
import './About.css'
const About = () => {
    return (
        <div className='about-page container animate__animated animate__fadeInLeft'>
            <div>
                <img src={'https://i.pinimg.com/originals/61/02/fb/6102fbf3122685f0fea18ec20b6cf515.jpg'} alt="" />
            </div>
            <div className='about-right-side'>
                <h5>Fithness Zone</h5>
                <h1>About Us</h1>

                    <p>
                    You’re going to have to let it hurt. Let it suck. The harder you work, the better you will look. Your appearance isn’t parallel to how heavy you lift, it’s parallel to how hard you work.<br />
                    I will beat her. I will train harder. I will eat cleaner. I know her strengths. I’ve lost to her before but not this time. She is going down. I have the advantage because I know her well. She is the old me
                    
                    </p>
                <button className='btn btn-danger'>Learn More</button>
            </div>
        </div>
    )
}

export default About