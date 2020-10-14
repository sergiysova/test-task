import React from 'react';

import CallToAction from './CallToAction';
import image from '../../assets/img/man-laptop-v1.svg';

const DeveloperSection = () => {
  return(
    <div className='developer-section container-fluid'>
      <div className='container'>
        <h2 className='text-center'>
          Let's get acquainted
        </h2>
        <div className='row align-items-center'>
          <div className='col-lg-5'>
            <img src={image} alt='man with laptop' />
          </div>
          <div className='col-lg-7'>
            <h3>I am cool frontend developer</h3>
            <p>
              We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.
              <br />
              <br />
              If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P​SD mockup​ into HTML5/CSS3.  
            </p>
            <CallToAction type='secondary' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default DeveloperSection;