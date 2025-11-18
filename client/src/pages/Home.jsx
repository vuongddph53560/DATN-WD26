import React from 'react'
import Hero from '../components/Hero'
import FeatureDestination from '../components/FeatureDestination.jsx'
import ExclusiveOffers from '../components/ExclusiveOffers.jsx'
import Testimonial from './../components/Testimonial.jsx';
import NewsLetter from './../components/NewsLetter.jsx';

const Home = () => {
  return (
    <>
      <Hero/>
      <FeatureDestination/>
      <ExclusiveOffers/>
      <Testimonial />
      <NewsLetter />
    </>
  )
}

export default Home
