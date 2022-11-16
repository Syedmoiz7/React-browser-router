import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
