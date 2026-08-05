import { useContext } from "react";
import { contextData } from "../context/ContextApi";
import style from "../css/login.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";

function LogIn() {
  const { loginHandle } = useContext(contextData);
  return (
    <div className={style.logmain}>
      <div className={style.logcontainer}>
        <h3 className={style.logtitle}>KESSHOU ID LOGIN</h3>
        <div className={style.logquestion}>
          <p className={style.logp}>Don't have a KESSHOU ID ? </p>
          <p className={style.logp}>
            Register{" "}
            <span className={style.logbtn1} onClick={() => loginHandle()}>
              here
            </span>
          </p>
        </div>
        <form className={style.logform}>
          <label className={style.loglabel} htmlFor="email">
            E-mail<span> *</span>
          </label>
          <input
            className={style.loginput}
            id="email"
            type="email"
            name="eamil"
            value="theodor.mitropoulos@yahoo.com"
          />
          <label className={style.loglabel} htmlFor="password">
            Password<span> *</span>
          </label>
          <input
            className={style.loginput}
            id="password"
            type="password"
            name="paswword"
            value="10219Tm!!"
          />
          <button className={style.logbtnsub} type="submit">
            Log in
          </button>
        </form>
      </div>
      <div className={style.logReturnContainer}>
        <KeyboardBackspaceIcon
          className={style.logArrow}
          sx={{
            width: 30,
            height: 30,
          }}
        />
        <Link to="/" className={style.logBack}>
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default LogIn;
