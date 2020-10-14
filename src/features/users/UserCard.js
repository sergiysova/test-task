import React from 'react';


const UsersCard = ({user}) => {
  const {name, email, phone, position, photo} = user;
  
  const nameElement = name.length < 24 ? <h3 className="user-name">{name}</h3> : <h3 className="user-name tooltip-container" data-tooltip={name}>{`${name.substr(0, 16)}...`}</h3>
  const emailElement = email.length < 24 ? <p className="user-email">{email}</p> : <p className="user-email tooltip-container" data-tooltip={email}>{`${email.substr(0,  20)}...`}</p>
  return(
    <div className='user-card text-center'>
      <img className="user-image" src={photo} alt='avatar' />
      {nameElement}
      <p className="user-position">{position}</p>
      {emailElement}
      <p className="user-phone">{phone}</p>

    </div>
  )
}

export default UsersCard;