import React, { useEffect, useState } from "react";
import Profilecard from "./Profilecard.js";
import axios from "axios";
const ProfilePagecarousel = () => {
  window.scrollTo(0, 0);
  {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
      getData();
    }, []);

    const getData = async () => {
      const _id = localStorage.getItem("_id");
      const result = await axios.get("http://localhost:5000/products/" + _id);
      console.log(result);
      setApiData(result.data).then((getData) => {
        setApiData(getData.data);
      });
    };

    return (
      <>
        <div className="product-container-prof">
          {apiData.map((profilebook, index) => (
            <Profilecard
              id={profilebook._id}
              img={profilebook.image}
              name={profilebook.bookname}
              price={profilebook.prices}
              author={profilebook.author}
            />
          ))}
        </div>{" "}
      </>
    );
  }
};

export default ProfilePagecarousel;
