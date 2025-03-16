import "./App.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { AuthProvider } from "./utils/authUtils";
import { ThemeProvider } from "./utils/themeContext.js";
import SignUpPage from "./pages/auth/SignUpPage.jsx";
import GameDashboard from "./pages/game/GameDashboard.jsx";
import LogInPage from "./pages/auth/LogInPage.jsx";
import CountDashboard from "./pages/HooksExample/CountDashboard.jsx";
import PostDisplay from "./pages/HooksExample/PostDisplay.jsx";
import ThemeToggler from "./pages/HooksExample/ThemeToggler.jsx";
import InputField from "./pages/HooksExample/InputField.jsx";
import LayoutEffect from "./pages/HooksExample/LayoutEffect.jsx";
import ImperativeHandle from "./pages/HooksExample/ImperativeHandle.jsx";
import RequireAuth from "./pages/auth/RequireAuth.jsx";
import CountWithRedux from "./pages/CountWithRedux.jsx";
import TicTacToe from "./pages/tic-tac-toe-game/TicTacToe.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <AuthProvider>
            <ThemeProvider>
              <Routes>
                <Route path="/auth/signup" element={<SignUpPage />} />
                <Route path="/auth/login" element={<LogInPage />} />
                <Route
                  path="/new/*"
                  element={
                    <RequireAuth>
                      <Routes>
                        <Route
                          path="game-dashboard"
                          element={<GameDashboard />}
                        />
                        <Route path="tic-tac-toe" element={<TicTacToe />} />
                      </Routes>
                    </RequireAuth>
                  }
                />
                <Route path="/count" element={<CountDashboard />} />
                <Route path="/posts" element={<PostDisplay />} />
                <Route path="/theme" element={<ThemeToggler />} />
                <Route path="/input" element={<InputField />} />
                <Route path="/layout" element={<LayoutEffect />} />
                <Route path="/imperial" element={<ImperativeHandle />} />
                <Route path="/count-redux" element={<CountWithRedux />} />
              </Routes>
            </ThemeProvider>
          </AuthProvider>
        </Router>
      </Provider>
    </>
  );
}

export default App;
