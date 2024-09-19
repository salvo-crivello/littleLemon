import Button from "../components/Button";
import Card from "../components/Card";

export default function Specials() {
  return (
    <div className="section">
      <div className="section-body-col">
        <div className="section-inline">
          <h1 className="txt-title">This weeks Specials!</h1>
          <Button btn="primary" text="Online Menu" />
        </div>
        <div className="section-cards">
          <Card
            img="/photo/photo-09.png"
            title="Greek salad"
            price="$ 10.99"
            description="Lorem ipsum dolor sit amet consectetur. Euismod orci sed nibh
            venenatis cras in posuere amet. Faucibus ridiculus aliquam."
          />
          <Card
            img="/photo/photo-10.png"
            title="Greek salad"
            price="$ 9.99"
            description="Lorem ipsum dolor sit amet consectetur. Euismod orci sed nibh
            venenatis cras in posuere amet."
          />
          <Card
            img="/photo/photo-08.png"
            title="Greek salad"
            price="$ 8.99"
            description="Lorem ipsum dolor sit amet consectetur. Euismod orci sed nibh
            venenatis."
          />
        </div>
      </div>
    </div>
  );
}
