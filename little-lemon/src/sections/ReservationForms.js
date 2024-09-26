import { useState, useEffect } from "react";

import Button from "../components/Button";
import SetDate from "../components/SetDate";
import SetTime from "../components/SetTime";
import SetGuest from "../components/SetGuest";

export default function ReservationForms() {
  const [formData, setFormData] = useState({ date: {}, time: null, guest: {} });
  const [error, setError] = useState(true);

  const errorDate = "please select a date";
  const errorTime = "please select a time";
  const errorGuest = "please select atleast an adult";

  useEffect(() => {
    let error = true;
    if (
      Object.keys(formData.date).length !== 0 &&
      formData.time !== null &&
      formData.guest.adult !== 0
    ) {
      error = false;
    } else {
      error = true;
    }
    setError(error);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (error) {
      console.log("error");
      return;
    }
    console.log("submit completed---------", formData);
  };

  const updateForm = (val, from) => {
    let updatedVal = { ...formData };

    if (from === "date") {
      updatedVal = { ...updatedVal, date: val };
    }

    if (from === "time") {
      updatedVal = { ...updatedVal, time: val };
    }

    if (from === "guest") {
      updatedVal = { ...updatedVal, guest: val };
    }

    setFormData(updatedVal);
  };

  return (
    <div className="section">
      <div className="section-body-col">
        <form className="form" onSubmit={handleSubmit}>
          <SetDate
            title="1. SELECT DATE"
            description="Select an available date for your reservation."
            updateForm={updateForm}
            from="date"
          />
          <SetTime
            title="2. SELECT TIME"
            description="Select the perfect hour for your reservation."
            updateForm={updateForm}
            from="time"
          />
          <SetGuest
            title="3. SELECT GUESTS"
            description="Select the number of dinners."
            updateForm={updateForm}
            from="guest"
          />
          <Button disabled={error} text="Continue" />
        </form>
      </div>
    </div>
  );
}
