import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom"

import Home from "./components/home"
import About from "./components/about"
import Gallery from "./components/gallery"


function App() {

  return (

    <div className="App">
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
