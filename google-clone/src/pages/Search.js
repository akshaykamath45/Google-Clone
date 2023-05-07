import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Search = ({hideButtons=false}) => {
  const [input, setInput] = useState("");
  const history = useNavigate();
  const search = (e) => {
    e.preventDefault(); //prevening the refresh on clicking  the search button
    // console.log("you hit the search button");
    history(`/search`);
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {
        !hideButtons?(
            <div className="search_Buttons">
            <Button type="submit" variant="outlined" onClick={search}>
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>

        ) : (
            <div className="search_Buttons">
            <Button type="submit" variant="outlined" onClick={search} className="search_ButtonsHidden">
              Google Search
            </Button>
            <Button variant="outlined" className="search_ButtonsHidden">I'm Feeling Lucky</Button>
          </div>
        )
      }
    
    </form>
  );
};

export default Search;
