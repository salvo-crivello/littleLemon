import React from "react";
import IconConfirmation from "../icon/IconConfirmation";
import ResumeBox from "../components/ResumeBox";

export default function ConfirmationForm(props) {
  const { savedData } = props;

  console.log(savedData);
  return (
    <div id="confirmation-form" className="form">
      <fieldset className="fieldset">
        <h1 className="txt-title clr-yellow">Reservation confirmed</h1>
        <div className="img-icon-box">
          <img src="/photo/lemon.png" alt="logo" />
          <IconConfirmation />
        </div>

        <h2 className="txt-subtitle ">
          {`Congratulation! \n Reservation completed successfully.`}
        </h2>
        <p className="txt-lead ">You’ll receive an email shortly.</p>
        <ResumeBox savedData={savedData} />
      </fieldset>
    </div>
  );
}
