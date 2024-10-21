import React, { useState, useEffect } from "react";

const occasions = [
  "Birthday",
  "Anniversary",
  "Surprise",
  "Weeding proposal",
  "Other special day",
];

export default function SetOccasion(props) {
  const [occasionSelected, setOccasionSelected] = useState([]);
  const [firstReload, setFirstReload] = useState(true);

  const {
    savedData,
    register,
    setValue,
    formState: { errors },
  } = props;

  /////useEffect////////////////////////

  useEffect(() => {
    if (savedData !== null) {
      if (firstReload) {
        setFirstReload(!firstReload);
        setValue("occasion", savedData.occasion);
        setOccasionSelected(savedData.occasion);
        return;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /////function////////////////////////

  const handleClick = (e) => {
    let newOccasion;

    if (occasionSelected.includes(e)) {
      newOccasion = occasionSelected.filter((el) => el !== e);
    } else {
      newOccasion = [...occasionSelected, e];
    }

    setOccasionSelected(newOccasion);
    setValue("occasion", newOccasion);
  };

  return (
    <fieldset className="fieldset">
      <legend className="txt-section">{props.title}</legend>
      <span className="txt-paragraph">{props.description}</span>
      <div className="time-wrapper">
        {occasions.map((e) => {
          return (
            <label
              key={e}
              htmlFor={e}
              className={`txt-lead-b ${
                occasionSelected?.includes(e) ? "selected" : ""
              }`}
            >
              <input
                id={e}
                value={e}
                type="checkbox"
                onClick={() => handleClick(e)}
                {...register("occasion")}
              />
              {e}
            </label>
          );
        })}
      </div>
      {errors?.occasion && (
        <p className="errorMsg">{errors.occasion.message}</p>
      )}
    </fieldset>
  );
}
