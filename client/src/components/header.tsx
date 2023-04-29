import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authProvider';

const Header = () => {
  const {username} = useContext(AuthContext);
  console.log(username);
  
  return (
    <div className="header">
      <a href='/'>Social App</a>
      <Link to="/post">Create Post</Link>
      {
      username!==""
      ? <Link to={`/user/${username}`}>{username}</Link>
      : <Link to="/login">Login</Link>
      }
      
    </div>
  );
}

export default Header;
