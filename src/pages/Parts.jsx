import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useContext, useState } from "react";
import { contextData } from "../context/ContextApi.jsx";
import style from "../css/parts.module.css";

function Parts() {
  const { parts } = useContext(contextData);
  const [all, setAll] = useState(true);
  const [coilover, setCoilover] = useState(false);
  const [flywheel, setFlywheel] = useState(false);
  const [lighting, setLighting] = useState(false);
  const [steering, setSteering] = useState(false);
  const [wheel, setWheel] = useState(false);
  const [braking, setBraking] = useState(false);

  if (!parts || parts.lenght === 0) {
    return <h1>Loading ...</h1>;
  }

  let coilovers = parts.filter((element) => {
    if (element.categoryName === "Coilovers") {
      return element;
    }
  });

  let flywheels = parts.filter((element) => {
    if (element.categoryName === "Flywheel") {
      return element;
    }
  });

  let brakings = parts.filter((element) => {
    if (element.categoryName === "Braking") {
      return element;
    }
  });

  let wheels = parts.filter((element) => {
    if (element.categoryName === "Wheels") {
      return element;
    }
  });

  let lightings = parts.filter((element) => {
    if (element.categoryName === "Lighting") {
      return element;
    }
  });

  let steerings = parts.filter((element) => {
    if (element.categoryName === "Steering") {
      return element;
    }
  });

  function getAllParts() {
    setAll(true);
    setCoilover(false);
    setBraking(false);
    setFlywheel(false);
    setLighting(false);
    setSteering(false);
    setWheel(false);
  }

  function getCoilovers() {
    setAll(false);
    setCoilover(true);
    setBraking(false);
    setFlywheel(false);
    setLighting(false);
    setSteering(false);
    setWheel(false);
  }

  function getFlywheels() {
    setAll(false);
    setCoilover(false);
    setBraking(false);
    setFlywheel(true);
    setLighting(false);
    setSteering(false);
    setWheel(false);
  }

  function getBrakings() {
    setAll(false);
    setCoilover(false);
    setBraking(true);
    setFlywheel(false);
    setLighting(false);
    setSteering(false);
    setWheel(false);
  }

  function getWheels() {
    setAll(false);
    setCoilover(false);
    setBraking(false);
    setFlywheel(false);
    setLighting(false);
    setSteering(false);
    setWheel(true);
  }

  function getLightings() {
    setAll(false);
    setCoilover(false);
    setBraking(false);
    setFlywheel(false);
    setLighting(true);
    setSteering(false);
    setWheel(false);
  }

  function getSteerings() {
    setAll(false);
    setCoilover(false);
    setBraking(false);
    setFlywheel(false);
    setLighting(false);
    setSteering(true);
    setWheel(false);
  }

  return (
    <>
      <NavBar />
      <section className={style.partsMain}>
        <section className={style.partsContainerOne}>
          <h2>CATEGORIES</h2>
          <ul>
            <li onClick={() => getAllParts()}>All products</li>
            <li onClick={() => getWheels()}>Wheels</li>
            <li onClick={() => getSteerings()}>Steering</li>
            <li onClick={() => getFlywheels()}>Flywheel</li>
            <li onClick={() => getLightings()}>Lighting</li>
            <li onClick={() => getCoilovers()}>Coilovers</li>
            <li onClick={() => getBrakings()}>Braking</li>
          </ul>
        </section>
        <section className={style.partsContainerTwo}>
          <div className={style.partsContainerIn}>
            {all &&
              parts.map((part) => (
                <div key={part._id} className={style.partsMap}>
                  <div
                    className={style.partsImageContainer}
                    style={{
                      backgroundImage: `url(${part.image})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "250px",
                      height: "250px",
                    }}
                  ></div>
                  <div>
                    <h2>{part.name}</h2>
                    <p>{part.price} &euro;</p>
                  </div>
                </div>
              ))}
            {flywheel &&
              flywheels.map((part) => (
                <div key={part._id} className={style.partsMap}>
                  <div
                    className={style.partsImageContainer}
                    style={{
                      backgroundImage: `url(${part.image})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "250px",
                      height: "250px",
                    }}
                  ></div>
                  <div>
                    <h2>{part.name}</h2>
                    <p>{part.price} &euro;</p>
                  </div>
                </div>
              ))}
            {coilover &&
              coilovers.map((part) => (
                <div key={part._id} className={style.partsMap}>
                  <div
                    className={style.partsImageContainer}
                    style={{
                      backgroundImage: `url(${part.image})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "250px",
                      height: "250px",
                    }}
                  ></div>
                  <div>
                    <h2>{part.name}</h2>
                    <p>{part.price} &euro;</p>
                  </div>
                </div>
              ))}
            {braking &&
              brakings.map((part) => (
                <div key={part._id} className={style.partsMap}>
                  <div
                    className={style.partsImageContainer}
                    style={{
                      backgroundImage: `url(${part.image})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "250px",
                      height: "250px",
                    }}
                  ></div>
                  <div>
                    <h2>{part.name}</h2>
                    <p>{part.price} &euro;</p>
                  </div>
                </div>
              ))}
            {wheel &&
              wheels.map((part) => (
                <div key={part._id} className={style.partsMap}>
                  <div
                    className={style.partsImageContainer}
                    style={{
                      backgroundImage: `url(${part.image})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "250px",
                      height: "250px",
                    }}
                  ></div>
                  <div>
                    <h2>{part.name}</h2>
                    <p>{part.price} &euro;</p>
                  </div>
                </div>
              ))}
            {lighting &&
              lightings.map((part) => (
                <div key={part._id} className={style.partsMap}>
                  <div
                    className={style.partsImageContainer}
                    style={{
                      backgroundImage: `url(${part.image})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "250px",
                      height: "250px",
                    }}
                  ></div>
                  <div>
                    <h2>{part.name}</h2>
                    <p>{part.price} &euro;</p>
                  </div>
                </div>
              ))}
            {steering &&
              steerings.map((part) => (
                <div key={part._id} className={style.partsMap}>
                  <div
                    className={style.partsImageContainer}
                    style={{
                      backgroundImage: `url(${part.image})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "250px",
                      height: "250px",
                    }}
                  ></div>
                  <div>
                    <h2>{part.name}</h2>
                    <p>{part.price} &euro;</p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Parts;
