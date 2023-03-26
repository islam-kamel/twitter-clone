import React, { useState } from 'react';

export const Birthdate = () => {
  const [birthdate, setBirthdate] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleBirthdateChange = () => {
    const formattedDate = `${year}-${month}-${day}`;
    setBirthdate(formattedDate);
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
    handleBirthdateChange();
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    handleBirthdateChange();
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    handleBirthdateChange();
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="birthdate" className="form-label">
          Birthdate
          

          </label>
       
     
      </div>
      {/* <div className="">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</div>
       */}
      <div className="row">
     
        <div className="col">
          <select
            className="form-select"
            value={day}
            onChange={handleDayChange}
          >
            <option value="">Day</option>
            {[...Array(31)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <select
            className="form-select"
            value={month}
            onChange={handleMonthChange}
          >
            <option value="">Month</option>
            {[...Array(12)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <select
            className="form-select"
            value={year}
            onChange={handleYearChange}
          >
            <option value="">Year</option>
            {[...Array(100)].map((_, i) => (
              <option key={i} value={2023 - i}>
                {2023 - i}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
};
