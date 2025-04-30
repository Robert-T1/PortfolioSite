import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import siteIcon from './assets/images/siteIcon.png'

import About from './pages/about';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Employment from './pages/employment';
import Timeline from './pages/timeline';
import JustKeepDigging from './pages/projectpages/justKeepDigging'; 
import LittleCircuit from './pages/projectpages/littlecircuit';
import ChromaThief from './pages/projectpages/chromathief';
import BankBot from './pages/projectpages/bankbot';
import ClansAndClaims from './pages/projectpages/clansAndClaims';
import JustKeepDiggingBot from './pages/projectpages/justKeepDiggingbot';
import PortfolioSite from './pages/projectpages/portfoliosite';
import GardenGame from './pages/projectpages/gardengame';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        
        <title>Robert Thompson | Portfolio</title>
        <link rel="icon" type="image/png" href={siteIcon} />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/timeline" element={<Timeline />} />

          <Route path="/justkeepdigging" element={<JustKeepDigging />} />
          <Route path="/littlecircuit" element={<LittleCircuit />} />
          <Route path="/chromathief" element={<ChromaThief />} />
          <Route path="/bankbot" element={<BankBot />} />
          <Route path="/clansandclaims" element={<ClansAndClaims />} />
          <Route path="/justkeepdiggingbot" element={<JustKeepDiggingBot />} />
          <Route path="/portfoliosite" element={<PortfolioSite />} />
          <Route path="/gardengame" element={<GardenGame />} />

        </Routes>

        <Footer />
    </Router>
    </>
  )
}

export default App
