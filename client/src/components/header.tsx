import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <a href='/'>Social App</a>
      <Link to="/post">Create Post</Link>
    </div>
  );
}

export default Header;
