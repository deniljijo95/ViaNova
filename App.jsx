// Root layout for ViaNova website
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Itineraries from './pages/Itineraries';
import Chat from './pages/Chat';
import TripPlanner from './pages/TripPlanner';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800">
        <header className="bg-teal-600 text-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">ViaNova</h1>
            <nav className="space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/itineraries" className="hover:underline">Itineraries</Link>
              <Link to="/chat" className="hover:underline">Chat</Link>
              <Link to="/planner" className="hover:underline">Plan</Link>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/signup" className="hover:underline">Sign Up</Link>
            </nav>
          </div>
        </header>

        <main className="px-4 py-6 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/itineraries" element={<Itineraries />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/planner" element={<TripPlanner />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        <footer className="bg-gray-100 text-center text-sm py-4">
          &copy; 2025 ViaNova. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
