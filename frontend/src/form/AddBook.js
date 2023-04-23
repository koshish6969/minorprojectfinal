import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";
import { Link } from "react-router-dom";
import axios from "axios";
import AddLocation from "../Googlemap/AddLocation";

function AddBook() {
  window.scrollTo(0, 0);
  const [selectedFile, setSelectedFile] = useState("");
  const [image, setImage] = useState("");
  const [bookname, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [condition, setCondition] = useState("");
  const [publicationyr, setPublicationyr] = useState("");
  const [prices, setPrices] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  // show the inputs for lat lon or not
  const [isLocation, setIsLocation] = useState(true);

  const userId = localStorage.getItem("_id");
  const username = localStorage.getItem("username");

  // useEffect(() => {
  // get the browser location
  //   if ("geolocation" in navigator) {
  //     console.log("Available");
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       if(position && position.coords && position?.coords?.latitude) {
  //         setIsLocation(false);
  //       }
  //       setLat(position.coords.latitude);
  //       setLon(position.coords.longitude);
  //     });
  //   } else {
  //     console.log("Not Available");
  //     setIsLocation(true)
  //   }
  // },[navigator])

  const handleApi = async (e) => {
    e.preventDefault();
    navigate(`/success`);
    const formData = new FormData();

    formData.append("image", selectedFile);
    formData.append("bookname", bookname);
    formData.append("author", author);
    formData.append("condition", condition);
    formData.append("publicationyr", publicationyr);
    formData.append("category", category);
    formData.append("prices", prices);
    formData.append("location", location);
    formData.append("userId", userId);
    formData.append("username", username);
    formData.append("lat", lat);
    formData.append("lon", lon);

    const data = {};

    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    console.log("koshish", data);
    console.log("-------------------------------");

    await axios
      .post("http://localhost:5000/add-product", formData)
      .then((res) => {
        console.log(res);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const handleImageChange = (e) => {
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
  };
  const navigate = useNavigate();

  const setChangeLocation = (place) => {
    setLat(place.lat);
    setLon(place.lon);
    setLocation(place.place);
    console.log("place.lat wala ho", place);
  };

  return (
    <>
      <div className="box">
        <h1 className="add_tit">Add a new book</h1>
        <form className="addbook_f" onSubmit={handleApi}>
          <div className="name">
            <label>Book Name</label>
            <input
              type="text"
              name="bookname"
              value={bookname}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>
          <div>
            <label>Author</label>
            <input
              type="text"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label>Condition</label>
            <select
              className="select-options"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              {" "}
              <option value="" disabled selected hidden>
                Select Condition
              </option>
              <option value="Brand New">Brand New</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
              <option value="Old">Old</option>
            </select>
          </div>
          <div>
            <label>Publication Year</label>
            <input
              type="tel"
              name="publication"
              value={publicationyr}
              onChange={(e) => setPublicationyr(e.target.value)}
              pattern="^-?[0-9]\d*\.?\d*$"
            />
          </div>
          <div>
            <label>Price(Rs)</label>
            <input
              type="tel"
              name="price"
              value={prices}
              onChange={(e) => setPrices(e.target.value)}
              pattern="^-?[0-9]\d*\.?\d*$"
            />
            {/* <div>
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}



              />
              
            </div> */}
            <AddLocation setLocation={setChangeLocation} />
          </div>
          <div className="Category">
            <label>
              Select Category{""}
              {""}
            </label>
            <select
              className="select-options"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {" "}
              <option value="" disabled selected hidden>
                Select Category
              </option>
              <option value="plustwo">+2 Books</option>
              <option value="bachelors">Bachelors</option>
              <option value="entrance">Entrance</option>
              <option value="school">School Books</option>
            </select>
          </div>
          <div className="image">
            <input type="file" name="file" onChange={handleImageChange} />

            <button type="submit" className="uploadbtn" onChange={handleApi}>
              Upload!
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddBook;
