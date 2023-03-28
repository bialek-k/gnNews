import { useState, useEffect } from "react";
import dayjs from "dayjs";

export const useTimer = () => {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(dayjs());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return { time };
};
