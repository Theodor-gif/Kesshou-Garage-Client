import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useContext, useState } from "react";
import { contextData } from "../context/ContextApi.jsx";
import style from "../css/parts.module.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion } from "motion/react";

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

  function closeMenuIfMobile() {
    if (window.innerWidth <= 480) {
      setMenu(false);
    } else if (window.innerWidth > 480) {
      setMenu(true);
    }
  }

  function getAllParts() {
    setAll(true);
    setCoilover(false);
    setBraking(false);
    setFlywheel(false);
    setLighting(false);
    setSteering(false);
    setWheel(false);
    closeMenuIfMobile();
  }

  function getCoilovers() {
    setAll(false);
    setCoilover(true);
    setBraking(false);
    setFlywheel(false);
    setLighting(false);
    setSteering(false);
    setWheel(false);
    closeMenuIfMobile();
  }

  function getFlywheels() {
    setAll(false);
    setCoilover(false);
    setBraking(false);
    setFlywheel(true);
    setLighting(false);
    setSteering(false);
    setWheel(false);
    closeMenuIfMobile();
  }

  function getBrakings() {
    setAll(false);
    setCoilover(false);
    setBraking(true);
    setFlywheel(false);
    setLighting(false);
    setSteering(false);
    setWheel(false);
    closeMenuIfMobile();
  }

  function getWheels() {
    setAll(false);
    setCoilover(false);
    setBraking(false);
    setFlywheel(false);
    setLighting(false);
    setSteering(false);
    setWheel(true);
    closeMenuIfMobile();
  }

  function getLightings() {
    setAll(false);
    setCoilover(false);
    setBraking(false);
    setFlywheel(false);
    setLighting(true);
    setSteering(false);
    setWheel(false);
    closeMenuIfMobile();
  }

  function getSteerings() {
    setAll(false);
    setCoilover(false);
    setBraking(false);
    setFlywheel(false);
    setLighting(false);
    setSteering(true);
    setWheel(false);
    closeMenuIfMobile();
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
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: "all", once: true }}
                  transition={{ duration: 1 }}
                  key={part._id}
                  className={style.partsItemContainer}
                >
                  <motion.button
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 1 }}
                    className={style.partsHurt}
                  >
                    <FavoriteIcon
                      onClick={() => AddFav(part._id)}
                      sx={{
                        color: "red",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        fontSize: 30,
                        border: "none",
                      }}
                    />
                  </motion.button>
                  <Link to={`/partsdetail/${part._id}`}>
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
                </motion.div>
              ))}
            {flywheel &&
              flywheels.map((part) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: "all", once: true }}
                  transition={{ duration: 1 }}
                  key={part._id}
                  className={style.partsItemContainer}
                >
                  <motion.button
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 1 }}
                    onClick={() => AddFav(part._id)}
                    className={style.partsHurt}
                    type="button"
                  >
                    <FavoriteIcon
                      sx={{
                        color: "red",
                        backgroundColor: "transparent",
                        fontSize: 30,
                      }}
                    />
                  </motion.button>
                  <Link to={`/partsdetail/${part._id}`}>
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
                </motion.div>
              ))}
            {coilover &&
              coilovers.map((part) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: "all", once: true }}
                  transition={{ duration: 1 }}
                  key={part._id}
                  className={style.partsItemContainer}
                >
                  <motion.button
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 1 }}
                    onClick={() => AddFav(part._id)}
                    className={style.partsHurt}
                    type="button"
                  >
                    <FavoriteIcon
                      sx={{
                        color: "red",
                        backgroundColor: "transparent",
                        fontSize: 30,
                      }}
                    />
                  </motion.button>
                  <Link to={`/partsdetail/${part._id}`}>
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
                </motion.div>
              ))}
            {braking &&
              brakings.map((part) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: "all", once: true }}
                  transition={{ duration: 1 }}
                  key={part._id}
                  className={style.partsItemContainer}
                >
                  <motion.button
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 1 }}
                    onClick={() => AddFav(part._id)}
                    className={style.partsHurt}
                    type="button"
                  >
                    <FavoriteIcon
                      sx={{
                        color: "red",
                        backgroundColor: "transparent",
                        fontSize: 30,
                      }}
                    />
                  </motion.button>
                  <Link to={`/partsdetail/${part._id}`}>
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
                </motion.div>
              ))}
            {wheel &&
              wheels.map((part) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: "all", once: true }}
                  transition={{ duration: 1 }}
                  key={part._id}
                  className={style.partsItemContainer}
                >
                  <motion.button
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 1 }}
                    onClick={() => AddFav(part._id)}
                    className={style.partsHurt}
                    type="button"
                  >
                    <FavoriteIcon
                      sx={{
                        color: "red",
                        backgroundColor: "transparent",
                        fontSize: 30,
                      }}
                    />
                  </motion.button>
                  <Link to={`/partsdetail/${part._id}`}>
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
                </motion.div>
              ))}
            {lighting &&
              lightings.map((part) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: "all", once: true }}
                  transition={{ duration: 1 }}
                  key={part._id}
                  className={style.partsItemContainer}
                >
                  <motion.button
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 1 }}
                    onClick={() => AddFav(part._id)}
                    className={style.partsHurt}
                    type="button"
                  >
                    <FavoriteIcon
                      sx={{
                        color: "red",
                        backgroundColor: "transparent",
                        fontSize: 30,
                      }}
                    />
                  </motion.button>
                  <Link to={`/partsdetail/${part._id}`}>
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
                </motion.div>
              ))}
            {steering &&
              steerings.map((part) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: "all", once: true }}
                  transition={{ duration: 1 }}
                  key={part._id}
                  className={style.partsItemContainer}
                >
                  <motion.button
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 1 }}
                    onClick={() => AddFav(part._id)}
                    className={style.partsHurt}
                    type="button"
                  >
                    <FavoriteIcon
                      sx={{
                        color: "red",
                        backgroundColor: "transparent",
                        fontSize: 30,
                      }}
                    />
                  </motion.button>
                  <Link to={`/partsdetail/${part._id}`}>
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
                </motion.div>
              ))}
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Parts;
