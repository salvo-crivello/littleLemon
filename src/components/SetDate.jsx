import { useState, useEffect } from "react";
import Calendar from "./Calendar";

export default function SetDate(props) {
  const [selectedDate, setSelectedDate] = useState({});
  const [inputSelected, setInputSelected] = useState(null);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [otherDate, setOtherDate] = useState("Select another Date");
  const [firstReload, setFirstReload] = useState(true);

  const {
    // eslint-disable-next-line no-unused-vars
    register,
    setValue,
    formState: { errors },
    savedData,
  } = props;

  ///////////useEffect//////////////

  useEffect(() => {
    if (savedData === null) return;

    const savedObj = JSON.stringify(Object.values(savedData.date));
    const todayObj = JSON.stringify(Object.values(today));
    const tomorrowObj = JSON.stringify(Object.values(tomorrow));
    const fullOtherDate = `${savedData.date.dayName}, ${savedData.date.monthName} ${savedData.date.day}`;

    const reloadData = (selection, value) => {
      setInputSelected(selection);
      setValue("date", value, { shouldValidate: true });
    };

    if (savedObj === todayObj) {
      reloadData("today", today);
    } else if (savedObj === tomorrowObj) {
      reloadData("tomorrow", tomorrow);
    } else {
      reloadData("other", savedData.date);
    }

    setOtherDate(
      savedObj !== todayObj && savedObj !== tomorrowObj
        ? fullOtherDate
        : "Select another date"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //
  //

  useEffect(() => {
    if (savedData !== null) {
      if (firstReload) {
        console.log("1 blocco");
        setFirstReload(!firstReload);
        return;
      }
    }

    const fullSelectedDate = `${selectedDate.dayName}, ${selectedDate.monthName} ${selectedDate.day}`;

    let otherDateField;

    if (calendarVisible && Object.keys(selectedDate).length !== 0) {
      otherDateField = fullSelectedDate;
    } else {
      otherDateField = "Select another date";
    }

    setOtherDate(otherDateField);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  //////////const/////////////////////////

  const todayDate = new Date();
  const tomorrowDate = new Date(todayDate);
  tomorrowDate.setDate(todayDate.getDate() + 1);

  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
    dayName: new Date().toLocaleString("en-US", { weekday: "long" }),
    monthName: new Date().toLocaleString("en-US", { month: "short" }),
    string: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
  };

  const tomorrow = {
    year: tomorrowDate.getFullYear(),
    month: tomorrowDate.getMonth(),
    day: tomorrowDate.getDate(),
    dayName: tomorrowDate.toLocaleString("en-US", { weekday: "long" }),
    monthName: tomorrowDate.toLocaleString("en-US", { month: "short" }),
    string: `${tomorrowDate.getDate()}-${tomorrowDate.getMonth()}-${tomorrowDate.getFullYear()}`,
  };

  const todayString = `Today - ${today.dayName}, ${today.monthName} ${today.day}`;
  const tomorrowString = `Tomorrow - ${tomorrow.dayName}, ${tomorrow.monthName} ${tomorrow.day}`;

  ///////functions/////////////

  const selectDate = (dateObj) => {
    setSelectedDate(dateObj);
  };

  const handleOnClick = (e, value) => {
    selectDate(value);
    setCalendarVisible(false);
    setInputSelected(e.target.id);
    setValue("date", value, { shouldValidate: true });
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
            type="radio"
            onClick={(e) => handleOnClick(e, today)}
          />
          {todayString}
        </label>
        <label
          htmlFor="tomorrow"
          className={inputSelected === "tomorrow" ? "input-selected" : ""}
        >
          <input
            id="tomorrow"
            type="radio"
            onClick={(e) => handleOnClick(e, tomorrow)}
          />
          {tomorrowString}
        </label>
        <label
          htmlFor="other"
          className={inputSelected === "other" ? "input-selected" : ""}
        >
          <input
            data-testid="other"
            id="other"
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
          <Calendar
            selectDate={selectDate}
            finalDate={selectedDate}
            setCalendarVisible={setCalendarVisible}
            {...props}
          />
        )}
      </div>
      {errors?.date && <p className="errorMsg">{errors.date.message}</p>}
    </fieldset>
  );
}
