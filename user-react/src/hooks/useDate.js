import {useState} from "react";

type BirthDate = { year: number, month: number, day: number }

export function useDate(initialValue: BirthDate) {
    const [date, setDate] = useState(initialValue);

    function formatDate(value: BirthDate) {
        let obj = value ?? date;
        const {year, month, day} = obj;
        return `${year}-${month}-${day}`;
    }

    function fromStringToObject(value: string) {
        const date = new Date(value);
        return {day: date.getUTCDate(), year: date.getUTCFullYear(), month: date.getMonth() + 1}
    }

    function shortDate(value: string) {
        let obj = date;
        if (value) {
            obj = value;
        }
        return new Date(obj.year, obj.month - 1, obj.day).toLocaleString(true, {dateStyle: "medium"})
    }

    return {date, setDate, formatDate, fromStringToObject, shortDate}
}
