import React, { useEffect } from 'react'
import logo from '../assets/images/logo.jpg'
import "../index.css"
import icon from "../assets/images/user-icon.jpg"
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants'

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {

    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser);
        navigate("/")
      }
    });
    //Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [])

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <img className="w-44" src={LOGO} alt="" />

      <div className='flex p-2'>
        <img src={icon} alt="" className="w-10 h-10"/>
        <button onClick={handleSignOut} className='text-bold text-white p-4'>Sign Out</button>
      </div>
    </div>
  )
}

export default Header
