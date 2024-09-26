import React, { useState, useEffect } from "react";
import Counter from "./Counter";

export default function SetGuest(props) {
  const [guestSelected, setGuestSelected] = useState({ adult: 0, chidlren: 0 });

  const { updateForm, from } = props;

  const updateGuest = (val, from) => {
    setGuestSelected(
      from === "adult"
        ? { ...guestSelected, adult: val }
        : { ...guestSelected, chidlren: val }
    );
  };

  useEffect(() => {
    updateForm(guestSelected, from);
  }, [guestSelected]);

  return (
    <fieldset className="fieldset">
      <legend className="txt-section">{props.title}</legend>
      <span className="txt-paragraph">{props.description}</span>
      <div className="guest-wrapper">
        <label className="txt-paragraph-b" htmlFor="adult">
          Adults
          <Counter updateGuest={updateGuest} from="adult" name="adult" />
        </label>
        <label className="txt-paragraph-b" htmlFor="children">
          <div>
            Children
            <span className="txt-sub-paragraph">high chairs needed</span>
          </div>
          <Counter updateGuest={updateGuest} from="chidlren" name="children" />
        </label>
      </div>
    </fieldset>
  );
}
