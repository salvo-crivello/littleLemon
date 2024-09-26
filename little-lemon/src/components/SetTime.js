import { useState, useEffect } from "react";

const times = [
  { time: "19:00", disable: true },
  { time: "19:30", disable: false },
  { time: "20:00", disable: false },
  { time: "20:30", disable: false },
  { time: "21:00", disable: false },
  { time: "21:30", disable: false },
];

export default function SetTime(props) {
  const [timeSelected, setTimeSelected] = useState();

  const { updateForm, from } = props;

  useEffect(() => {
    updateForm(timeSelected, from);
  }, [timeSelected]);

  return (
    <fieldset className="fieldset">
      <legend className="txt-section">{props.title}</legend>
      <span className="txt-paragraph">{props.description}</span>
      <div className="time-wrapper">
        {times.map((e) => {
          return (
            <label
              key={e.time}
              htmlFor={e.time}
              disabled={e.disable}
              className={`txt-lead-b ${
                e.time === timeSelected ? "selected" : ""
              }`}
            >
              <input
                id={e.time}
                name="radio-time"
                value={e.time}
                type="radio"
                disabled={e.disable}
                onClick={() => setTimeSelected(e.time)}
              />
              {e.time}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
