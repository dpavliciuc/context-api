import { useEffect, useState } from "react";

export default function CountdownBar({
  duration = 5000,
  height = "h-4",
  label = "Repeating countdown",
  color = "from-green-400 to-emerald-500",
  onExpire = () => {},
  repeat = true,
}) {
  const totalSeconds = Math.round(duration / 1000);
  const [resetKey, setResetKey] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);

  useEffect(() => {
    setSecondsLeft(totalSeconds);
    if (!repeat) return;
    const interval = setInterval(() => {
      setResetKey((k) => k + 1);
      setSecondsLeft(totalSeconds);
    }, duration);
    return () => clearInterval(interval);
  }, [duration, totalSeconds, repeat]);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const tick = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(tick);
          setTimeout(() => onExpire(), 0);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, [resetKey, onExpire]);

  return (
    <div className="w-full">
      <div className={`${height} w-full overflow-hidden bg-white shadow-inner`}>
        <div
          key={resetKey}
          className={`h-full  bg-linear-to-r ${color} animate-shrink`}
          style={{ animationDuration: `${duration}ms`, animationTimingFunction: "linear", animationFillMode: "forwards" }}
        />
      </div>
      <div className="flex justify-start mt-2">
        <p className="text-lg text-zinc-400">{secondsLeft}s</p>
      </div>
    </div>
  );
}