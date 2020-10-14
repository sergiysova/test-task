import React from 'react';

const CallToAction = ({type = ''}) => {

  return <a href='#form-section' className={`btn ${type}`}>Sign up now</a>
}

export default CallToAction;