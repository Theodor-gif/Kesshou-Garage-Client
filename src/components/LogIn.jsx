import { useContext } from "react";
import { contextData } from "../context/ContextApi";

function LogIn() {
  const { loginHandle } = useContext(contextData);
  return (
    <div>
      <h3>KESSHOU ID LOGIN</h3>
      <div>
        <p>Don't have a KESSHOU ID ? </p>
        <p>
          Register <span onClick={() => loginHandle()}>here</span>.
        </p>
      </div>
      <form>
        <label htmlFor="email">
          E-mail<span>*</span>
        </label>
        <input id="email" type="email" name="eamil" value="" />
        <label htmlFor="password">
          Password<span>*</span>
        </label>
        <input id="password" type="password" name="paswword" value="" />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LogIn;
