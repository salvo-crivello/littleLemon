import Quote from "./Quote";
import { useState } from "react";

const quotesGroup = [
  {
    id: 1,
    img: "/photo/photo-user.png",
    testimonial: "Francesca C.",
    vote: "⭑⭑⭑⭑",
    quote: `"Lorem ipsum dolor sit amet consectetur. Euismod orci sed nibh
          venenatis cras in posuere amet."`,
  },
  {
    id: 2,
    img: "/photo/photo-user.png",
    testimonial: "Francesca C.",
    vote: "⭑⭑⭑⭑⭑",
    quote: `"Lorem ipsum dolor sit amet consectetur. Euismod orci sed nibh
              venenatis cras in posuere amet."`,
  },
  {
    id: 3,
    img: "/photo/photo-user.png",
    testimonial: "Francesca C.",
    vote: "⭑⭑⭑⭑",
    quote: `"Lorem ipsum dolor sit amet consectetur. Euismod orci sed nibh
                  venenatis cras in posuere amet."`,
  },
  {
    id: 4,
    img: "/photo/photo-user.png",
    testimonial: "Francesca C.",
    vote: "⭑⭑⭑⭑⭑",
    quote: `"Lorem ipsum dolor sit amet consectetur. Euismod orci sed nibh
                  venenatis cras in posuere amet."`,
  },
];

export default function QuoteCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const quotePerSlide = 3;
  const totalSlides = Math.ceil(quotesGroup.length / quotePerSlide);

  const handleChangeSlide = (index) => {
    setCurrentSlide(index);
  };

  const actualSlide = quotesGroup.slice(
    currentSlide * quotePerSlide,
    currentSlide * quotePerSlide + quotePerSlide
  );

  return (
    <>
      <div className="section-cards">
        {actualSlide.map((obj, index) => {
          return (
            <Quote
              key={obj.id}
              img={obj.img}
              testimonial={obj.testimonial}
              vote={obj.vote}
              quote={obj.quote}
              className="active"
            />
          );
        })}
      </div>
      <div className="carousel-indicator">
        {Array.from({ length: totalSlides }).map((_, index) => {
          return (
            <span
              key={index}
              className={currentSlide === index ? "line active" : "line"}
              onClick={() => handleChangeSlide(index)}
            ></span>
          );
        })}
      </div>
    </>
  );
}
