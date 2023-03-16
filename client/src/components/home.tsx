import React from 'react';
import Header from './header';

const Home = ({children}:any) => {
  return (
    <div className="App">
        <Header />
      {children}
    </div>
  );
}

export default Home;
