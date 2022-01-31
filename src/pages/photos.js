import React from "react";
import { Link } from "react-router-dom";

const Photos = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <h1>Photos</h1>
      <Link>
        <img src='src/pictures/Stars2020-1.jpg' alt='' />
      </Link>
    </div>
  );
};

export default Photos;
