import { useEffect, useRef, useState } from "react";
import cards from "../../../../src/assets/cards/Cards_data.js";

interface Card {
  image: string;
  name: string;
}

type Props ={
  title:string;
  category?:string;
}

const TitleCards = (props:Props) => {
  const cardsRef = useRef<HTMLDivElement | null>(null);

  // const [movies, setMovies] = useState();

  const handleWheel = (event: WheelEvent) => {
    if (!cardsRef.current) return;
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const el = cardsRef.current;
    if (el) el.addEventListener("wheel", handleWheel);
    return () => {
      if (el) el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <section className="pl-[4%] py-[1%]">
        <h1 className="text-2xl font-bold mb-4">{props.title ? props.title :"Popular on Netflix"}</h1>

        <div
          className="flex gap-3 overflow-hidden scrollbar-hide"
          ref={cardsRef}
        >
          {cards.map((card: Card, index: number) => {
            return (
              <div key={index} className="text-center">
                <div
                  className="relative mb-3 h-[180px] min-w-[310px] rounded-lg bg-cover bg-center cursor-pointer overflow-hidden"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>
                <h2>{card.name}</h2>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TitleCards;
