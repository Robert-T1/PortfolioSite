import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/about';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Employment from './pages/employment';
import Timeline from './pages/timeline';
import JustKeepDigging from './pages/projectpages/justKeepDigging'; 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/justkeepdigging" element={<JustKeepDigging />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
