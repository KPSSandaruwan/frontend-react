import "./App.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./utils/authUtils";
import SignUpPage from './pages/auth/SignUpPage.jsx';
import GameDashboard from "./pages/game/GameDashboard.jsx";
import LogInPage from "./pages/auth/LogInPage.jsx";
import CountDashboard from "./pages/HooksExample/CountDashboard.jsx";
import PostDisplay from "./pages/HooksExample/PostDisplay.jsx";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/auth/signup" element={<SignUpPage />} />
            <Route path="/auth/login" element={<LogInPage />} />
            <Route path="/game-dashboard" element={<GameDashboard />} />
            <Route path="/count" element={<CountDashboard />} />
            <Route path="/posts" element={<PostDisplay />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
