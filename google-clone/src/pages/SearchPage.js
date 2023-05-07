import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  //LIVE API CALL
    const { data } = useGoogleSearch(term);
   
  //MOCK API CALLS
//   const data = Response;
  console.log(data);
  return (
    <div className="searchPage">
      {/* <h1>This is the Search Page</h1> */}
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://www.google.com/images/branding/
googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="google-logo"
          />
        </Link>
        {/* 
        <h1>{term}</h1> */}
        <div className="searchPage_headerBody">
          <Search hideButtons />
          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/search">All </Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/search">News </Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/search">Images </Link>
              </div>
              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="/search">Shopping </Link>
              </div>
              <div className="searchPage_option">
                <RoomIcon />
                <Link to="/search">Maps </Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/search">More </Link>
              </div>
            </div>
            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                <Link to="/search">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/search">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {true && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            {" "}
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage_result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage_resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt="website-image"
                    />
                  )}
                {item.displayLink}
              </a>

              <a className="searchPage_resultTitle" href={item.title}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
