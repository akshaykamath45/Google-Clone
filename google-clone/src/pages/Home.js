import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import Search from "../components/Search";
const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          {/* Link -->About*/}
          <Link to="/">About</Link>
          {/* Link -->Store*/}
          <Link to="/">Store</Link>
        </div>
        <div className="home_headerRight">
          {/* Link -->Gmail*/}
          <Link to="/">Gmail</Link>
          {/* Link -->Images*/}
          <Link to="/">Images</Link>
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
          <Search hideButtons={false}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
