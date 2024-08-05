import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/AuthReducer/action';
import { useLocation, useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const { isAuth, isLoading } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials, navigate));
  };

  if (isAuth) {
    navigate(location.state?.from || '/');
  }

  return (
    <div style={{
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div style={{
        border: "2px solid black",
        padding: "20px",
        maxWidth: "400px",
        textAlign: "center"
      }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: "center", marginTop: "50px" }}>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email"
            style={{ width: "300px", height: "25px" }}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            style={{ width: "300px", height: "25px" }}

          />
          <button type="submit" disabled={isLoading} style={{ width: "100px", height: "30px" }} >
            {isLoading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
