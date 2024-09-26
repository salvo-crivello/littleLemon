import React, { useState, useEffect } from "react";

export default function Calendar(props) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const day = new Date().getDate();
  const [daysArray, setDaysArray] = useState([]);

  const { selectDate, finalDate } = props;

  useEffect(() => {
    const numberOfDays = new Date(year, month + 1, 0).getDate();

    const firstOfMonth = new Date(year, month, 1).getDay();

    const daysArray = Array.from({ length: numberOfDays }).map(
      (element, index) => {
        return (element = index + 1);
      }
    );

    const prevDaysArray = Array.from({
      length: firstOfMonth,
    });

    setDaysArray([...prevDaysArray, ...daysArray]);
  }, [month, year]);

  const getMonthName = (getMonth) => {
    let date = new Date();
    date.setMonth(getMonth);
    return date.toLocaleString("en-US", { month: "long" });
  };

  const monthName = getMonthName(month);

  const prevMonth = () => {
    if (month === new Date().getMonth()) return;

    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    setMonth(prevMonth);
    setYear(prevYear);
  };

  const nextMonth = () => {
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    setMonth(nextMonth);
    setYear(nextYear);
  };

  const selection = (selectedDay) => {
    const anotherDate = new Date(year, month, selectedDay);
    const otherDate = {
      year: year,
      month: month,
      day: selectedDay,
      dayName: anotherDate.toLocaleString("en-US", { weekday: "long" }),
      monthName: anotherDate.toLocaleString("en-US", { month: "short" }),
    };
    selectDate(otherDate);
  };

  return (
    <div id="calendar" className="calendar-wrapper">
      <div className="txt-sub-paragraph-b calendar-bar">
        <span
          onClick={prevMonth}
          className={
            month === new Date().getMonth()
              ? "back-disable txt-lead-b "
              : "txt-lead-b "
          }
        >
          {"<"}
        </span>
        {monthName} {year}
        <span className="txt-lead-b" onClick={nextMonth}>
          {">"}
        </span>
      </div>
      <div className="txt-lead week">
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fr</span>
        <span>Sa</span>
        <span>Su</span>
      </div>
      <div className="calendar">
        {daysArray.map((e) => {
          return (
            <label
              className={`txt-sub-paragraph ${
                e === day && month === new Date().getMonth() ? "today" : ""
              } ${
                e < day && month === new Date().getMonth() ? "day-disable" : ""
              } ${
                e === finalDate.day && month === finalDate.month
                  ? "day-selected"
                  : ""
              }`}
            >
              <input
                type="radio"
                name="radio-calendar"
                value={e}
                className={`txt-paragraph`}
                disabled={e < day || e === finalDate.day}
                onClick={() => selection(e)}
              />
              {e}
            </label>
          );
        })}
      </div>
    </div>
  );
}
