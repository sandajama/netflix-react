import { useState } from "react";

function MovieCard({data}){
  return (
    <div className="movie-card">
      <div className="movie-image">
        <img
          //src="https://i.pinimg.com/originals/a2/34/75/a234753b69e3bd27b7f1d448956c38af.jpg"
          src={data.show.image.medium}
          alt="movie"
        />
      </div>

      <h3 className="movie-heading">{data.show.name}</h3>
      <h3 className="rates">{data.show.rating.average}</h3>
      <p className="name">{data.show.genres}</p>
     
    </div>
  );
}

export default MovieCard;
