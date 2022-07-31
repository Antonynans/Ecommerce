import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

import { urlFor } from '../lib/client';


const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div className='main-container'>
        <p className='beats-solo'>{heroBanner.smallText}

        </p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        {/* <div className='css_img'>
          <Image src={urlFor(heroBanner.image)} alt="headset" />
        </div> */}
        <img src={urlFor(heroBanner.image)} alt="headphones" className='hero-banner-image' />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
          <button type='button'>{heroBanner.buttonText}</button></Link>
        <div className='"desc'>
          {/* <h5>Description</h5> */}
          <p className='heroBanner_desc'>{heroBanner.desc}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner