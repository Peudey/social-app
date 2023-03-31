import React from 'react';
import './styles/App.css';
import Home from './components/home';
import Post from './components/posts/post';
import PostFeed from './components/posts/postFeed';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import CreatePost from './components/posts/createPost';
import User from './components/user';
import Login from './components/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home children={<PostFeed />}/>}></Route>
        <Route path='/post' element={<Home children={<CreatePost />}/>}></Route>
        <Route path='/:subreddit' element={<Home children={<div>subreddit goes here</div>}/>}></Route>
        <Route path='/user/:username' element={<Home children={<User />}/>}></Route>
        <Route path='/login' element={<Home children={<Login />}/>}></Route>
        <Route path='/:subreddit/post/:id' element={<Home children={<Post/>}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
