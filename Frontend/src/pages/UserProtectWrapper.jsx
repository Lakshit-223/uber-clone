import React, {useContext} from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'



const UserProtectWrapper = ({children}) => {

  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  
  if(!token){
    navigate(`${import.meta.env.VITE_BASE_URL}/users/login`);
    return null;  // Prevent rendering the children if user is not authenticated.
  }
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper