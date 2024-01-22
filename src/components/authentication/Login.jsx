import React from "react";

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <div>
        <form className="form" onSubmit={onSubmit}>
          <p>Please Login !</p>
          <input type="text" placeholder="username" />
          <input
            type="password"
            placeholder="password"
            autoComplete="new-password"
          />
          <button className="submit" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
