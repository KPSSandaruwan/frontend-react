import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import { CartProvider } from './utils/cartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes path="/*">
          <Route path="/cart" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
