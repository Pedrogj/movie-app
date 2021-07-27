import React from "react";
import { Link } from "react-router-dom";
// styles
import { Image } from "./Card.styles";

const Card = ({ image, movieId, clickCard }) => (
  <div>
    {clickCard ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-card" />
      </Link>
    ) : (
      <Image src={image} alt="movie-card" />
    )}
  </div>
);

export default Card;
