import React from 'react';
import './styles/App.css';
import Home from './components/home';
import Post from './components/post';
import PostFeed from './components/postFeed';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home children={<PostFeed />}/>}></Route>
        <Route path='/:subreddit' element={<Home children={<div>subreddit goes here</div>}/>}></Route>
        <Route path='/author' element={<Home children={<div>author goes here</div>}/>}></Route>
        <Route path='/:subreddit/post/:id' element={<Home children={<Post/>}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
