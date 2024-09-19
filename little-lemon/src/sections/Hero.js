import Button from "../components/Button";

export default function Hero() {
  return (
    <div className="section bg-green">
      <div className="section-body ">
        <div className="section-content ">
          <div>
            <h1 className="txt-title clr-yellow">Little Lemon</h1>
            <h2 className="txt-subtitle clr-white">Chicago</h2>
          </div>
          <p className="txt-lead clr-white">
            Lorem ipsum dolor sit amet consectetur. Euismod orci sed nibh
            venenatis cras in posuere amet. Faucibus ridiculus aliquam.
          </p>
          <Button text="Reserve a Table" />
        </div>
        <div className="section-content">
          <img
            className="hero-img"
            src="photo/photo-06.png"
            alt="restarant food"
          />
        </div>
      </div>
    </div>
  );
}
