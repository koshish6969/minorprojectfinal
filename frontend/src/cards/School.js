import "./plustwo.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Mycard from "../cards/Mycard.js";
import "./Imagecarousel.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const School = () => {
  window.scrollTo(0, 0);
  const [apiData, setApiData] = useState([]);
  const location = useLocation();
  const key = new URLSearchParams(location.search).get("key");
  const { slug } = useParams();

  const getData = async () => {
    // const _id = localStorage.getItem("_id");
    console.log(key);
    let result = await fetch(`http://localhost:5000/category/${key}`);
    result = await result.json();
    console.log(result);
    if (result) {
      setApiData(result);
    }
    // setApiData(result.data).then((getData) => {
    //   setApiData(getData.data);
    // });
  };

  const SortingLowest = () => {
    console.log("Hahahaha");
    const numAscending = [...apiData].sort((a, b) => a.prices - b.prices);
    console.log(numAscending);
    setApiData(numAscending);
  };

  const SortingHighest = () => {
    const numDescending = [...apiData].sort((a, b) => b.prices - a.prices);
    console.log(numDescending);
    setApiData(numDescending);
  };

  const SortingAtoZ = () => {
    const strAscending = [...apiData].sort((a, b) =>
      a.bookname > b.bookname ? 1 : -1
    );
    setApiData(strAscending);
  };

  const SortingZtoA = () => {
    const strDescending = [...apiData].sort((a, b) =>
      a.bookname > b.bookname ? -1 : 1
    );
    setApiData(strDescending);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="cat_main_title">
        <h1 className="cat_title">School</h1>
      </div>
      <div className="cat_main">
        <div className="cat">
          <p className="para">Categories</p>
          <hr />
          <ul>
            <li>
              <a href="/plustwoo?key=plustwo">+2</a>
            </li>
            <li>
              <a href="/bachelors?key=bachelors">Bachelors</a>
            </li>
            <li>
              <a href="/entrance?key=entrance">Entrance</a>
            </li>
            <li>
              <a href="/school?key=school">School Books</a>
            </li>
          </ul>
        </div>
        <div className="booklist_wrapper">
          <div className="product-container">
            {apiData.map((book, index) => (
              <Mycard
                userId={book.userId}
                id={book._id}
                name={book.bookname}
                img={book.image}
                author={book.author}
                price={book.prices}
                s={book.username}
              />
            ))}
          </div>
        </div>
        <div className="cat_o">
          <p className="para_o">Filters</p>
          <hr />
          <div className="filter-btn-arrange">
            <button onClick={SortingLowest} className="filter-btn">
              <ArrowRightIcon fontSize="small" /> Price (Lowest)
            </button>
            <button onClick={SortingHighest} className="filter-btn">
              <ArrowRightIcon fontSize="small" /> Price (Highest)
            </button>
            <button onClick={SortingAtoZ} className="filter-btn">
              <ArrowRightIcon fontSize="small" /> Alphabet (A-Z)
            </button>
            <button onClick={SortingZtoA} className="filter-btn">
              <ArrowRightIcon fontSize="small" /> Alphabet (Z-A)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
