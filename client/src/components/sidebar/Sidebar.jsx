import "./sidebar.css"
import sidebarPic from "./sidebar.jpg"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={sidebarPic} alt="working on computer"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid commodi optio mollitia deserunt dolorum corrupti deleniti numquam quidem? Error, debitis explicabo. Facilis voluptates est odit, eius nemo nihil ea repudiandae.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sideIcon fab fa-facebook-square"></i>
        <i className="sideIcon fab fa-instagram"></i>
        <i className="sideIcon fab fa-linkedin"></i>
        <i className="sideIcon fab fa-youtube"></i>
      </div>
      </div>
    </div>
  )
}
