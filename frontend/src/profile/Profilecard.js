import React from "react";
import "./profilecard.css";
import { Link, Navigate } from "react-router-dom";
import { useRef } from "react";

const Profilecard = (props) => {
  window.scrollTo(0, 0);
  const overlayRef = useRef();

  const openDelete = () => {
    overlayRef.current.style.width = "100%";
  };

  const closeDelete = () => {
    overlayRef.current.style.width = "0%";
  };

  const confirmDelete = () => {
    deleteProduct(props.id);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      alert("Book is deleted");
      window.location.reload(true);
      
    }
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
            <Link to={"/updatebook/" + props.id}>
              {" "}
              <button className="profcard_btn">Edit Details</button>{" "}
            </Link>

            <button className="delete_btn" onClick={openDelete}>
              Delete post
            </button>
          </div>

          {/*DELETE OVERLAY*/}

          <div ref={overlayRef} className="fullscreen_overlay">
            <button className="fullscreen_close-button" onClick={closeDelete}>
              &times;
            </button>
            <div className="fullscreen_overlay-content">
              <div className="suredelete-container">
                <h1>Are you sure you want to delete ?</h1>
                <div className="btn-cover">
                  <button className="yes-btn" onClick={confirmDelete}>
                    Yes
                  </button>
                  <button className="no-btn" onClick={closeDelete}>
                    No
                  </button>
                </div>
              </div>
              );
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilecard;
