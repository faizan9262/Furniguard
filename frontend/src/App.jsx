import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Layout from "./pages/Layout.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Register from "./pages/Register.jsx";
import Designers from "./pages/Designers.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import DesignerDetail from "./components/DesignerDetail.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import LayoutDetail from "./pages/LayoutDetail.jsx";
import Rooms from "./pages/Rooms.jsx";
import RoomDetail from "./pages/RoomDetail.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products/:category/:id" element={<ProductDetail />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/layout/:id" element={<LayoutDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/designers" element={<Designers />} />
          <Route path="/designers/:id" element={<DesignerDetail />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
