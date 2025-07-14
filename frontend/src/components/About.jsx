import React from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

const About = () => {
  return (
    <section className='about' id="about">
      <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>The only thing we're serious about is food.</p>
            </div>
            <p className='mid'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius voluptatem ex unde harum cupiditate sed quas molestiae, expedita in veritatis dolorem veniam non similique officia quae ab vitae eum fugiat iste adipisci consectetur exercitationem quibusdam ipsa eligendi. Nam sunt sed dicta praesentium nobis. Culpa maiores velit consectetur? Ratione, expedita. Qui.
            </p>
            <Link to={"/"}>Explore Menu{" "} 
                <span>
                    <HiOutlineArrowNarrowRight />
                </span></Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
