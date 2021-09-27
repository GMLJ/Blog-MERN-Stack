import { Link } from "react-router-dom";
import "./topbar.css"
import topbarImg from "./topbar.jpg"


export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
      <i className="topIcon fab fa-facebook-square"></i>
      <i className="topIcon fab fa-instagram"></i>
      <i className="topIcon fab fa-linkedin"></i>
      <i className="topIcon fab fa-youtube"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
          <Link to="/" className="link">HOME</Link>
          </li>
          <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
          <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
          <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
          <li className="topListItem"><Link to="/" className="link">{user && "LOGOUT"}</Link></li>
        </ul>
      </div>
      <div className="topRight">
        { user ? (
        <img className="topImg" src={topbarImg} alt="profile pic"/>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link topListItem">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link topListItem">REGISTER</Link>
            </li>
         
         
          </ul>
        )
        }
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
