import React from "react";

const Login = () => {
  return (
    <div className="App">
      <div>
        <form className="form">
          <p>please Login</p>
          <input type="text" placeholder="username" />
          <input
            type="password"
            placeholder="password"
            autoComplete="new-password"
          />
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
