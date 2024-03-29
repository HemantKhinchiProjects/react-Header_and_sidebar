import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payment infrastructure for the internet</h1>
          <p>
            Millions of companys of all size-from startups to fortune 500s-use
            Stripe's software and API's to accept payments, send payout, and
            manage their busniess online.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img
            src="https://raw.githubusercontent.com/john-smilga/react-projects/731d90db6cadfaed6510fa7dedf5b531181ceb8a/13-stripe-submenus/setup/src/images/phone.svg"
            className="phone-img"
            alt="phone image"
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;
