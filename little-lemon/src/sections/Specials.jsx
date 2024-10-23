import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Specials() {
  const specials = [
    {
      img: "/photo/photo-09.png",
      title: "Greek salad",
      price: "$ 10.99",
      description:
        "A refreshing mix of crisp cucumbers, juicy tomatoes, red onions, Kalamata olives, and tangy feta cheese, drizzled with olive oil and a sprinkle of oregano.",
    },
    {
      img: "/photo/photo-10.png",
      title: "Matriciana",
      price: "$ 9.99",
      description:
        "A classic Italian pasta dish made with creamy egg yolk, crispy pancetta, and Parmesan cheese, all tossed with perfectly cooked spaghetti.",
    },
    {
      img: "/photo/photo-08.png",
      title: "Fish grilled",
      price: "$ 14.99",
      description:
        "Freshly caught and expertly grilled, our fish is seasoned with herbs and served with a side of lemon for a light, flavorful meal.",
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
