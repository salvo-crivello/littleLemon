import QuoteCarousel from "../components/QuoteCarousel";

export default function Testimonials() {
  return (
    <div className="section bg-green testimonials">
      <div className="section-body-col">
        <div className="section-inline">
          <h1 className="txt-title clr-yellow">Testimonials</h1>
          <p className="txt-lead clr-white">What our clients say about us.</p>
        </div>
        <QuoteCarousel />
      </div>
    </div>
  );
}
