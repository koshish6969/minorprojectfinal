import React, { useEffect, useState } from "react";
import "./profilepage.css";
import axios from "axios";
import photo from "../components/3135823.png";
import ProfilePageCarousel from "./ProfilePageCarousel";

import { Link } from "react-router-dom";

const Details = (props) => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="prof_det">
        <h3 className="name_profile">Username: {props.username}</h3>

        <h3 className="no_profile">Phone number:{props.number}</h3>

        <h3 className="address_profile">Email: {props.email}</h3>
      </div>
    </>
  );
};

const Profile = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const _id = localStorage.getItem("_id");
    const result = await axios.get("http://localhost:5000/userdetails/" + _id);
    console.log(result);
    setApiData(result.data).then((getData) => {
      setApiData(getData.data);
    });
  };

  return (
    <>
      <div className="blank"></div>
      {/*
      <p className="p_tit">Account Details</p>
  */}
      <div className="container_profile">
        <div className="left_container_profile">
          {apiData.map((profile, index) => (
            <Details
              username={profile.username}
              number={profile.ContactNo}
              address={profile.location}
              email={profile.email}
            />
          ))}
          <button type="submit" className="update_profile">
            Update Profile
          </button>
        </div>
        <div className="right_container_profile">
          <ProfilePageCarousel />
        </div>
        <div className="photo_profile">
          <img src={photo} alt="profilepic" />
        </div>
        <div className="Uploads_profile">My Uploads</div>
        <div>
          <Link to="/addbook">
            <button type="submit" className="addbook_profile">
              Add new book
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
