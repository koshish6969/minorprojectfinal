import React, { useState } from "react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
} from "react-google-places-autocomplete";
// import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import "react-google-places-autocomplete/dist/index.min.css";
// import { GOOGLE_MAPS_APIKEY } from "@env";
import "./autocomplete.css";
export default function AddLocation(props) {
  // const handleAddress = ({ description }) => {
  //   console.log(description);
  //   geocodeByAddress(description)
  //     .then((results) => {
  //       getLatLng(results[0]);
  //       console.log(results);
  //     })
  //     .then(({ lat, lng }) => {
  //       console.log("Successfully got latitude and longitude", { lat, lng });
  //       console.log(typeof lat);
  //     })
  //     .catch((error) => console.error(error));
  // };
  const [value, setValue] = useState(null);
  const onChange = (place) => {
    setValue(place);
    geocodeByAddress(place)
      .then((results) => {
        console.log("asdasds");
        console.log(results);
        console.log(results[0].geometry.bounds["Va"].lo);
        console.log(results[0].geometry.bounds["Ha"].lo);
        props.setLocation({
          place: place,
          lat: results[0].geometry.bounds["Va"].lo,
          lon: results[0].geometry.bounds["Ha"].lo,
        });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <GooglePlacesAutocomplete
        className="auto_complete"
        selectProps={{
          value: value,
        }}
        debounce={800}
    
        apiKey="AIzaSyB_9pxJVXOeEobT06qB8eDVWV1mkBZOw6g"
        renderSuggestions={(active, suggestions, onSelectSuggestion) => (
          <div className="">
            {suggestions.map((suggestion) => (
              <div
                className=""
                onClick={(event) => onChange(suggestion.description)}
              >
                {suggestion.description}
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
}
