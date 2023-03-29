import { Timestamp } from "firebase/firestore";

export const getPreviousDay = (num) => {
  const date = new Date();

  date.setDate(date.getDate() - num);

  const timestamp = Timestamp.fromDate(date);

  return timestamp;
};