import { useState, useEffect } from "react";
import Button from "./Button";
import Calendar from "./Calendar";

export default function SetDate(props) {
  const [selectedDate, setSelectedDate] = useState({});
  const [inputSelected, setInputSelected] = useState(null);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [otherDate, setOtherDate] = useState("Select another Date");

  const { updateForm, from } = props;

  useEffect(() => {
    const fullToday = `${today.dayName}, ${today.monthName} ${today.day}`;
    const fullTomorrow = `${tomorrow.dayName}, ${tomorrow.monthName} ${tomorrow.day}`;
    const fullSelectedDate = `${selectedDate.dayName}, ${selectedDate.monthName} ${selectedDate.day}`;

    setOtherDate(
      calendarVisible && Object.keys(selectedDate).length !== 0
        ? fullSelectedDate
        : "Select another Date"
    );

    updateForm(selectedDate, from);
  }, [selectedDate]);

  const todayDate = new Date();
  const tomorrowDate = new Date(todayDate);
  tomorrowDate.setDate(todayDate.getDate() + 1);

  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
    dayName: new Date().toLocaleString("en-US", { weekday: "long" }),
    monthName: new Date().toLocaleString("en-US", { month: "short" }),
  };

  const tomorrow = {
    year: tomorrowDate.getFullYear(),
    month: tomorrowDate.getMonth(),
    day: tomorrowDate.getDate(),
    dayName: tomorrowDate.toLocaleString("en-US", { weekday: "long" }),
    monthName: tomorrowDate.toLocaleString("en-US", { month: "short" }),
  };

  const todayString = `Today - ${today.dayName}, ${today.monthName} ${today.day}`;
  const tomorrowString = `Tomorrow - ${tomorrow.dayName}, ${tomorrow.monthName} ${tomorrow.day}`;

  ///////////////////////////////

  const selectDate = (dateObj) => {
    setSelectedDate(dateObj);
  };

  return (
    <fieldset className="fieldset">
      <legend className="txt-section">{props.title}</legend>
      <span className="txt-paragraph">{props.description}</span>
      <div className="date-wrapper">
        <label
          htmlFor="today"
          className={inputSelected === "today" ? "input-selected" : ""}
        >
          <input
            id="today"
            name="radio-date"
            value="today"
            type="radio"
            onClick={(e) => {
              selectDate(today);
              setCalendarVisible(false);
              setInputSelected(e.target.id);
            }}
          />
          {todayString}
        </label>
        <label
          htmlFor="tomorrow"
          className={inputSelected === "tomorrow" ? "input-selected" : ""}
        >
          <input
            id="tomorrow"
            name="radio-date"
            value="tomorrow"
            type="radio"
            onClick={(e) => {
              selectDate(tomorrow);
              setCalendarVisible(false);
              setInputSelected(e.target.id);
            }}
          />
          {tomorrowString}
        </label>
        <label
          htmlFor="other"
          className={inputSelected === "other" ? "input-selected" : ""}
        >
          <input
            id="other"
            name="radio-date"
            value="other"
            type="radio"
            onClick={(e) => {
              setCalendarVisible(true);
              selectDate({});
              setInputSelected(e.target.id);
            }}
          />
          {otherDate}
        </label>
        {calendarVisible && (
          <Calendar selectDate={selectDate} finalDate={selectedDate} />
        )}
      </div>
    </fieldset>
  );
}
