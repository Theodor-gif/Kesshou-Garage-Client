import { useContext } from "react";
import { contextData } from "../context/ContextApi";
import style from "../css/registration.module.css";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function Registration() {
  const { registrationHandle } = useContext(contextData);
  return (
    <div className={style.registermain}>
      <div className={style.registercontainer}>
        <h3 className={style.regtitle}>KESSHOU ID</h3>
        <h3 className={style.regtitle}>REGISTRATION</h3>
        <div className={style.regquestion}>
          <p className={style.regp}>Do you already have a KESSHOU ID ? </p>
          <p className={style.regp}>
            Log in{" "}
            <span
              className={style.regbtn1}
              onClick={() => registrationHandle()}
            >
              here
            </span>
            .
          </p>
        </div>
        <p className={style.reginfo}>
          <span>* </span>Required fields
        </p>
        <form className={style.regform}>
          <label className={style.reglabel} htmlFor="firstname">
            First name<span> *</span>
          </label>
          <input
            className={style.reginput}
            id="firstname"
            type="text"
            name="firstname"
            value="Theodoros"
          />
          <label className={style.reglabel} htmlFor="surname">
            Surname<span> *</span>
          </label>
          <input
            className={style.reginput}
            id="surname"
            type="text"
            name="surname"
            value="Mitropoulos"
          />
          <label className={style.reglabel} htmlFor="email">
            E-mail<span> *</span>
          </label>
          <input
            className={style.reginput}
            id="email"
            type="email"
            name="eamil"
            value="theodor.mitropoulos@yahoo.com"
          />
          <label className={style.reglabel} htmlFor="password">
            Password<span> *</span>
          </label>
          <input
            className={style.reginput}
            id="password"
            type="password"
            name="paswword"
            value="10219Tm!!"
          />
          <div className={style.regExtraInfo}>
            <p>
              <span className={style.regX}>X </span> Length between 10 and 40
              characters.
            </p>
            <p>
              <span className={style.regX}>X </span>{" "}
              {`At least one lowercase letter (az).`}
            </p>
            <p>
              <span className={style.regX}>X </span>{" "}
              {`At least one capital letter (AZ).`}
            </p>
            <p>
              <span className={style.regX}>X </span>{" "}
              {`At least one digit (0-9).`}
            </p>
            <p>
              <span className={style.regX}>X </span> At least one special
              character:
            </p>
            <p className={style.regLastInfo}>{`-./',;&@#*)(_+:"~`}</p>
          </div>
          <button className={style.regbtnsub} type="submit">
            Register
          </button>
        </form>
      </div>
      <div className={style.regReturnContainer}>
        <KeyboardBackspaceIcon
          className={style.regArrow}
          sx={{
            width: 30,
            height: 30,
          }}
        />
        <Link to="/" className={style.registerBack}>
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default Registration;
