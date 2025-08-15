
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SfmCash from './components/SfmCash';
import Travel from './components/Travel';
import Tontine from './components/Tontine';
import Widgets from './components/Widgets';
import Chat from './components/Chat';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/cash">SFM Cash</Link> | <Link to="/travel">Travel</Link> | <Link to="/tontine">Tontine</Link> | <Link to="/widgets">Widgets</Link> | <Link to="/chat">Chat</Link> | <Link to="/pricing">Tarifs</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Bienvenue sur SFM</h1>} />
        <Route path="/cash" element={<SfmCash />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/tontine" element={<Tontine />} />
        <Route path="/widgets" element={<Widgets />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}
