import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="section bg-green">
      <div className="section-body ">
        <div className="section-content ">
          <div>
            <h1 className="txt-title clr-yellow">Little Lemon</h1>
            <h2 className="txt-subtitle clr-white">Chicago</h2>
          </div>
          <p className="txt-lead clr-white">Lorem ipsum</p>
          <Link
            to="/reservation"
            aria-label="navigate to reservation"
            className="link-button button-primary txt-lead-b"
          >
            Reserve a Table
          </Link>
        </div>
        <div className="section-free">
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
