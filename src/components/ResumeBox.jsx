import React from "react";

export default function ResumeBox(props) {
  const { savedData } = props;

  return (
    <div className="resume-box">
      <h4 className="txt-section clr-secondary">Reservation resume</h4>
      <label className="txt-paragraph-b">
        Date:
        <span className="txt-paragraph">{` ${savedData.date.dayName}, ${savedData.date.monthName} ${savedData.date.day}`}</span>
      </label>
      <label className="txt-paragraph-b">
        Time: <span className="txt-paragraph">{savedData.time}</span>
      </label>
      <label className="txt-paragraph-b">
        Dinners:
        <div>
          <span className="txt-paragraph">{` Adults x ${savedData.guest.adult}`}</span>
          {savedData.guest.children > 0 && (
            <span className="txt-paragraph">{` Children x ${savedData.guest.children}`}</span>
          )}
        </div>
      </label>
    </div>
  );
}
