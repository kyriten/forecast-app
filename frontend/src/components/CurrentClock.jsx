import { useEffect, useState } from "react";

export default function CurrentClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return <div className="text-center">{time.toLocaleTimeString()}</div>;
}
