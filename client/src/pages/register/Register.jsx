import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">REGISTER</span>
      <form className="registerform" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input type="text" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        <button className="registerBtn" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginBtn">
        <Link to="/login" className="link">
          LOGIN
        </Link>
      </button>
      <br />
      {error && <span style={{ color: "red" }}>Sorry, something went wrong.</span>}
      {error && <span style={{ color: "red" }}>Please try another username.</span>}
    </div>
  );
}
