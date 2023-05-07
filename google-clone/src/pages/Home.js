import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import Search from "./Search";
const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          {/* Link -->About*/}
          <Link to="/about">About</Link>
          {/* Link -->Store*/}
          <Link to="/store">Store</Link>
        </div>
        <div className="home_headerRight">
          {/* Link -->Gmail*/}
          <Link to="/gmail">Gmail</Link>
          {/* Link -->Images*/}
          <Link to="/images">Images</Link>
          {/* Icon */}
          <AppsIcon />
          {/* Avatar */}
          <Avatar />
        </div>
      </div>
      <div className="home_body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google-logo"
        />
        <div className="home_inputContainer">
          {/* Search */}
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
