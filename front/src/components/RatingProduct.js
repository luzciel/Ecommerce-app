import React from "react";
import Rating from "react-rating";
import starGrey from "../assets/star-grey.png";
import starYellow from "../assets/star-yellow.png";

const RatingProduct = ({ rating }) => {
  return (
    <Rating
      placeholderRating={rating}
      readonly="FALSO"
      emptySymbol={<img src={starGrey} className="icon" alt="" />}
      placeholderSymbol={<img src={starYellow} className="icon" alt="" />}
      fullSymbol={<img src={starYellow} className="icon" alt="" />}
    />
  );
};

export default RatingProduct;
