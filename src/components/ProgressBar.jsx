import React from "react";

export default function ProgressBar(props) {
  const { formNr, setFormNr } = props;

  return (
    <div aria-label="Progress" className="progress-bar">
      <div className="progress-bar">
        <button
          className={`txt-paragraph-b progress-step ${
            formNr === 1 ? "active" : ""
          } ${formNr > 1 ? "completed" : ""}`}
          disabled={formNr === 1}
          onClick={() => setFormNr(1)}
        >
          1
        </button>
        <span className="step-line"></span>
        <button
          className={`txt-paragraph-b progress-step ${
            formNr === 2 ? "active" : ""
          } ${formNr > 2 ? "completed" : ""}`}
          disabled
        >
          2
        </button>
        <span className="step-line"></span>
        <button
          className={`txt-paragraph-b progress-step ${
            formNr === 3 ? "completed" : ""
          }`}
          disabled
        >
          3
        </button>
      </div>
    </div>
  );
}
