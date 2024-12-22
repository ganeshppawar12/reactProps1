import React from "react";
// import { movies } from "./movies.json";
import MovieCard from "./MovieCard.jsx";

const MovieList = () => {


  const movies = [
    
      {
        "id": 1,
        "title": "Inception",
        "releaseYear": 2010,
        "duration": 148,
        "genre": "Sci-Fi",
        "description": "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg"
      },
      {
        "id": 2,
        "title": "The Dark Knight",
        "releaseYear": 2008,
        "duration": 152,
        "genre": "Action",
        "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on Gotham.",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ekE6Hhz9gvIbiFSUPxt-FyAh4zXTXX0bjQ&s"
      },
      {
        "id": 3,
        "title": "Forrest Gump",
        "releaseYear": 1994,
        "duration": 142,
        "genre": "Drama",
        "description": "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man.",
        "imageUrl": "data:image/jpeg;base64,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"
      },
      {
        "id": 4,
        "title": "The Matrix",
        "releaseYear": 1999,
        "duration": 136,
        "genre": "Sci-Fi",
        "description": "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg"
      },
      {
        "id": 5,
        "title": "The Godfather",
        "releaseYear": 1972,
        "duration": 175,
        "genre": "Crime",
        "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      },
      {
        "id": 6,
        "title": "The Lion King",
        "releaseYear": 1994,
        "duration": 88,
        "genre": "Animation",
        "description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_.jpg"
      },
      {
        "id": 7,
        "title": "Pulp Fiction",
        "releaseYear": 1994,
        "duration": 154,
        "genre": "Crime",
        "description": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      },
      {
        "id": 8,
        "title": "Avatar",
        "releaseYear": 2009,
        "duration": 162,
        "genre": "Sci-Fi",
        "description": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following orders and protecting the world he feels is his home.",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiM9ZJqYyw1fnV2vRLhjBiGanI_3D27UYOQ&s"
      },
      {
        "id": 9,
        "title": "Interstellar",
        "releaseYear": 2014,
        "duration": 169,
        "genre": "Sci-Fi",
        "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg"
      },
      {
        "id": 10,
        "title": "Parasite",
        "releaseYear": 2019,
        "duration": 132,
        "genre": "Thriller",
        "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg"
      }
    
    
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;