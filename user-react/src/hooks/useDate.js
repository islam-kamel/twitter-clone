import {useState} from "react";

export function useDate(initialValue) {
  const [date, setDate] = useState(initialValue);

  function formatDate(value) {
    let obj = value ?? date;
    const {year, month, day} = obj;
    return `${year}-${month}-${day}`;
  }

  function fromStringToObject(value) {
    const date = new Date(value);
    return {day: date.getUTCDate(), year: date.getUTCFullYear(), month: date.getMonth() + 1}
  }

  function shortDate(value) {
    let obj = date;
    if (value) {
      obj = value;
    }
    return new Date(obj.year, obj.month - 1, obj.day).toLocaleString(true, {dateStyle: "medium"})
  }

  return {date, setDate, formatDate, fromStringToObject, shortDate}
}
