import React, { useEffect, useState } from 'react';
import './home.css';
import { Footer } from './Footer';
import { IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './about.css'

export const About = () => {
  const slides = [
    {
      image: 'https://appliancerepairexpert.ca/wp-content/uploads/2022/02/Hero-img-9-1.jpg',
      text: 'NAME: Manoj' ,
      experience: 'EXPERIENCE: 10 years',
    },
    {
      image: 'https://www.appliancerepairnewberlin.com/wp-content/uploads/2018/08/nb-appliance-repair-main-image.png',
      text: 'NAME: Sarvesh',
      experience: 'EXPERIENCE: 12 years',
    },
    {
      image: 'https://lirp.cdn-website.com/5725e658/dms3rep/multi/opt/ar-11-640w.jpg',
      text: 'NAME: Sarath',
      experience: 'EXPERIENCE: 16 years',
    },
    // Add more slides with image URLs and corresponding text
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Auto slide change after 3 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div>
    <section className="hero-wrap">
            <h1 style={{fontSize:"2.5rem"}}>About Us</h1>
      <div className="paddings innerWidth">
        <div className="flexColStart hero-left">
          <div className='about-title'>
          <p>We, Home Solutions,situated at Chennai,Salem,Trichy provide prompt Our mission is to make a positive impact by delivering reliable and innovative services that exceed expectations.Quality and customer satisfaction are at the core of our service. We use only genuine and manufacturer-approved parts to ensure the longevity and performance of your appliances. Our commitment to excellence extends to our customer service, where we strive to provide personalized attention and effective solutions tailored to your specific needs.</p>
          </div>
      </div>
        <div className="flexCenter hero-right">
          <div className="image-contain">
            <img src="https://media.istockphoto.com/id/614135768/photo/repairman-is-repairing-a-washing-machine-on-the-white-background.jpg?s=612x612&w=0&k=20&c=nKCPfBCkfKEBBKWwK4muG8wdhyJoBRIHlLH6JZEBG6k=" alt="work" />
          </div>
        </div>

      </div>
    </section>
    <section className="hero-tech">
      <div className="paddings flextech">
        <div className="tech-right">
          <div className='tech-title'>
          <h1 style={{fontSize:"3rem",color:"white"}}>Do You Want to Earn With Us? So Don't Be Late</h1>
          <a href='/register'><button style={{paddingLeft:"2rem",paddingRight:"2rem",fontSize:"1rem",borderRadius:"25px"}}>Become a Technician</button></a>
          </div>
      </div>
        {/* <div className="flexCenter tech-left">
          <div className="image-tech">
            <img src="https://media.istockphoto.com/id/614135768/photo/repairman-is-repairing-a-washing-machine-on-the-white-background.jpg?s=612x612&w=0&k=20&c=nKCPfBCkfKEBBKWwK4muG8wdhyJoBRIHlLH6JZEBG6k=" alt="work" />
          </div>
        </div> */}

      </div>
    </section>
    <div className='tech-container'>
      <h2 style={{textAlign:"center",fontSize:"3rem"}}>Our Technician</h2>
    <div className="slider-container">
      <IconButton className="slider-btn prev-btn" onClick={prevSlide}>
        <ArrowBack />
      </IconButton>
      <div className="slide">
        <img src={slides[currentSlide].image} alt={`Slide ${currentSlide + 1}`} />
        <div className="slide-text">
          <span style={{textAlign:"center"}}>{slides[currentSlide].text}</span><br/>
          <span style={{textAlign:"center"}}>{slides[currentSlide].experience}</span>
        </div>
      </div>
      <IconButton className="slider-btn next-btn" onClick={nextSlide}>
        <ArrowForward />
      </IconButton>
    </div>
    </div>
    <Footer/>
    </div>
  );
};
