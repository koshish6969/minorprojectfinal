import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mycard.css";
import { Link } from "react-router-dom";
const Mycard = (props) => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const _id = localStorage.getItem("_id");
  const username = localStorage.getItem("username");

  return (
    <div>
      <div className="card_main">
        <div className="card_body">
          <img className="card_img" src={props.img}></img>
          <div className="card_det">
            <h2 className="card_name"> {props.name}</h2>
            <p className="author_name">{props.author}</p>
            <p className="card_price">Rs. {props.price} </p>
            <p className="s_name">Posted By : {props.s}</p>
          </div>{" "}
          <button
            className="card_btn"
            onClick={() =>
              navigate(
                `/details?key=${props.id}&userId=${props.userId}&loggedinId=${_id}`
              )
            }
          >
            View Details
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Mycard;
