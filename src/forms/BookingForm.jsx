import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SetDate from "../components/SetDate";
import SetTime from "../components/SetTime";
import SetGuest from "../components/SetGuest";
import SetOccasion from "../components/SetOccasion";
import Button from "../components/Button";

export default function BookingForm(props) {
  const { setFormNr, savedData, setSavedData } = props;

  ///////yup validation///////////////////////

  const validationSchema = yup.object().shape({
    date: yup
      .object({
        year: yup.number().required(),
        month: yup.number().required(),
        day: yup.number().required(),
        dayName: yup.string().required(),
        monthName: yup.string().required(),
        string: yup.string().required(),
      })
      .required("Please select a date"),
    time: yup.string().required("Please select a time"),
    guest: yup
      .object({
        adult: yup
          .number()
          .min(1, "At least 1 adult is required")
          .required("At least 1 adult is required"),
        children: yup.number(),
      })
      .required("Please select atleast 1 adult"),
    occasion: yup.array().notRequired(),
  });

  ///////useForm///////////////////////

  const propsUseForm = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      date: null,
      guest: { adult: 0, children: 0 },
      occasion: null,
    },
  });

  const {
    // eslint-disable-next-line no-unused-vars
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
    // eslint-disable-next-line no-unused-vars
    watch,
    // eslint-disable-next-line no-unused-vars
    setValue,
  } = propsUseForm;

  ///////functions//////////////////////

  const formSubmit = (data) => {
    console.log("submit completed---------", data);
    setFormNr(2);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setSavedData(data);
  };

  /////////////////////////////

  return (
    <form
      id="details-form"
      className="form"
      onSubmit={handleSubmit(formSubmit)}
    >
      <SetDate
        title="1. SELECT DATE"
        description="Select an available date for your reservation."
        {...propsUseForm}
        savedData={savedData}
      />

      <SetTime
        title="2. SELECT TIME"
        description="Select the perfect hour for your reservation."
        {...propsUseForm}
        savedData={savedData}
      />
      <SetGuest
        title="3. SELECT GUESTS"
        description="Select the number of dinners."
        {...propsUseForm}
        savedData={savedData}
      />
      <SetOccasion
        title="4.Occasion type"
        description="Let us know if it's a special day for you and your friends, and we'll do our best to meet your expectations."
        {...propsUseForm}
        savedData={savedData}
      />

      <Button arial-label="continue reservation procedure" text="Continue" />
    </form>
  );
}
