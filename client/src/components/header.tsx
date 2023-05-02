import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authProvider';

const Header = () => {
  const {username, logout} = useContext(AuthContext);
  console.log(username);

  let userButtons;
  if (username!==null) {
    userButtons = 
    <div>
      <Link to={`/user/${username}`}>{username}</Link>
      <a onClick={logout}>logout</a>
    </div>
  } else {
    userButtons = <Link to="/login">Login</Link>
  }
  
  return (
    <div className="header">
      <a href='/'>Social App</a>
      <Link to="/post">Create Post</Link>
      {userButtons}
    </div>
  );
}

export default Header;
