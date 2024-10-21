import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Specials() {
  const specials = [
    {
      img: "/photo/photo-09.png",
      title: "Greek salad",
      price: "$ 10.99",
      description:
        "Lorem ipsum dolor sit amet consectetur. Euismod orci sed nibh venenatis cras in posuere amet. Faucibus ridiculus aliquam.",
    },
    {
      img: "/photo/photo-10.png",
      title: "Matriciana",
      price: "$ 9.99",
      description:
        "Lorem ipsum dolor sit amet consectetur. Euismod orci sed nibh venenatis cras in posuere amet. Faucibus ridiculus aliquam.",
    },
    {
      img: "/photo/photo-08.png",
      title: "Fish grilled",
      price: "$ 14.99",
      description:
        "Lorem ipsum dolor sit amet consectetur. Euismod orci sed nibh venenatis cras in posuere amet. Faucibus ridiculus aliquam.",
    },
  ];

  return (
    <div className="section">
      <div className="section-body-col">
        <div className="section-inline">
          <h1 className="txt-title">This weeks Specials!</h1>
          <Link
            to="/onlineMenu"
            aria-label="navigate to menu"
            className="link-button button-primary txt-lead-b"
          >
            Online Menu
          </Link>
        </div>

        <div className="section-cards">
          {specials.map((obj) => {
            return (
              <Card
                key={obj.title}
                img={obj.img}
                title={obj.title}
                price={obj.price}
                description={obj.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
