import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Movie = {
  name: string;
  key: string;
  published_at: string;
  type: string;
};

const Player = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);

  const [movieLink, setMovieLink] = useState<Movie[]>([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  };

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/640146/videos?language=en-US`,
  //     options
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log('kKKKKKKK',res.results[0]);
  //       setMovieLink(res.results || [])})
  //     .catch((err) => console.error('23443224231234324',err));
  // },[]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => {
        console.log("Response status:", res.status);
        return res.json();
      })
      .then((res) => {
        console.log("API Results:", res.results);
        setMovieLink(res.results || []);
      })
      .catch((err) => console.error("Fetch Error:", err));
  }, [id]);

  const trailer = movieLink.find((movie) => movie.type === "Trailer");

  console.log("QQQQQ", movieLink);

  return (
    <div className="relative w-[87%] h-[87%] mx-auto flex flex-col items-start gap-4 mt-5">
      <img
        onClick={() => navigate(-1)}
        src="/assets/back_arrow_icon.png"
        className="absolute -left-20 top-5 w-15 z-10 cursor-pointer"
        alt=""
      />
      <div className="relative w-full pb-[56.25%] overflow-hidden rounded-xl shadow-lg">
        {trailer ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        ) : (
          <p className="text-gray-400 text-center mt-4">No trailer available</p>
        )}
      </div>

      <div>{/* <p>{movieLink[0].name}</p> */}</div>
    </div>
  );
};

export default Player;
