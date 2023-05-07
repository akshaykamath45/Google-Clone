import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
 
  //LIVE API CALL 
  const { data } = useGoogleSearch(term);

  console.log(data);
  return (
    <div className="searchPage">
      <h1>This is the Search Page</h1>
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage_results"></div>
    </div>
  );
};

export default SearchPage;
