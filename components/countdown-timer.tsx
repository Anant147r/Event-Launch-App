import { CalculateTimeToEvent } from "@/utils/countdown-utils";
import { type Framework } from "@/utils/framework-utils";
import { useState, useEffect } from "react";

export const CountdownTimer = ({
  currentFramework,
}: {
  currenFramework: Framework;
}) => {
  const [countdown, setCountdown] = useState(CalculateTimeToEvent());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(CalculateTimeToEvent());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className="flex gap-[10px] text-center"></div>;
};
