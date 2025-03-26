import './App.css';
import { Routes, Route } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Challenges from './components/Challenges';
import Reviews from './components/Reviews';
import Organizations from './components/Organizations';
import ChallengeDetails from './components/ChallengeDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/challengedetails" element={<ChallengeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
