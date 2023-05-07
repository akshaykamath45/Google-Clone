import React, { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "7665863670af342e4"; // Replace with your Custom Search Engine ID

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        })
        .catch((error) => {
          console.log("Error fetching search data:", error);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
