import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  category: string;
};

const TitleCards = (props: Props) => {
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  };

  const [movies, setMovies] = useState([]);

  const handleWheel = (event: WheelEvent) => {
    if (!cardsRef.current) return;
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${props.category ? props.category : 'now_playing'}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setMovies(res.results))
      .catch((err) => console.error(err));

    const el = cardsRef.current;
    if (el) el.addEventListener("wheel", handleWheel);
    return () => {
      if (el) el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <section className="pl-[4%] py-[1%] mb-7">
        <h1 className="text-2xl font-bold mb-5">
          {props.title ? props.title : "Popular on Netflix"}
        </h1>

        <div
          className="flex gap-3 overflow-hidden scrollbar-hide"
          ref={cardsRef}
        >
          {movies.map((card: any, index: number) => {
            return (
              <Link to={`/player/${card.id}`}>
              <div key={index} className="text-center">
                <div
                  className="relative mb-3 h-[180px] min-w-[310px] rounded-lg bg-cover bg-center cursor-pointer overflow-hidden"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${card.poster_path})`,
                  }}
                ></div>
                <h2>{card.original_title}</h2>
              </div>

              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TitleCards;
