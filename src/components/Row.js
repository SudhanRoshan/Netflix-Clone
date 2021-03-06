import React from "react";
import "../styles/Row.css";
import axios from "../axios";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import {getMoiveImage as getMoiveImage_baseUrl} from "../config"

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async(movie) => {
      if (trailerUrl) {
        setTrailerUrl("");
    } else {
        const url = await movieTrailer(movie?.title || "")
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"))
    }
  };

  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                onClick={() => handleClick(movie)}
                src={`${getMoiveImage_baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              ></img>
            )
        )}
      </div>
      {trailerUrl && (
        <YouTube
          videoId={trailerUrl}
          opts={opts}
          onReady={(event) => {
            console.log(event);
            event.target.pauseVideo();
          }}
       />
      )}
    </div>
  );
}

export default Row;
