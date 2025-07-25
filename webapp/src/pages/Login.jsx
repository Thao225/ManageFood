import { useState } from 'react';
import './Login.css'; // Import CSS riêng
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });

  };

  return (
    <div className="body flex">
      <div className="login-container">
        <div className="slogan">Nhận diện nhanh – Nhắc hạn kịp thời.<br />Quản lý thực phẩm chưa bao giờ dễ đến thế.</div>
        <div className="flex">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="login-title">Đăng nhập ngay tại đây.</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input"
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input"
            />
            <NavLink to="/home">
              <button type="submit" className="login-button">Đăng nhập</button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
