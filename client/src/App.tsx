import React from 'react';
import './styles/App.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/subreddit' element={<div>subreddit goes here</div>}></Route>
        <Route path='/author' element={<div>author goes here</div>}></Route>
        <Route path='/subreddit/post' element={<div>post goes here</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
