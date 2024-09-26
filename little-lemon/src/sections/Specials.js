import Button from "../components/Button";
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
          <Button btn="primary" text="Online Menu" />
        </div>

        <div className="section-cards">
          {specials.map((obj) => {
            return (
              <Card
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
