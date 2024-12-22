import React from "react";

const MovieCard = ({ movie }) => {
  const { title, releaseYear, duration, genre, description, imageUrl } = movie;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "300px",
        textAlign: "center",
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "100%", borderRadius: "8px 8px 0 0" }}
      />
      <h3>{title}</h3>
      <p>
        <strong>Release Year:</strong> {releaseYear}
      </p>
      <p>
        <strong>Duration:</strong> {duration} minutes
      </p>
      <p>
        <strong>Genre:</strong> {genre}
      </p>
      <p>{description}</p>
    </div>
  );
};

export default MovieCard;