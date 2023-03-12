import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "./search.css";
import Mycard from "./cards/Mycard";

const SearchHeaderResult = () => {
  window.scrollTo(0, 0);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();
  const key = new URLSearchParams(location.search).get("key");
  const { slug } = useParams();
  useEffect(() => {
    searchProduct();
  }, []);

  const SortingLowest = () => {
    console.log("Hahahaha");
    const numAscending = [...searchResults].sort((a, b) => a.prices - b.prices);
    console.log(numAscending);
    setSearchResults(numAscending);
  };

  const SortingHighest = () => {
    const numDescending = [...searchResults].sort(
      (a, b) => b.prices - a.prices
    );
    console.log(numDescending);
    setSearchResults(numDescending);
  };

  const SortingAtoZ = () => {
    const strAscending = [...searchResults].sort((a, b) =>
      a.bookname > b.bookname ? 1 : -1
    );
    setSearchResults(strAscending);
  };

  const SortingZtoA = () => {
    const strDescending = [...searchResults].sort((a, b) =>
      a.bookname > b.bookname ? -1 : 1
    );
    setSearchResults(strDescending);
  };

  const searchProduct = async () => {
    console.log(key);
    let result = await fetch(`http://localhost:5000/search/${key}`);
    result = await result.json();
    if (result) {
      setSearchResults(result);
    }
  };

  return (
    <div>
      <div className="cat_main_title">
        <h1 className="cat_titlee">Search Results for : {key} </h1>
      </div>
      <div className="search_container">
        <div className="search_main">
          {searchResults.map((searchResults, index) => (
            <>
              <Mycard
                userId={searchResults.userId}
                name={searchResults.bookname}
                img={searchResults.image}
                seller={searchResults.author}
                price={searchResults.prices}
                s={searchResults.author}
              />
            </>
          ))}
        </div>

        <div className="cat_o_search">
          <p className="para_o_search">Filters</p>
          <hr />
          <button onClick={SortingLowest}>Price (Lowest)</button>
          <button onClick={SortingHighest}>Price (Highest)</button>
          <button onClick={SortingAtoZ}>Alphabet (A-Z)</button>
          <button onClick={SortingZtoA}>Alphabet (Z-A)</button>
        </div>
      </div>
    </div>
  );
};
export default SearchHeaderResult;
