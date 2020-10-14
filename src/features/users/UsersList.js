import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react'
import {fetchUsers} from './usersSlice';
import UsersCard from './UserCard';


const UsersList = ({users = []}) => {
  const sortedUsers = users.slice().sort((a, b) => b.registration_timestamp - a.registration_timestamp)
  const content = sortedUsers.map(user => {
    return(
      <div key={user.id} className='col-md-4'>
        <UsersCard user={user} />
      </div>
    )
  })

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  )
}

const UsersListContainer = ({usersPerPage = 6}) => {
  const {data: users, status, nextPageUrl, error} =  useSelector( state => state.app.users );
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(status === 'idle'){
      
      dispatch(fetchUsers())
    }
  }, [status, dispatch, users])

  const showMoreUsersClicked = () => {
    dispatch(fetchUsers(nextPageUrl))
  }

  if(error){
  return <div>{error}</div>
  }

  const button = nextPageUrl ? <button className='btn center' type='button' onClick={showMoreUsersClicked} >Show More</button> : null

  return (
    <div className='users-list'>
      <div className='row justify-content-space-around'>
        <UsersList users={users} />
      </div>
      {button}
    </div>

  )
  
  
}

export default UsersListContainer;

