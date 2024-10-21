import React from "react";
import Counter from "./Counter";

export default function SetGuest(props) {
  const {
    setValue,
    watch,
    savedData,
    formState: { errors },
  } = props;

  return (
    <fieldset className="fieldset">
      <legend className="txt-section">{props.title}</legend>
      <span className="txt-paragraph">{props.description}</span>
      <div className="guest-wrapper">
        <label
          className="txt-paragraph-b noActiveLabel"
          data-noActiveLabel
          htmlFor="adult"
        >
          Adults
          <Counter
            setValue={setValue}
            watch={watch}
            savedData={savedData}
            from="adult"
          />
        </label>
        <label
          className="txt-paragraph-b"
          data-noActiveLabel
          htmlFor="children"
        >
          <div>
            Children
            <span className="txt-sub-paragraph">high chairs needed</span>
          </div>
          <Counter
            setValue={setValue}
            watch={watch}
            savedData={savedData}
            from="children"
          />
        </label>
      </div>
      {errors.guest && <p className="errorMsg">{errors.guest.adult.message}</p>}
    </fieldset>
  );
}
