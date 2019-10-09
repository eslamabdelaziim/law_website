import React from 'react';
import './App.css';
import "materialize-css"; // It installs the JS asset only
import "materialize-css/dist/css/materialize.min.css";
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Post from './Components/Post';
import Posts from './Components/Posts';
import { BrowserRouter, Route } from "react-router-dom";

const posts = [
  {
    id: 1,
    qs: 'a7a1?',
    ans: 'kosmk',
  },
  {
    id: 2,
    qs: 'a7a1?',
    ans: 'kosmk',
  },
  {
    id: 3,
    qs: 'a7a1?',
    ans: 'kosmk',
  },
  {
    id: 4,
    qs: 'a7a1?',
    ans: 'kosmk',
  },
  {
    id: 5,
    qs: 'a7a1?',
    ans: 'kosmk',
  },
  {
    id: 6,
    qs: 'a7a1?',
    ans: 'kosmk',
  },
  {
    id: 7,
    qs: 'a7a1?',
    ans: 'kosmk',
  },
  {
    id: 8,
    qs: 'a7a1?',
    ans: 'kosmk',
  },
  {
    id: 9,
    qs: 'a7a1?',
    ans: 'kosmk',
  },
  {
    id: 10,
    qs: 'a7a1?',
    ans: 'kosmk',
  },
]
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Route path="/Home" render={props => <Home {...props} />} />
      <Route path="/About" render={props => <About {...props} />} />
      <Route
        path="/Posts"
        render={props => <Posts {...props} posts={posts} />}
      />
      <Route
        path="/Post/:id"
        render={props => <Post {...props} posts={posts} />}
      />
    </BrowserRouter>

  );
}

export default App;
