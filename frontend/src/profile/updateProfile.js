import React, { useState, useEffect } from "react";
import "../form//AddBook.css";
import HeaderTwo from "../headers/HeaderForOtp";
import Footer from "../Footer";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProfile() {
  window.scrollTo(0, 0);
  const [selectedFile, setSelectedFile] = useState("");
  const [image, setImage] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserDetailsforUpdate();
  }, []);

  const getBookDetailsforUpdate = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:5000/userdetails/${params.id}`);
    result = await result.json();
    console.warn(result);
    setUserName(result.username);
    setPassword(result.password);
    setImage(result.imageURL);
  };

  const userId = localStorage.getItem("_id");

  const handleApi = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", selectedFile);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("userId", userId);

    const data = {};

    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    console.log(data);
    console.log("-------------------------------");
    let result = await fetch(`http://localhost:5000/userdetails/${params.id}`, {
      method: "Put",
      body: JSON.stringify({
        username,
        password,
        Image,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.warn(result);
    navigate("/profile");
  };

  // await axios
  //   .post(`http://localhost:5000/product/${params.id}`, formData)
  //   .then((res) => {
  //     console.log(res);
  //   })

  //   .catch((error) => {
  //     console.log(error);
  //   });
  //   };

  const handleImageChange = (e) => {
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <div className="box">
        <h1 className="add_tit">Update User Details</h1>
        <form className="addbook_f" onSubmit={handleApi}>
          <div className="name">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="image">
            <input type="file" name="file" onChange={handleImageChange} />

            <button type="submit" className="uploadbtn" onC={handleApi}>
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateProfile;
