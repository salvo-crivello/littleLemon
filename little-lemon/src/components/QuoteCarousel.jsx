import Quote from "./Quote";
import { useState, useEffect, useRef } from "react";

const quotesGroup = [
  {
    id: 1,
    img: "/photo/photo-user.png",
    testimonial: "Emma Johnson",
    vote: "⭑⭑⭑⭑",
    quote: `"Amazing food and cozy atmosphere! The chef's special was creative and delicious. Perfect for a romantic evening or night out. Highly recommend!"`,
  },
  {
    id: 2,
    img: "/photo/photo-user.png",
    testimonial: "Francesca Camilleri",
    vote: "⭑⭑⭑⭑⭑",
    quote: `"Loved the variety on the menu and fast service. The seafood pasta was fantastic, but it was a bit noisy. Still, a great lunch spot!"`,
  },
  {
    id: 3,
    img: "/photo/photo-user.png",
    testimonial: "Sarah Lee",
    vote: "⭑⭑⭑⭑",
    quote: `"Incredible flavors and excellent service! The small plates were perfect for sharing, and the wine list is top-notch. Can’t wait to come back!"`,
  },
  {
    id: 4,
    img: "/photo/photo-user.png",
    testimonial: "Michael Thompson",
    vote: "⭑⭑⭑⭑⭑",
    quote: `"The steak was great, but service was slow. Nice ambiance, though. I’d come back hoping for faster service next time."`,
  },
];

export default function QuoteCarousel() {
  const carouselRef = useRef();
  const [screenW, setScreenW] = useState(window.innerWidth);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swipeQty, setSwipeQty] = useState(0);
  const [swiping, setSwiping] = useState("left-swipe");

  // resize

  useEffect(() => {
    const handleResize = () => setScreenW(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //swipe

  useEffect(() => {
    const carousel = carouselRef.current;

    let x = 0;
    let finalX = 0;
    let swipeDirection = "left";

    const handleTouchStart = (e) => {
      x = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
      finalX = e.targetTouches[0].clientX;
      setSwipeQty(x - finalX);
    };

    const handleTouchEnd = () => {
      if (x - finalX > 0) {
        swipeDirection = "left";
      } else {
        swipeDirection = "right";
      }

      handleChangeSlide(
        swipeDirection === "left"
          ? currentSlide < totalSlides - 1
            ? currentSlide + 1
            : 0
          : currentSlide === 0
          ? totalSlides - 1
          : currentSlide - 1
      );

      setSwipeQty(0);
    };

    carousel.addEventListener("touchstart", handleTouchStart);
    carousel.addEventListener("touchmove", handleTouchMove);
    carousel.addEventListener("touchend", handleTouchEnd);

    return () => {
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchmove", handleTouchMove);
      carousel.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSlide]);

  //drag

  useEffect(() => {
    const carousel = carouselRef.current;

    let isDrag = false;
    let x = 0;
    let finalX = 0;
    let dragDirection = "left";

    const draggingStart = (e) => {
      isDrag = true;
      x = e.pageX;
    };

    const dragging = (e) => {
      if (!isDrag) return;
      finalX = e.pageX;
      setSwipeQty(x - finalX);
      console.log("x----", x, "----final x ---", finalX);
    };

    const draggingEnd = () => {
      console.log("DRAG DIRECTION---", dragDirection);
      console.log("CURRENT SLIDE----", currentSlide);
      console.log("----", x, "meno", finalX, "=", swipeQty);
      isDrag = false;

      if (x - finalX > 0) {
        dragDirection = "left";
      } else {
        dragDirection = "right";
      }

      handleChangeSlide(
        dragDirection === "left"
          ? currentSlide < totalSlides - 1
            ? currentSlide + 1
            : 0
          : currentSlide === 0
          ? totalSlides - 1
          : currentSlide - 1
      );

      setSwipeQty(0);
    };

    carousel.addEventListener("mousedown", draggingStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", draggingEnd);

    return () => {
      carousel.removeEventListener("mousedown", draggingStart);
      carousel.removeEventListener("mousemove", dragging);
      carousel.removeEventListener("mouseup", draggingEnd);
    };
  }, [currentSlide]);

  /////////////////////////

  const quotePerSlide = screenW < 800 ? 1 : 3;
  const totalSlides = Math.ceil(quotesGroup.length / quotePerSlide);

  const actualSlide = quotesGroup.slice(
    currentSlide * quotePerSlide,
    currentSlide * quotePerSlide + quotePerSlide
  );

  const handleChangeSlide = (nextSlide, by) => {
    let swipingDirection =
      nextSlide > currentSlide ? "left-swipe" : "right-swipe";

    if (by !== "pagination") {
      if (currentSlide === 0 && nextSlide === totalSlides - 1) {
        swipingDirection = "right-swipe";
      }

      if (currentSlide === totalSlides - 1 && nextSlide === 0) {
        swipingDirection = "left-swipe";
      }
    }

    setSwiping(swipingDirection);

    setCurrentSlide(nextSlide);
  };

  /////////////////////////

  return (
    <>
      <ul
        ref={carouselRef}
        style={{ marginLeft: `${-swipeQty}px` }}
        className="section-cards"
      >
        {actualSlide.map((obj, index) => {
          return (
            <Quote
              key={obj.id}
              img={obj.img}
              testimonial={obj.testimonial}
              vote={obj.vote}
              quote={obj.quote}
              animation={{
                animation: `${swiping} 0.5s ease-in-out both`,
              }}
            />
          );
        })}
      </ul>
      <div className="carousel-indicator">
        {Array.from({ length: totalSlides }).map((_, index) => {
          return (
            <span
              key={index}
              className={currentSlide === index ? "line active" : "line"}
              onClick={() => handleChangeSlide(index, "pagination")}
            ></span>
          );
        })}
      </div>
    </>
  );
}
