import React  from "react";
import "./XelixNav.css";
import logo from "./images/logo.png";
import avatar from "./images/woman-avatar.png"
import XelixSearch from "./XelixSearch";

export default function Navigation () {
 return(
        <div className="navigation">
          <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
<div className="collapse navbar-collapse" id="navbarSupportedContent">
 <img src={logo} alt="logo" width="130" height="90" className="img-fluid">
      </img>
      <ul className="navbar-nav ms-auto mb-2">
      <img src={avatar} alt="avatar"width="40" height="42"  href="#0" className="profile-image">
      </img>
        <li className="nav-item">
          <button className="nav-link" aria-current="page" href="#0">Home</button> 
        </li>
        <li className="nav-item-2">
          <button className="nav-link">Dashboard</button>
        </li>
        </ul>
</div>
  </div>
</nav>
<h1 className="welcome mt-5">
          Welcome back, Jane👋
            </h1>
< XelixSearch />
        </div>
    )
}