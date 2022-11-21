import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/home";
import About from "./components/about";
import Gallery from "./components/gallery";
import { useState } from 'react';


function App() {

  const [isLogin, setIsLogin] = useState(true)




  return (

    <div className="App">

      <ul>
        <li> <Link to={'/'}>Home</Link></li>
        <li> <Link to={'/gallery'}>Gallery</Link></li>
        <li> <Link to={'/about'}>About</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={
          <div>Page not found</div>
        } />
      </Routes>
    </div>
  );
}

export default App;
