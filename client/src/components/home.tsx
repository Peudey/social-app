import React from 'react';
import Header from './header';

const Home = ({children}:any) => {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        {children}
      </div>
    </div>
  );
}

export default Home;
