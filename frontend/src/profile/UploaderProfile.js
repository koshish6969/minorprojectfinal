import React, { useEffect, useState } from "react";
import "./profilepage.css";
import axios from "axios";
import photo from "../components/3135823.png";

import { Link, useLocation, useParams } from "react-router-dom";
import { ContactsOutlined } from "@material-ui/icons";
import ProfilecardUploader from "./profilecardUploader.js";

const Details = (props) => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="prof_det">
        <h3 className="name_profile">Username: {props.username}</h3>

        <h3 className="no_profile">Phone number: {props.number}</h3>
        <h3 className="address_profile">Email: {props.email}</h3>
      </div>
    </>
  );
};

const ProfilePageTwo = () => {
  const location = useLocation();

  const { slug } = useParams();

  const userId = new URLSearchParams(location.search).get("user");
  const [apiData, setApiData] = useState([]);
  const [apiDataTwo, setApiDataTwo] = useState([]);
  useEffect(() => {
    getData();
    getDataTwo();
  }, []);

  const getData = async () => {
    console.log("hihi");

    let result = await fetch(`http://localhost:5000/userdetails/${userId}`);
    result = await result.json();
    if (result) {
      setApiData(result);
      console.log(result);
    }
  };
  const getDataTwo = async () => {
    console.log(userId);

    let result = await fetch(`http://localhost:5000/products/${userId}`);
    result = await result.json();
    if (result) {
      setApiDataTwo(result);
      console.log(result);
    }
  };

  return (
    <>
      <p className="p_tit">Account Details</p>
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
        </div>
        <div className="right_container_profile">
          <div className="product-container-prof">
            {apiDataTwo.map((profilebook, index) => (
              <ProfilecardUploader
                id={profilebook._id}
                img={profilebook.image}
                name={profilebook.bookname}
                price={profilebook.prices}
                author={profilebook.author}
                userId={profilebook.userId}
              />
            ))}
          </div>{" "}
        </div>
        <div className="photo_profile">
          <img src={photo} alt="profilepic" />
        </div>
        <div className="Uploads_profile">Uploads by user</div>
        <div> </div>
      </div>
    </>
  );
};

export default ProfilePageTwo;
