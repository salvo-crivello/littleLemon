import React, { useState, useEffect, useRef } from "react";

export default function Calendar(props) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const day = new Date().getDate();
  const [daysArray, setDaysArray] = useState([]);
  const [closing, setClosing] = useState(false);
  const calendarRef = useRef(null);

  const { selectDate, finalDate, setCalendarVisible, setValue } = props;

  /////////useEffects////////////////

  useEffect(() => {
    const numberOfDays = new Date(year, month + 1, 0).getDate();

    const firstOfMonth = new Date(year, month, 1).getDay();

    const daysArray = Array.from({ length: numberOfDays }).map(
      (element, index) => {
        return (element = index + 1);
      }
    );

    const prevDaysArray = Array.from({
      length: firstOfMonth === 0 ? 7 - 1 : firstOfMonth - 1,
    });

    setDaysArray([...prevDaysArray, ...daysArray]);
  }, [month, year]);

  //
  //

  useEffect(() => {
    document.addEventListener("mousedown", clickOutsideCalendar);

    return () => {
      document.removeEventListener("mousedown", clickOutsideCalendar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //////////const///////////////

  const getMonthName = (getMonth) => {
    let date = new Date();
    date.setMonth(getMonth);
    return date.toLocaleString("en-US", { month: "long" });
  };

  const monthName = getMonthName(month);

  /////////functions////////////////

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
      string: `${anotherDate.getDate()}-${anotherDate.getMonth()}-${anotherDate.getFullYear()}`,
    };
    selectDate(otherDate);

    setValue("date", otherDate, { shouldValidate: true });

    setClosing(true);

    setTimeout(() => {
      setCalendarVisible(false);
    }, 100);
  };

  const clickOutsideCalendar = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setCalendarVisible(false);
    }
  };

  /////////////////////////

  return (
    <div
      data-testid="calendar"
      ref={calendarRef}
      id="calendar"
      className={`calendar-wrapper ${closing ? "close" : ""}`}
    >
      <div
        data-testid="calendar-page"
        className="txt-sub-paragraph-b calendar-bar"
      >
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
        {daysArray.map((e, index) => {
          return (
            <label
              key={e ? e : `empty-${index}`}
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
                data-testid="calendar-input"
                type="radio"
                name="date"
                value={e}
                className={`txt-paragraph`}
                disabled={
                  (e < day && month === new Date().getMonth()) ||
                  e === finalDate.day
                }
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
