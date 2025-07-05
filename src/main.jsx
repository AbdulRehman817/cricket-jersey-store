import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "../Layout.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
import Contact from "./pages/Contact.jsx";
import About from "./pages/About";
import OrderConfirmation from "./pages/OrderConfirmation";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        // Protects child routes
        children: [
          { path: "/", element: <Hero /> },
          { path: "/CheckoutPage", element: <Checkout /> },
        ],
      },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/cart", element: <Cart /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/orderconfirmation", element: <OrderConfirmation /> },
      { path: "/teams", element: <Teams /> },
      { path: "/teams/:teamName", element: <TeamShirts /> },
      { path: "*", element: <h1>404 - Not Found</h1> },
    ],
  },
  { path: "/Login", element: <Login /> },
  { path: "/Signup", element: <Signup /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />

//         <div className="flex-1">
//           <Routes>
//             <Route path="/" element={<Hero />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/orderconfirmation" element={<OrderConfirmation />} />
//             <Route path="/teams" element={<Teams />} />
//             <Route path="/teams/:teamName" element={<TeamShirts />} />
//             <Route path="/product/:id" element={<ProductDetails />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/checkout" element={<Checkout />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//           </Routes>
//         </div>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
