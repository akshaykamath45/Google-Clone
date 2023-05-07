import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
const Search = () => {
  const [input, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();
    // console.log("you hit the search button",input);
  };

  return (
    <div className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input valye={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      <div className="search_Buttons">
        <Button variant="outlined">Google Search</Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </div>
  );
};

export default Search;
