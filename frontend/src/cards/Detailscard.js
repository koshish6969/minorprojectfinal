import React from "react";
import "./detailscard.css";
import Details from "./Details";
import { Link, useNavigate } from "react-router-dom";
const Detailscard = (props) => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/details?key=${props.id}&userId=${props.userId}`);
    window.location.reload(true);
  };

  return (
    <div className="det_main">
      <div className="det_body">
        <img className="det_img" src={props.img} />
        <div className="det_det">
          <h2 className="det_name"> {props.name}</h2>
          <p className="det_sell">By {props.seller}</p>
          <p className="det_price">Rs. {props.price}</p>
          <button className="card_btn cardu " onClick={onClickHandler}>
            View Details
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default Detailscard;
