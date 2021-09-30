import { useEffect, useState } from "react";
import axios from "axios";

import "./sidebar.css";
import sidebarPic from "./sidebar.jpg";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCategories();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={sidebarPic} alt="working on computer" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid commodi optio mollitia deserunt dolorum corrupti deleniti numquam quidem? Error,
          debitis explicabo. Facilis voluptates est odit, eius nemo nihil ea repudiandae.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?category=${c.name}`}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
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
  );
}
