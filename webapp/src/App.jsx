import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import { useProducts } from "./hooks/useProducts";
import Settings from "./pages/Settings";
import { FaBars} from "react-icons/fa";
import "./App.css";
function App() {
  const [theme, setTheme] = useState("light");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const location = useLocation();
  const layoutVisiblePaths = ["/home", "/products", "/settings"];
  const showLayout = layoutVisiblePaths.includes(location.pathname);

  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  return (
    <div className={`app ${theme}`}>
      {/* <Header toggleTheme={toggleTheme} currentTheme={theme} /> */}
      {showLayout && (
        <FaBars
          className={`toggle-button ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}
          onClick={toggleSidebar}
          title="Thu nhỏ"
        />
      )}
      <div className="container">
        {showLayout && (
          <div className={`left ${isSidebarOpen ? "open" : "closed"}`}>
            <Sidebar toggleTheme={toggleTheme} currentTheme={theme} />
          </div>
        )}
        <div
          className={`right ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"
            }`}
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home products={products} />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/products"
              element={
                <Products
                  products={products}
                  addProduct={addProduct}
                  updateProduct={updateProduct}
                  deleteProduct={deleteProduct}
                />
              }
            />
            {/* <Route path="/statistics" element={<Statistics />} /> */}
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
