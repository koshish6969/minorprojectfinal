import React from "react";
import "./addedsucess.css";
import greenTick from "../components/greentick.png";
import pencilCheck from "../components/pencil-check.gif";
import { Link } from "react-router-dom";
function AddedSucessfully() {
    window.scrollTo(0, 0);
  return (
    <div>
      <div className="tick_photo">
        <img src={pencilCheck} className="tick_photo"></img>
      </div>

      <div className="added_sucessfully">
        <h3 className="sucess_header">Success !!!</h3>
      </div>
      <div id="lower-side">
        <p className="success_message">
          Congratulations, your book has been successfully added.
        </p>
        <Link to="/addbook">
          <button className="add_more_book_success"> Add More </button>
        </Link>
        <Link to="/">
          <button className="add_more_book_success">HomePage </button>
        </Link>
      </div>
    </div>
  );
}

export default AddedSucessfully;
