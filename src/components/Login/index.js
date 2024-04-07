import React, { useState } from 'react';
import './index.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [showSubmitError, setShowSubmitError] = useState(false);

  const onChangeUsername = event => {
    setUsername(event.target.value);
  };

  const onChangeUserPassword = event => {
    setPassword(event.target.value);
  };

  const onSubmit = async event => {
    event.preventDefault();
    if (username === 'trial' && password === 'assignment123') {
    
      window.location.href = '/Home'; 
    } else {
      setErrMsg('Invalid username or password');
      setShowSubmitError(true);
    }
  };

  const onClickSkip = () => {
   
    window.location.href = '/Home'; 
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmit}>
        <img
          src="https://res.cloudinary.com/dwwunc51b/image/upload/v1712389665/1686760204218-removebg-preview_gmygc7.png"
          alt="website logo"
          className="logo"
        />
        <div className="input-container">
          <label htmlFor="username" className="username">
            USERNAME
          </label>
          <input
            type="text"
            value={username}
            placeholder="Username"
            className="username-input"
            id="username"
            onChange={onChangeUsername}
          />
        </div>
        <div className="input-container">
          <label htmlFor="userPassword" className="userPassword">
            PASSWORD
          </label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            className="user-password-input"
            id="userPassword"
            onChange={onChangeUserPassword}
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        <button type="button" className="login-btn" onClick={onClickSkip}>
          Skip
        </button>
        {showSubmitError && <p className="error-msg">*{errMsg}</p>}
      </form>
    </div>
  );
};

export default Login;
