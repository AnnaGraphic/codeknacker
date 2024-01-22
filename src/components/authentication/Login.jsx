import {useState} from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleUsernameChange = (e) => {
    setUsername(e.currentTarget.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value)
  }




  return (
    <div className="App">
      <div>
        <form className="form" onSubmit={onSubmit}>
          <p>Please Login !</p>
          <input type="text" placeholder="username" value={username} onChange={handleUsernameChange} />
          <input
            type="password"
            placeholder="password"
            autoComplete="new-password"
            value={password}
            onChange={handlePasswordChange}
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
