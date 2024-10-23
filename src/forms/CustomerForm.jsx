import React, { useState, useEffect } from "react";
import ResumeBox from "../components/ResumeBox";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function CustomerForm(props) {
  const [customerData, setCustomerData] = useState();

  const { setFormNr, savedData, setSavedData } = props;

  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "Insert min 3 characters")
      .required("This input is required"),
    lastName: yup.string().required("This input is required"),
    email: yup
      .string()
      .email("Insert a valid email")
      .required("This input is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const formSubmit = (data) => {
    setFormNr(3);
    setCustomerData(data);
    setSavedData({ ...savedData, ...data });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const fetchData = { ...savedData, ...data };

    console.log("dati per fetch---", fetchData);

    fetch(`/littlelemon-api/reservations/${fetchData.date.string}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        time: fetchData.time,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <form
      id="customer-form"
      className="form"
      onSubmit={handleSubmit(formSubmit)}
    >
      <fieldset className="fieldset">
        <ResumeBox savedData={savedData} />
        <legend className="txt-section">Customer details</legend>

        <label htmlFor="first-name" data-noActiveLabel>
          First name<span>*</span>
          <input
            type="text"
            placeholder="Type your name"
            className="txt-lead"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="errorMsg">{errors.firstName.message}</p>
          )}
        </label>
        <label htmlFor="lastName" data-noActiveLabel>
          Last name<span>*</span>
          <input
            type="text"
            placeholder="Type your surname"
            className="txt-lead"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="errorMsg">{errors.lastName.message}</p>
          )}
        </label>
        <label htmlFor="email" data-noActiveLabel>
          Email<span>*</span>
          <input
            type="email"
            placeholder="Type your email"
            className="txt-lead"
            {...register("email")}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </label>
        <label htmlFor="phone" data-noActiveLabel>
          Phone number
          <input
            type="text"
            placeholder="Type your phone number"
            className="txt-lead"
            data-noActiveLabel
            {...register("phone")}
          />
        </label>
      </fieldset>
      <Button
        aria-label="confirm reservation"
        text="Confirm your reservation"
      />
    </form>
  );
}
