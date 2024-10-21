import React, { useState, useEffect } from "react";
import "../MirajeBackEnd";

const times = [
  { time: "19:00", disable: false },
  { time: "19:30", disable: false },
  { time: "20:00", disable: false },
  { time: "20:30", disable: false },
  { time: "21:00", disable: false },
  { time: "21:30", disable: false },
];

export default function SetTime(props) {
  const [timesSlot, setTimesSlot] = useState(times);
  const [timeSelected, setTimeSelected] = useState();
  const [firstReload, setFirstReload] = useState(true);

  const { savedData, watch, register, setValue, formState } = props;
  const errors = formState?.errors;

  const dateSelected = watch("date");

  //_____________________________________________use effect for saved data

  useEffect(() => {
    if (savedData !== null) {
      if (firstReload) {
        setFirstReload(!firstReload);
        setValue("time", savedData.time);
        setTimeSelected(savedData.time);
        return;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //_____________________________________________use effect for updating times slots

  useEffect(() => {
    console.log("USE EFFECT PRIMA DEL RETURN", dateSelected); //chatgpt questo ritorna null sulla console
    console.log("------", watch("date"));

    if (dateSelected === null) return;

    const dateSelectedString = `${dateSelected?.day}-${dateSelected?.month}-${dateSelected?.year}`;

    console.log("USE EFFECT  DOPO RETURN", dateSelectedString); //chatgpt questo non avviene
    // fetch simulation to MirageJS backend

    async function fetchData() {
      //chatgpt questo non avvinene
      fetch(`littlelemon-api/reservations/${dateSelectedString}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Data from API:", data);
          setTimesSlot(data);
        })
        .catch((error) => console.error("Error:", error));
    }

    fetchData();
  }, [dateSelected]);

  //_____________________________________________render

  return (
    <fieldset className="fieldset">
      <legend className="txt-section">{props.title}</legend>
      <span className="txt-paragraph">{props.description}</span>
      <div className="time-wrapper">
        {timesSlot.map((e) => {
          return (
            <label
              key={e.time}
              htmlFor={e.time}
              disabled={e.disable}
              data-testid="timeSlot"
              className={`txt-lead-b ${
                e.time === timeSelected ? "selected" : ""
              }`}
            >
              <input
                id={e.time}
                value={e.time}
                type="radio"
                disabled={e.disable}
                onClick={() => setTimeSelected(e.time)}
                {...register("time")}
              />
              {e.time}
            </label>
          );
        })}
      </div>
      {errors?.time && <p className="errorMsg">{errors.time.message}</p>}
    </fieldset>
  );
}
