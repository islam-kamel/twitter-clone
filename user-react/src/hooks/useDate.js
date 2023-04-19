import {useCallback, useState} from "react";

export function useDate(initialValue) {
  const [date, setDate] = useState(initialValue);

  const formatDate = useCallback((value) => {
    let obj = value ?? date;
    const {year, month, day} = obj;
    return `${year}-${month}-${day}`;
  }, [date])

  const fromStringToObject = useCallback((value) => {
    const date = new Date(value);
    return {day: date.getUTCDate(), year: date.getUTCFullYear(), month: date.getMonth() + 1}
  }, [])

  const shortDate = useCallback((value) => {
    let obj = date;
    if (value) {
      obj = value;
    }
    return new Date(obj.year, obj.month - 1, obj.day).toLocaleString(true, {dateStyle: "medium"})
  }, [date])

  return {date, setDate, formatDate, fromStringToObject, shortDate}
}
