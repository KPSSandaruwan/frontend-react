import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";

function App() {
  return (
    <Router>
      <Routes path="/*">
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
