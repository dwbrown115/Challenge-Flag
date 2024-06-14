import { useState, useEffect } from "react";

export default function Loading({ loading }: { loading: boolean }) {
  const [dots, setDots] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length === 3) {
          return "";
        }
        return prevDots + ".";
      });
    }, 600); // Adjust the interval as needed (e.g., 500ms for half a second)

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div className="text-center py-4">
      <div className="text-2xl font-semibold mb-2">loading{dots}</div>
    </div>
  );
}
