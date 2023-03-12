import React, { useEffect, useState } from "react";
import logo from "../components/logo.png";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link as Link1 } from "react-scroll";
import { Link as Link2, useNavigate } from "react-router-dom";

const Header = () => {
  const auth = localStorage.getItem("_id");
  const userName = localStorage.getItem("username");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  const addSearchData = (e) => {
    navigate(`/search?key=${search}`);
    window.location.reload(true);
  };

  return (
    <div className="header">
      <Link2 to="/">
        {" "}
        <img className="header_logo" src={logo}></img>{" "}
      </Link2>

      <div className="header_option">
        <ul>
          <li>
            <Link1
              to="home"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Home
            </Link1>
          </li>
          <li>
            <Link1
              to="category"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Categories
            </Link1>
          </li>
          <li>
            <Link1
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </Link1>
          </li>
        </ul>
      </div>
      <div className="header_icons">
        <div className="searchIcon_main">
          <input
            id="search"
            type="text"
            className="searchText"
            placeholder="    Type to search.."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>

          <SearchIcon className="header_searchIcon" onClick={addSearchData} />
        </div>
       
        {auth ? (
          <Link2 to="/profile" className="header_profilename">{userName}</Link2>
        ) : (
          <Link2 to="/profile"> </Link2>
        )}

        {auth ? (
          <Link2 onClick={logout} to="/login" className="header_logout">
            {" "}
            <LogoutIcon/>{" "}
          </Link2>
        ) : (
          <Link2 to="/login">
            {" "}
            <PersonIcon className="header_personIcon" />{" "}
          </Link2>
        )}
      </div>
    </div>
  );
};

export default Header;

const addSearchData = () => {
  console.log(document.getElementById("search").value);
};
