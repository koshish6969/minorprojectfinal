import book4 from "../components/book4.jpg";
import "./details.css";
import Detailscard from "./Detailscard";
import "./Detailscarousel.css";
import Mycard from "../cards/Mycard.js";
import Detailscarouseltwo from "./Detailscarouseltwo";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import MapComponent from '../MapComponent'
const Details = () => {
  window.scrollTo(0, 0);
  const location = useLocation();

  const { slug } = useParams();
  const key = new URLSearchParams(location.search).get("key");
  const userId = new URLSearchParams(location.search).get("userId");
  const loggedinId = new URLSearchParams(location.search).get("loggedinId");
  const username = localStorage.getItem("username");
  const [searchResults, setSearchResults] = useState([]);
  const [searchUsers, setUserResults] = useState([]);
  const [searchSimilarBooks, setSimilarBooks] = useState([]);

  const navigate = useNavigate();
  const goToUserProfile = (e) => {
    navigate(`/profilepagetwo?user=${userId}`);
  };
  const auth = localStorage.getItem("_id");

  const [searchReviews, setReviews] = useState({
    loggedinId: loggedinId,
    details: "",
    userId: userId,
    bookId: key,
    username: username,
  });
  const [getReviews, setGetReviews] = useState([]);
  const [getRevDetails, setGetRevDetails] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    searchProduct();
    searchUploader();
    SimilarBooks();
    reviewData();
  }, []);

  const updateReview = async (e) => {
    setReviews({ ...searchReviews, [e.target.name]: e.target.value });
  };
  const reviewData = async (e) => {
    let result = await fetch(`http://localhost:5000/review/${key}`);
    result = await result.json();
    console.log(result);
    console.log(result.details);

    setGetReviews(result);
  };

  const sendReview = async (e) => {
    e.preventDefault();
    console.log(searchReviews);
    const result = await fetch("http://localhost:5000/review", {
      method: "POST",
      body: JSON.stringify(searchReviews),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    console.log(data);
    window.location.reload(true);
  };
  const searchProduct = async () => {
    let result = await fetch(`http://localhost:5000/bookdetails/${key}`);
    result = await result.json();
    if (result) {
      setSearchResults(result);
    }
  };
  const searchUploader = async () => {
    let result = await fetch(`http://localhost:5000/userdetails/${userId}`);
    result = await result.json();
    if (result) {
      setUserResults(result);
    }
  };
  const SimilarBooks = async () => {
    let result = await fetch(`http://localhost:5000/products/${userId}`);
    result = await result.json();
    if (result) {
      setSimilarBooks(result);
    }
  };

  const mapping = "kathmandu engineering college";
  // let source =
  //   "https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=kathmandu%20engineering%20college%20Kathmandu+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
  //    https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=kathmandu%20engineering%20college%20Kathmandu+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed
  let mapping__array = mapping.split(" ");
  // let breakpoint = /[q%]/;
  let breakpoint = /\q=|20Kathmandu/;
  console.log(mapping__array);
  // let source__array = source.split(breakpoint);
  // let again_array = source_array[1].split('%20Kathmandu');
  // console.log(again_array);
  // console.log(source__array);
  let result = "";
  for (let i = 0; i < mapping__array.length; i++) {
    result = result.concat(mapping__array[i], "%20");
  }
  console.log(result);
  // let final__location = `https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=${result}Kathmandu+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;&output=embed`
  var final__location =
    "https://maps.google.com/maps/embed?width=520&amp;height=400&amp;hl=en&amp;q=kathmandu%20engineering%20college%20Kathmandu+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
  console.log(final__location);
  return (
    <div>
      <div className="selected-book">
        {searchResults.map((bookimg, index) => (
          <img className="details_img" src={bookimg.image} />
        ))}

        <div className="book_info">
          {searchResults.map((bookdetails, index) => (
            <>
              {" "}
              <div className="book-title">{bookdetails.bookname} </div>
              <p className="author">By {bookdetails.author}</p>
              <div className="deets">
                <br />
                <div className="Condition">
                  Condition: {bookdetails.condition}
                </div>
                <br />
                <div className="Year">Year: {bookdetails.publicationyr}</div>
                <br />

                <h1 className="det_pri">Rs. {bookdetails.prices}</h1>
                <h1 className="det_pri">Place: {bookdetails.location}</h1>
                <MapComponent lat={bookdetails.lat} lon={bookdetails.lon}/>
              </div>
            </>
          ))}
        </div>

        <div className="container">
          <h2 className="rev_title">Reviews:</h2>
          <div className="reviewsss">
            {getReviews.map((rev, index) => (
              <>
                <p className="rev_details"> {rev.details}</p>
                <p className="rev_poster_details">
                  {" "}
                  Posted By : {rev.username}
                </p>
              </>
            ))}
          </div>

          <hr />

          <input
            id="details"
            type="details"
            name="details"
            placeholder="Add your review"
            onChange={updateReview}
          ></input>
          
          {auth ? (
            
            <button type="button" className="det_btn" onClick={sendReview}>
            Add Review
          </button>
            
          ) : (
            <Link to="/login">
              <button className="button_sell">Add Review</button>{" "}
            </Link>
          )}
          
        
        </div>
        <div className="uploader">
          {searchUsers.map((userdetails, index) => (
            <>
              <div className="Name" onClick={goToUserProfile}>
                {userdetails.username}
              </div>
              <br />
              <div className="Number">{userdetails.ContactNo}</div>
            </>
          ))}
        </div>
      </div>

      <hr />
      {searchResults.map((bookdetails, index) => (
        <h1 className="location"> Location : {bookdetails.location}</h1>
      ))}

      <div>
        <iframe
          width="1000"
          height="500"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          // src={require(`https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=${result}Kathmandu+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`)}
          // src={final__location}

          // src={require(`${final__location}`)}
          // src=require('https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=kathmandu%20engineering%20college%20Kathmandu+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed')
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=kathmandu%20engineering%20college%20Kathmandu+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <hr />
      <div className="line1"></div>
      <br />
      <div className="Container2">
        <h2 className="det_pri">Other uploads </h2>
        <div className="details-product-container details_card_cat">
          {searchSimilarBooks.map((similardetails, index) => (
            <>
              <p>
                {" "}
                <div className="">
                  <Detailscard
                    userId={similardetails.userId}
                    id={similardetails._id}
                    name={similardetails.bookname}
                    img={similardetails.image}
                    seller={similardetails.author}
                    price={similardetails.prices}
                    s={similardetails.author}
                  />{" "}
                </div>
              </p>
            </>
          ))}
          <br />
        </div>
      </div>

      <hr />
      <br />
    </div>
  );
};

export default Details;
