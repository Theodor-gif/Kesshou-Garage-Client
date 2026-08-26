import { useState, useEffect } from "react";
import style from "../css/loading.module.css";

function Loading() {
  const [number, setNumber] = useState(0);
  const max = 100;

  const percent = (number / max) * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => {
        if (prev >= max) {
          clearInterval(interval);
          return prev;
        }
        return prev + 10;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={style.ContMain}>
      <h1 className={style.name}>Kessho Garage</h1>
      <div className={style.loadingContainer}>
        <h2 className={style.loadingTitle}>Loading ...</h2>
        <p className={style.loadingNum}>{number} %</p>
        <input
          className={style.rangeInput}
          type="range"
          min="0"
          max={max}
          value={number}
          readOnly
          style={{
            background: `linear-gradient(to right, #00e5ff ${percent}%, #e0e0e0 ${percent}%)`,
          }}
        />
      </div>
    </section>
  );
}

export default Loading;
