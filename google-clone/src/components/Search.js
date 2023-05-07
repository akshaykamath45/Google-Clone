import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useNavigate();
  const search = (e) => {
    e.preventDefault(); //prevening the refresh on clicking  the search button
    // console.log("you hit the search button");
    if (input.trim() === "") {
      // Handle the error here, such as showing an error message
      window.alert("Please enter a search term.");
      return;
    }
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history(`/search`);
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search_Buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_Buttons">
          <Button
            type="submit"
            variant="outlined"
            onClick={search}
            className="search_ButtonsHidden"
          >
            Google Search
          </Button>
          <Button variant="outlined" className="search_ButtonsHidden">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
