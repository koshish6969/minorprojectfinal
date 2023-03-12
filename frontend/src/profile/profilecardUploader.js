import React from "react";
import "./profilecard.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import Uploaderprofile from "./UploaderProfile";

const ProfilecardUploader = (props) => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();

  const onClickHandlerr = () => {
    navigate(`/details?key=${props.id}&userId=${props.userId}`);
    window.location.reload(true);
  };

  return (
    <div>
      <div className="profcard_main">
        <div className="profcard_body">
          <img className="profcard_img" src={props.img} />
          <div className="profcard_det">
            <h2 className="profcard_name"> {props.name}</h2>
            <p className="profseller_name">{props.author}</p>
            <p className="profcard_price">Rs. {props.price}</p>
          </div>

          <div>
            {" "}
            <button className="profcard_btn" onClick={onClickHandlerr}>
              View Details
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilecardUploader;
