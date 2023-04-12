import React from "react";
import type {FormData} from "../SignUp";

export const Birthdate = (props: { updateData: Function, data: FormData }) => {

  function updateBirthDate(value: {}) {
    props?.updateData({...props?.data, birthdate: {...props?.data?.birthdate, ...value}})
  }

  const handleDayChange = (e) => {
    updateBirthDate({day: e.target.value})
  };

  const handleMonthChange = (e) => {
    updateBirthDate({month: e.target.value})
  };

  const handleYearChange = (e) => {
    updateBirthDate({year: e.target.value})
  };

  return (
    <div>
      <div className="row row-cols-1 mb-4">
            <span
              className={"d-inline-block fw-bold mb-1"}
            >
                Birthdate
            </span>
        <span
          className={"d-inline-block text-muted fw-light text-break"}
          style={{fontSize: 14}}
        >
                This will not be shown publicly.
                Confirm your own age, even if this account
                is for a business, a pet, or something else.
            </span>
      </div>
      <div className="row gy-4 gx-1">
        <div className="col-5 form-floating">
          <select
            className="form-select fw-light"
            value={props?.data?.birthdate?.month}
            name={"month"}
            onChange={handleMonthChange}
            required={true}
          >
            <option value="" disabled></option>
            {[...Array(12)].map((_, i) => (<option key={i} value={i + 1}>
              {new Date(`${i + 1}/1/1970`).toLocaleString("default", {month: "long"})}
            </option>))}
          </select>
          <label htmlFor="month" className={"fw-light"}>Month</label>
        </div>
        <div className="col form-floating">
          <select
            className="form-select fw-light"
            value={props?.data?.birthdate?.day}
            name={"day"}
            onChange={handleDayChange}
            required={true}
          >
            <option value="" disabled></option>
            {[...Array(31)].map((_, i) => (<option key={i} value={i + 1}>
              {i + 1}
            </option>))}
          </select>
          <label htmlFor="day" className={"fw-light"}>Day</label>
        </div>
        <div className="col form-floating">
          <select
            className="form-select fw-light"
            value={props?.data?.birthdate?.year}
            name={"year"}
            onChange={handleYearChange}
            required={true}
          >
            <option value="" disabled></option>
            {[...Array(100)].map((_, i) => (<option key={i} value={2023 - i}>
              {2023 - i}
            </option>))}
          </select>
          <label htmlFor="year" className={"fw-light"}>Year</label>
        </div>
      </div>
    </div>
  );
};
