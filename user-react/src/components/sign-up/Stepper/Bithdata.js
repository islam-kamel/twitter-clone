import React, {useEffect, useState} from "react";

type birthdate = {
    year: string,
    month: string,
    day: string
}

const initialDate: birthdate = {
    year: "",
    month: "",
    day: ""
}
type FormData = {
    fullname: string,
    email: string,
    birthdate: string,
    password: string
}

export const Birthdate = (props: { updateData: Function, data: FormData}) => {

    const [birthdate, setBirthdate] = useState(initialDate);

    useEffect(() => {
        const day = document.querySelector('select[name="day"]');
        const month = document.querySelector('select[name="month"]');
        const year = document.querySelector('select[name="year"]');

        for (let i= 0; i < year.childElementCount; i++ ) {
            if (year.options[i].text === props?.data.birthdate.split('-')[0]){
                year.selectedIndex = i;
            }
        }
        month.selectedIndex = props?.data.birthdate.split('-')[1];
        day.selectedIndex = props?.data.birthdate.split('-')[2];

    }, [props])


    useEffect(() => {
        const formattedDate = `${birthdate.year}-${birthdate.month}-${birthdate.day}`;
        props?.updateData({birthdate: formattedDate})
    }, [birthdate])

    const handleDayChange = (e) => {
        setBirthdate({...birthdate, day: e.target.value});
    };

    const handleMonthChange = (e) => {
        setBirthdate({...birthdate, month: e.target.value});
    };

    const handleYearChange = (e) => {
        setBirthdate({...birthdate, year: e.target.value});
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
                        // value={birthdate.month}
                        name={"month"}
                        onChange={handleMonthChange}
                        required={true}
                    >
                        <option value="" selected disabled></option>
                        {[...Array(12)].map((_, i) => (<option key={i} value={i + 1}>
                            {new Date(`${i + 1}/1/1970`).toLocaleString("default", {month: "long"})}
                        </option>))}
                    </select>
                    <label htmlFor="month" className={"fw-light"}>Month</label>
                </div>
                <div className="col form-floating">
                    <select
                        className="form-select fw-light"
                        // value={birthdate.day}
                        name={"day"}
                        onChange={handleDayChange}
                        required={true}
                    >
                        <option value="" disabled selected></option>
                        {[...Array(31)].map((_, i) => (<option key={i} value={i + 1}>
                            {i + 1}
                        </option>))}
                    </select>
                    <label htmlFor="day" className={"fw-light"}>Day</label>
                </div>
                <div className="col form-floating">
                    <select
                        className="form-select fw-light"
                        // value={birthdate.year}
                        name={"year"}
                        onChange={handleYearChange}
                        required={true}
                    >
                        <option value="" selected disabled></option>
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
