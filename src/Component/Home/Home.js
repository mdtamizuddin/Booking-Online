import React from 'react'
import './Home.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <header>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='slider-1 slider'>
            <h1>Enroll With Best Trainer</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider-2 slider'>
        <h1>Enroll With Best Trainer</h1>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider-3 slider'>
        <h1>Enroll With Best Trainer</h1>
        </div>
        </SwiperSlide>
      </Swiper>
      </header>

      <section className='service'>
        <h1>Services</h1>

        <div className='service-container container'>
          <ServiceCard 
          image={'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZW5ndGglMjB0cmFpbmluZ3xlbnwwfHwwfHw%3D&w=1000&q=80'}
          price={1000}
          work={'Grid Training'}
          desc={'Training gives us an outlet for suppressed energies created by stress and thus tones the spirit just as exercise conditions the body'}
          />
          <ServiceCard 
          image={'https://ae01.alicdn.com/kf/HTB1eB9vbVGWBuNjy0Fbq6z4sXXa9/Home-decoration-Bodybuilding-athlete-dumbbells-tattoo-Silk-Fabric-Poster-Print-YR141.jpg_Q90.jpg_.webp'}
          price={800}
          work={'Dumbbelling'}
          desc={'If you must use dumbbells for daily training, use heavy ones with fewer repetitions rather than light bells with numerous repetitions'}
          />
          <ServiceCard 
          image={'https://www.siroko.com/blog/c/app/uploads/2021/07/fitness_21858fa8-864f-404f-9bf5-c2a7d5f72ed7-1440x900.jpg'}
          price={580}
          work={'Cycling GYM'}
          desc={'To keep the body in good health is a duty… otherwise we shall not be able to keep our mind strong and clear'}
          />
        </div>
      </section>
      <section className='contact-with-me'>
        <Link to='/'>Contact Us</Link>
      </section>
    </div>
  )
}

export default Home