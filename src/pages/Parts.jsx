import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useContext, useState } from "react";
import { contextData } from "../context/ContextApi.jsx";
import style from "../css/parts.module.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Parts() {
  const { parts, AddFav } = useContext(contextData);
  const [all, setAll] = useState(true);
  const [coilover, setCoilover] = useState(false);
  const [flywheel, setFlywheel] = useState(false);
  const [lighting, setLighting] = useState(false);
  const [steering, setSteering] = useState(false);
  const [wheel, setWheel] = useState(false);
  const [braking, setBraking] = useState(false);
  const [menu, setMenu] = useState(true);

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
    setMenu(false);
  }

  function getCoilovers() {
    setAll(false);
    setCoilover(true);
    setBraking(false);
    setFlywheel(false);
    setLighting(false);
    setSteering(false);
    setWheel(false);
    setMenu(false);
  }

  function getFlywheels() {
    setAll(false);
    setCoilover(false);
    setBraking(false);
    setFlywheel(true);
    setLighting(false);
    setSteering(false);
    setWheel(false);
    setMenu(false);
  }

  function getBrakings() {
    setAll(false);
    setCoilover(false);
    setBraking(true);
    setFlywheel(false);
    setLighting(false);
    setSteering(false);
    setWheel(false);
    setMenu(false);
  }

  function getWheels() {
    setAll(false);
    setCoilover(false);
    setBraking(false);
    setFlywheel(false);
    setLighting(false);
    setSteering(false);
    setWheel(true);
    setMenu(false);
  }

  function getLightings() {
    setAll(false);
    setCoilover(false);
    setBraking(false);
    setFlywheel(false);
    setLighting(true);
    setSteering(false);
    setWheel(false);
    setMenu(false);
  }

  function getSteerings() {
    setAll(false);
    setCoilover(false);
    setBraking(false);
    setFlywheel(false);
    setLighting(false);
    setSteering(true);
    setWheel(false);
    setMenu(false);
  }

  return (
    <>
      <NavBar />
      <section className={style.partsMain}>
        {menu && (
          <section className={style.partsContainerOne}>
            <h2 className={style.partsContTitle}>CATEGORIES</h2>
            <ul className={style.partsContList}>
              <li className={style.partsItem} onClick={() => getAllParts()}>
                All products
              </li>
              <li className={style.partsItem} onClick={() => getWheels()}>
                Wheels
              </li>
              <li className={style.partsItem} onClick={() => getSteerings()}>
                Steering
              </li>
              <li className={style.partsItem} onClick={() => getFlywheels()}>
                Flywheel
              </li>
              <li className={style.partsItem} onClick={() => getLightings()}>
                Lighting
              </li>
              <li className={style.partsItem} onClick={() => getCoilovers()}>
                Coilovers
              </li>
              <li className={style.partsItem} onClick={() => getBrakings()}>
                Braking
              </li>
            </ul>
          </section>
        )}
        <MenuIcon
          onClick={() => setMenu((prev) => !prev)}
          className={style.partsMenu}
          sx={{
            fontSize: 50,
            color: "white",
          }}
        ></MenuIcon>
        <section className={style.partsContainerTwo}>
          <div className={style.partsContainerIn}>
            {all &&
              parts.map((part) => (
                <div key={part._id}>
                  <button onClick={() => AddFav(part._id)}>Add</button>
                  <Link to={`/partsdetail/${part._id}`}>
                    {" "}
                    <div className={style.partsMap}>
                      <div
                        className={style.partsImageContainer}
                        style={{
                          backgroundImage: `url(${part.image})`,
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          width: "100%",
                          height: "100%",
                        }}
                      ></div>
                      <div className={style.partsProDiv}>
                        <h2 className={style.partName}>{part.name}</h2>
                        <p className={style.partPrice}>{part.price} &euro;</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            {flywheel &&
              flywheels.map((part) => (
                <Link to={`/partsdetail/${part._id}`} key={part._id}>
                  <div className={style.partsMap}>
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
                    <div className={style.partsProDiv}>
                      <h2 className={style.partName}>{part.name}</h2>
                      <p className={style.partPrice}>{part.price} &euro;</p>
                    </div>
                  </div>
                </Link>
              ))}
            {coilover &&
              coilovers.map((part) => (
                <Link to={`/partsdetail/${part._id}`} key={part._id}>
                  <div className={style.partsMap}>
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
                    <div className={style.partsProDiv}>
                      <h2 className={style.partName}>{part.name}</h2>
                      <p className={style.partPrice}>{part.price} &euro;</p>
                    </div>
                  </div>
                </Link>
              ))}
            {braking &&
              brakings.map((part) => (
                <Link to={`/partsdetail/${part._id}`} key={part._id}>
                  <div className={style.partsMap}>
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
                    <div className={style.partsProDiv}>
                      <h2 className={style.partName}>{part.name}</h2>
                      <p className={style.partPrice}>{part.price} &euro;</p>
                    </div>
                  </div>
                </Link>
              ))}
            {wheel &&
              wheels.map((part) => (
                <Link to={`/partsdetail/${part._id}`} key={part._id}>
                  <div className={style.partsMap}>
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
                    <div className={style.partsProDiv}>
                      <h2 className={style.partName}>{part.name}</h2>
                      <p className={style.partPrice}>{part.price} &euro;</p>
                    </div>
                  </div>
                </Link>
              ))}
            {lighting &&
              lightings.map((part) => (
                <Link to={`/partsdetail/${part._id}`} key={part._id}>
                  <div className={style.partsMap}>
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
                    <div className={style.partsProDiv}>
                      <h2 className={style.partName}>{part.name}</h2>
                      <p className={style.partPrice}>{part.price} &euro;</p>
                    </div>
                  </div>
                </Link>
              ))}
            {steering &&
              steerings.map((part) => (
                <Link to={`/partsdetail/${part._id}`} key={part._id}>
                  <div className={style.partsMap}>
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
                    <div className={style.partsProDiv}>
                      <h2 className={style.partName}>{part.name}</h2>
                      <p className={style.partPrice}>{part.price} &euro;</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Parts;
