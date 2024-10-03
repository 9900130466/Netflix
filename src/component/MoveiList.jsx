import React from "react";
import "./MoveiList.css";

const MovieThumbnail = ({ title, imageUrl }) => (
  <div className="movie-thumbnail">
    <img src={imageUrl} alt={title} />
    <div className="movie-title">{title}</div>
  </div>
);

const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map((movie, index) => (
      <MovieThumbnail
        key={index}
        title={movie.title}
        imageUrl={movie.imageUrl}
      />
    ))}
  </div>
  // jab bha map methode use karoge in react you will use the key 
  //component
  //parent component
  //child component
  //props
  //key
  //data ko accept karnekelia ham object destructure use karete hei
  //here data passes through parent to child(props)

);

export default MovieList;


