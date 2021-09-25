import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">LOGIN</span>
      <form className="loginform">
        <label>Email</label>
        <input type="text" placeholder="Enter your email"/>
        <label>Password</label>
        <input type="password" placeholder="Enter your password"/>
        <button className="loginBtn">Login</button>
      </form>
      <button className="loginRegisterBtn">
        <Link to="/register" className="link">REGISTER</Link>
      </button>

    </div>
  )
}
