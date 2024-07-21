import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='get-started-title'>Get Started with Bienes</span>
                <span className='secondaryText'>
                    Subscribe and find out about the best apartment suitable for you.
                    <br />
                    Find your perfect home.
                </span>


            <button className="button">
                <a href="mailto:example@gmail.com">Subscribe Now</a>
            </button>
            </div>

        </div>
    </section>
  )
}

export default GetStarted