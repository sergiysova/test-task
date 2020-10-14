import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useForm } from 'react-hook-form';

import {fetchPositions} from '../../features/positions/positionsSlice';
import {fetchToken, resetToken} from '../../features/token/tokenSlice';
import {addNewUser, resetUSers} from '../../features/users/usersSlice';
import Modal from './Modal';

const RegisterForm = () =>{

  const dispatch = useDispatch();
  const positions = useSelector(state => state.positions);
  const token = useSelector(state => state.token);
  const formStatus = useSelector(state => state.users.listUpdating);
  const [fileName, setFileName] = useState('Choose file');
  const [popupShown, setPopupShown] = useState(false)

  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange'
  });
  const onSubmit = data =>{
 
    const formData = new FormData();
    for(let key in data){
      
      if(key === 'photo'){
        console.log(key, data[key]);
        formData.append(key, data[key][0])
      }
      formData.append(key, data[key])
    }


    dispatch(addNewUser({
      formData,
      token: token.data
    }))
    
  };

  useEffect(  () => {
    if(formStatus.status === 'succeded'){
      dispatch(resetToken());
      dispatch(resetUSers());
      setPopupShown(true)
    }
    
  },[dispatch, formStatus.status ])

  useEffect(  () => {
    if(token.status === 'idle'){
      dispatch(fetchToken());
    }
    if(positions.status === 'idle'){
      dispatch(fetchPositions());
    }
    
  },[dispatch, positions.status, token.status ])

  const validateFile = (e) => {
    const target = e[0];
    console.log(target)
    if(!target){
      setFileName('Choose file')
      return false;
    }
    const chekSize = target.size < 5242880;
    const chekType = target.type.includes('jpeg')
    console.log(chekSize, chekType)
    if( !(chekSize && chekType)){
      return false;
    }
    setFileName(target.name)
    return true
  }

  if((token.status === "loading" || positions.status === "loading")){
    return <p>Loading...</p>
  }

  if(!(token.status === "succeeded" && positions.status === "succeeded")){
    return <p>somesing went wrong</p>
  }

  const positionsFields = positions.data.map( ({id, name}) => {
    return (

      <div className="custom-control custom-radio" key={id}>
        <input type="radio" className="custom-control-input" name='position_id' id={`position-${id}`} value={id} ref={register({ required: true })}/>
        <label className="custom-control-label" htmlFor={`position-${id}`}>{name}</label>
      </div>
    )
  })

  


  
  return(
    <React.Fragment>
      <form action='' className='form' onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='form-group'>
          <label htmlFor='name' >Name</label>
          <input  type='text'
                  name='name'
                  className={`form-control ${errors['name'] ? 'is-invalid' : null}`}
                  ref={register({
                    required: true,
                    maxLength: 80,
                    minLength: 2
                  })}
                  />
          <div className="invalid-feedback">
            Username should contain 2-60 characters
          </div>
        </div>
    
        <div className='form-group'>
          <label htmlFor='email' >Email</label>
          <input  type='email'
                  name='email'      
                  className={`form-control ${errors['email'] ? 'is-invalid' : null}`}
                  ref={register({
                    required: true,
                    maxLength: 100,
                    minLength: 2,
                    pattern: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
                  })}
                  />
          <div className="invalid-feedback">
          User email, must be a valid email according to RFC2822
          </div>
        </div>
    
        <div className='form-group'>
          <label htmlFor='phone' >Phone</label>
        <input  type='tel'
                name='phone'
                className={`form-control ${errors['phone'] ? 'is-invalid' : null}`}
                ref={register({
                  required: true,
                  pattern: /^[\+]{0,1}380([0-9]{9})$/
                })}
                />
          <div className="invalid-feedback">
            User phone number. Number should start with code of Ukraine +380
          </div>
        </div>

        <div className={`form-group ${errors['position_id'] ? 'invalid-radios' : ''}`}>
        <label >Select Your Position</label>
          {positionsFields}
          <div className="invalid-feedback">
            Select your position
          </div>
        </div>

        <div className='form-group'>
          <label htmlFor='photo' >Photo</label>
          <div className="custom-file">
            <input  type="file" 
                    className={`custom-file-input ${errors['photo'] ? 'is-invalid' : null}`}
                    name="photo"
                    ref={register({
                      required: true,
                      validate: val => validateFile(val)
                    })}
                    />
                    <div className="invalid-feedback">
                      User photo should be jpg/jpeg image, with resolution at least 70x70px and size must not exceed 5MB.
                    </div>
            <label className="custom-file-label" htmlFor="user-photo" >{fileName}</label>
          </div>
          
        </div> 
        <button type='submit' className='btn'>Sign Up Now</button>
      </form>
      <Modal onModalClosed={() => setPopupShown(false)} shown={popupShown} successful={formStatus.result.sucess}/>
    </React.Fragment>
    
  )

}
export default RegisterForm; 
