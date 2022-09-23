import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client'

const FooterBanner = ({ footerBanner: {
  discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image 
} }) => {
  return (
    <div className='hero-banner-container footer-banner-container'>
      <div className=''>
        {/* <p className='beats-solo'>{smallText}</p> */}

          {/* <p>{discount}</p> */}
          {/* <h3>{largeText1}</h3> */}
          {/* <h3>{largeText2}</h3> */}
          {/* <p>{saleTime}</p> */}

          <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        </div>
        <img src={urlFor(image)} className='hero-banner-image' />

      </div>
    // </div>
    
  )
}

export default FooterBanner