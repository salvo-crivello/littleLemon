import { useContext } from "react";
import { ReservationContext } from "../components/ReservationProvider";

export default function ReservationHero() {
  const { formNr } = useContext(ReservationContext);

  if (formNr > 1) return;

  return (
    <div className="section bg-green reservation">
      <img
        className="bg-img"
        src="/photo/photo-reserve.jpg"
        alt="background reserve"
      />
      <div className="section-body">
        <div className="section-content">
          <h1 className="txt-title clr-yellow">Reserve your table</h1>
          <p className="txt-lead clr-white">
            Follow these easy to step to reserve your table.
          </p>
        </div>
      </div>
    </div>
  );
}
