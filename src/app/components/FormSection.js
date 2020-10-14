import React from 'react';

import RegisterForm from './RegisterForm';

const FormSection = () => {
  return(
    <div id='form-section' className='form-section container-fluid'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6 col-md-8'>
            <h2 className='text-center'>
              Register to get a work
            </h2>
            <p className='text-center'>
              Attention! After successful registration and alert, update the list of users in the block from the top
            </p>
            
            <RegisterForm  />
          </div>
        </div>
        
        
        
      </div>

    </div>
  )
}

export default FormSection;