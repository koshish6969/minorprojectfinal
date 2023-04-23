import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import banner from "./components/banner.png";
// import Imagecarousel from './Imagecarousel';
import books from "./components/books.png";
import { Link } from "react-router-dom";
import clipart2 from "./components/clipart2.jpg";
import BuyingPage from "./cards/PlusTwo";

import { useRef } from "react";
import "./fullscreensearch.css";

function Home() {
  window.scrollTo(0, 0);
  // This ref will be connected to the overlay div
  const overlayRef = useRef();
 const auth = localStorage.getItem("_id");

  // This function is called when the "Start Searching" button gets clicked
  const openSearch = () => {
    overlayRef.current.style.width = "100%";
  };

  // This function is called when the "Close" button is clicked
  const closeSearch = () => {
    overlayRef.current.style.width = "0%";
  };

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?key=${search}`);
  };

  return (
    <>
      <div className="home">
        <div className="top_banner">
          <h1 className="top_header_main">
            <h1 className="top_header">Online books</h1>
            <p className="top_header_two">made easier</p>
          </h1>
          <img className="home_image" src={clipart2} />
        </div>
        <div className="banner">
          <div className="banner_one">
            <h1 className="cat_name">Buy old books</h1>
            <button onClick={openSearch} className="button_buy">
              Start
            </button>
          </div>

          {/* The search overlay */}
          <div ref={overlayRef} className="fullscreen_overlay">
            <button className="fullscreen_close-button" onClick={closeSearch}>
              &times;
            </button>
            <div className="fullscreen_overlay-content">
              <form onSubmit={handleSubmit}>
                <input
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  id="search"
                  type="search"
                  placeholder="What are you looking for...?"
                  className="fullscreen_search-input"
                ></input>
                <button
                  className="fullscreen_search-button"
                  // onClick={() => navigate(`/search?query=${search}`)}
                >
                  Search
                </button>
                <p className="fullscreen_search-text">
                  Enter your keyword into the search box
                </p>
              </form>
            </div>
          </div>

          <div className="banner_two">
            <h1 className="cat_name">Sell old books</h1>
            {/* <Link to="/addbook">
              {" "}
            </Link> */}

            {auth ? (
              <Link to="/addbook">
                <button className="button_sell">Start</button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="button_sell">Start</button>{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
