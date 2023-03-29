import React, {useState} from "react";

export const Birthdate = () => {
    // eslint-disable-next-line no-unused-vars
    const [birthdate, setBirthdate] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

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

    return (<form>
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
        <div className="row gy-4 gx-3">

            <div className="col-5">
                <select
                    className="form-select py-3"
                    value={month}
                    onChange={handleMonthChange}
                >
                    <option value="">Month</option>
                    {[...Array(12)].map((_, i) => (<option key={i} value={i + 1}>
                        {new Date(`${i + 1}/1/1970`).toLocaleString('default', {month: 'long'})}
                    </option>))}
                </select>
            </div>
            <div className="col">
                <select
                    className="form-select py-3"
                    value={day}
                    onChange={handleDayChange}
                >
                    <option value="">Day</option>
                    {[...Array(31)].map((_, i) => (<option key={i} value={i + 1}>
                        {i + 1}
                    </option>))}
                </select>
            </div>
            <div className="col">
                <select
                    className="form-select py-3"
                    value={year}
                    onChange={handleYearChange}
                >
                    <option value="">Year</option>
                    {[...Array(100)].map((_, i) => (<option key={i} value={2023 - i}>
                        {2023 - i}
                    </option>))}
                </select>
            </div>
        </div>
    </form>);
};
