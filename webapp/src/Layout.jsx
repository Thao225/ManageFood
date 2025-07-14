import React from "react";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const showToggle = location.pathname === "/home"; // Chỉ hiện ở /about

  const handleToggle = () => {
    alert("Toggled!");
  };

  return (
    <div>
      {showToggle && (
        <button onClick={handleToggle}>Toggle Sidebar</button>
      )}
      <div>{children}</div>
    </div>
  );
}

export default Layout;