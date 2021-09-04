import React from "react";
const GetSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

export default (props) => {
  const season = props.lat
    ? GetSeason(props.lat, new Date().getMonth())
    : "Please enable Geolocation first";

  return (
    <>
      <h2>{season}</h2>
    </>
  );
};
