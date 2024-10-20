import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css'
import LandingPage from './pages/landingPage';
import MusicPage from './pages/musicPage';
import TourPage from './pages/tourPage';
import AboutPage from './pages/aboutPage';
import LyricsPage from './pages/lyricsPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/music" element={<MusicPage/>}/>
        <Route path="/tour" element={<TourPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/lyrics" element={<LyricsPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
