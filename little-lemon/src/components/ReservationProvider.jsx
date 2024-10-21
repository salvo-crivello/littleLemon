import { createContext, useContext, useState } from "react";

export const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const [savedData, setSavedData] = useState(null);
  const [formNr, setFormNr] = useState(1);

  return (
    <ReservationContext.Provider
      value={{ savedData, setSavedData, formNr, setFormNr }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => useContext(ReservationContext);
