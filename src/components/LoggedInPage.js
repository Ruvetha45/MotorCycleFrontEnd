import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import './LoggedInPage.css';

function LoggedInPage({ user, setUser, token, setToken, setIsRegistered }) {
 

 
  const onLogout = () => {
    setUser(null);
    setToken(null);
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
    setIsRegistered(true);
  };

  

  return (
    <div>
      <div className='loggedInHeader'>
        <h1 className='loggedInh1'>Motor Cycle Service Center</h1>
        <h2 className='loggedInh2'>Welcome, {user.name}! <button className='logout' onClick={onLogout}>logout</button></h2>
      </div>
  
      
    </div>
  );
  
}

export default LoggedInPage;