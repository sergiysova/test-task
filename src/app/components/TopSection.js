import React from 'react';

import CallToAction from './CallToAction';

const TopSection = () => {
  return(
    <div className='top-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7'>
            <h1>Test assignment for Frontend Developer position</h1>
            <p className='subtitle'>
              We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens
            </p>
            <CallToAction />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default TopSection;