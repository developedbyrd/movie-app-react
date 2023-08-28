import React from "react";
import "../styles/Movie.css";

const Books = (props) => {
  return (
    <>
      <div className="movie">
        <img src={props.poster} alt="" />
        <p className="title">{props.title}</p>
        <p className="year">{props.year}</p>
      </div>
    </>
  );
};

export default Books;
