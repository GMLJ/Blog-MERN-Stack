import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">REGISTER</span>
      <form className="registerform">
        <label>Username</label>
        <input type="text" placeholder="Enter your username"/>
        <label>Email</label>
        <input type="text" placeholder="Enter your email"/>
        <label>Password</label>
        <input type="password" placeholder="Enter your password"/>
        <button className="registerBtn">Register</button>
      </form>
      <button className="registerLoginBtn">
      <Link to="/login" className="link">LOGIN</Link>
      </button>
    </div>
  )
}
