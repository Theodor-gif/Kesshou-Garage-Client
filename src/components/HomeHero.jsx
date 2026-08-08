import { useContext } from "react";
import { contextData } from "../context/ContextApi";

function HomeHero() {
  const { cars } = useContext(contextData);

  if (cars.length === 0) {
    return <h1>Loading...</h1>;
  }

  const bgcolor = cars[0].photos[0].url;

  return (
    <div
      style={{
        backgroundImage: `url(${bgcolor})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "50vh",
      }}
    >
      <h1>Hero</h1>
    </div>
  );
}

export default HomeHero;
