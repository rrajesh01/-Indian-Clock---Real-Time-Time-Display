import { useState, useEffect } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="current-time">
      Current Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
