import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Hero from "./pages/Hero";
import Teams from "./pages/Teams";
import TeamShirts from "./pages/TeamShirts";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import OrderConfirmation from "./pages/OrderConfirmation";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/orderconfirmation" element={<OrderConfirmation />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:teamName" element={<TeamShirts />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
