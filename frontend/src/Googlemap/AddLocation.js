import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import "react-google-places-autocomplete/dist/index.min.css";
// import { GOOGLE_MAPS_APIKEY } from "@env";
export default function AddLocation() {
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
  return (
    <div>
      <GooglePlacesAutocomplete
        debounce={800}
        apiKey="AIzaSyAe5nZqsptDMSscHp3YScJcBGHq94awrc8"
        renderSuggestions={(active, suggestions, onSelectSuggestion) => (
          <div className="">
            {suggestions.map((suggestion) => (
              <div
                className=""
                onClick={(event) => onSelectSuggestion(suggestion, event)}
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
