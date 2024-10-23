import ReservationHero from "./sections/ReservationHero";
import ReservationForms from "./sections/ReservationForms";
import { ReservationProvider } from "./components/ReservationProvider";

export default function Reservation() {
  return (
    <>
      <ReservationProvider>
        <ReservationHero />
        <ReservationForms />
      </ReservationProvider>
    </>
  );
}
