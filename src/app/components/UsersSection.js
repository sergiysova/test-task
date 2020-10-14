import React from 'react';

import UsersList from '../../features/users/UsersList';

const UsersSection = () => {
  return(
    <div className='users-section container-fluid'>
      <div className='container'>
        <h2 className='text-center'>
          Our cheerful users
        </h2>
        <p className='text-center'>
          Attention! Sorting users by registration date
        </p>
        
        <UsersList postsPerPage='6' />
        
        
      </div>

    </div>
  )
}

export default UsersSection;