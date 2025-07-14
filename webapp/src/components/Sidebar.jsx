import React, { useState } from "react";
import {
  FaAppleAlt,
  FaHome,
  FaBell,
  FaChartBar,
  FaCog,
  FaBoxOpen,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { LuRefrigerator } from "react-icons/lu";

const Sidebar = ({ toggleTheme, currentTheme }) => {


  return (
    <div className="sidebar">
      <div className="icon-box top-icon">
          
      </div>
      <nav className="sidebar-menu">
          <NavLink to="/home" className="nav-item">
            <FaHome className="icon" />
            <span className="note-menu">Trang chủ</span>
          </NavLink>
        <NavLink to="/products" className="nav-item">
          <FaBoxOpen className="icon" />
          <span className="note-menu" >Quản lý</span>
        </NavLink>
        <NavLink to="/home" className="nav-item">
          <FaChartBar className="icon" />
          <span className="note-menu" >Thống kê</span>
        </NavLink>
        <NavLink to="/settings" className="nav-item">
          <FaCog className="icon" />
          <span className="note-menu" >Cài đặt</span>
        </NavLink>
        <NavLink to="/home" className="nav-item">
          <FaBell className="icon" />
          <span className="note-menu" >Thông báo</span>
        </NavLink>
        <NavLink to="/login" className="nav-item">
          <FaSignOutAlt className="icon" />
          <span className="note-menu" >Thoát</span>
        </NavLink>
      </nav>
      <div>
        <button onClick={toggleTheme} className="theme-toggle">
          {currentTheme === "light" ?"🌞 Sáng": "🌙 Tối" }
        </button>
      </div>


      {/* <ul className="sidebar-menu">
        <li>
          <div className="icon-box top-icon">
            <FaStore />
          </div>
        </li>
        <li>
          <NavLink to="/" className="nav-item">
            <FaHome className="icon" />
            <span className="note-menu" >Trang chủ</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" className="nav-item">
            <FaBoxOpen className="icon" />
            <span className="note-menu" >Quản lý sản phẩm</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/statistics" className="nav-item">
            <FaChartBar className="icon" />
            <span className="note-menu" >Thống kê</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings" className="nav-item">
            <FaCog className="icon" />
            <span className="note-menu" >Cài đặt</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/logout" className="nav-item">
            <FaSignOutAlt className="icon" />
            <span className="note-menu" >Logout</span>
          </NavLink>
        </li>
        <li>
              <button onClick={toggleTheme} className="theme-toggle">
                      {currentTheme === "light" ? "🌙 Tối" : "🌞 Sáng"}
              </button>
        </li>
      </ul> */}
    </div>
  );
};

export default Sidebar;
