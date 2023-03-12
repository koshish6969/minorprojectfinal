import React from "react";
import "./Category.css";
import { Link, useNavigate } from "react-router-dom";
import plustwo from "./cards/PlusTwo";
import books from "./components/books.png";
import clipart1 from "./components/clipart1.jpg";
import clipart3 from "./components/clipart3.jpg";
import clipart4 from "./components/clipart4.jpg";
import clipart5 from "./components/clipart5.jpg";

const Category = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();

  const BachelorsCat = () => {
    navigate(`/bachelors?key=bachelors`);
  };
  const PlusTwoCat = () => {
    navigate(`/plustwoo?key=plustwo`);
  };
  const EntranceCat = () => {
    navigate(`/entrance?key=entrance`);
  };
  const SchoolCat = () => {
    navigate(`/school?key=school`);
  };

  // const BachelorsCat = () => {
  //   navigate(`/bachelors?key=bachelors`);

  //   const BachelorsCat = () => {
  //     navigate(`/bachelors?key=bachelors`);

  //     const BachelorsCat = () => {
  //       navigate(`/bachelors?key=bachelors`);

  // navigate({
  //   pathname: "/bachelors",
  //   search: `?key=bachelors`,
  // });

  return (
    <div id="category">
      <h1 className="cat_name">Categories</h1>
      <div className="category">
        <div className="cat_one">
          <img className="cat_pic" src={clipart1} />
          <h1 className="cat_name">+2 Books</h1>
          <button className="button_buyo" onClick={PlusTwoCat}>
            Buy Books
          </button>{" "}
        </div>

        <div className="cat_two">
          <img className="cat_pic" src={clipart5} />
          <h1 className="cat_name">Bachelors </h1>

          <button className="button_buyo" onClick={BachelorsCat}>
            Buy Books
          </button>
        </div>
        <div className="cat_three">
          <img className="cat_pic" src={clipart4} />
          <h1 className="cat_name">Entrance</h1>

          <button className="button_buyo" onClick={EntranceCat}>
            Buy Books
          </button>
        </div>
        <div className="cat_four">
          <img className="cat_pic" src={clipart3} />
          <h1 className="cat_name">School Books</h1>

          <button className="button_buyo" onClick={SchoolCat}>
            Buy Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
