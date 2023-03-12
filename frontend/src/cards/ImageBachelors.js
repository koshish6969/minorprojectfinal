import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Mycard from "../cards/Mycard.js";
import "./Imagecarousel.css";
import axios from "axios";
import "./Imagecarousel.css";

const Imagecarousel = () => {
  window.scrollTo(0, 0);
  const [apiData, setApiData] = useState([]);
  const location = useLocation();
  const key = new URLSearchParams(location.search).get("key");
  const { slug } = useParams();

  useEffect(() => {
    getData();
  }, []);

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

  const sorting = () => {
    const numAscending = [...apiData].sort((a, b) => a.id - b.id);
    console.log(numAscending);
    setApiData(numAscending);
  };

  return (
    <div className="product-container">
      {apiData.map((book, index) => (
        <Mycard
          userId={book.userId}
          id={book._id}
          name={book.bookname}
          img={book.image}
          author={book.author}
          prices={book.prices}
          s={book.author}
        />
      ))}
    </div>
  );
};

export default Imagecarousel;
