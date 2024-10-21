import { useReservation } from "../components/ReservationProvider";

import BookingForm from "../forms/BookingForm";
import CustomerForm from "../forms/CustomerForm";
import ConfirmationForm from "../forms/ConfirmationForm";
import ProgressBar from "../components/ProgressBar";

export default function ReservationForms() {
  const { savedData, setSavedData, formNr, setFormNr } = useReservation();

  return (
    <div className="section">
      <div className="section-body-col">
        <ProgressBar formNr={formNr} setFormNr={setFormNr} />
        {formNr === 1 && (
          <BookingForm
            setFormNr={setFormNr}
            savedData={savedData}
            setSavedData={setSavedData}
          />
        )}
        {formNr === 2 && (
          <CustomerForm
            setFormNr={setFormNr}
            savedData={savedData}
            setSavedData={setSavedData}
          />
        )}
        {formNr === 3 && <ConfirmationForm savedData={savedData} />}
      </div>
    </div>
  );
}
