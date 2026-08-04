import { useContext } from "react";
import { contextData } from "../context/ContextApi";

function Registration() {
  const { registrationHandle } = useContext(contextData);
  return (
    <div>
      <h3>KESSHOU ID</h3>
      <h3>REGISTRATION</h3>
      <div>
        <p>Do you already have a KESSHOU ID ? </p>
        <p>
          Log in <span onClick={() => registrationHandle()}>here</span>.
        </p>
      </div>
      <p>
        <span>*</span>Required fields
      </p>
      <form>
        <label htmlFor="firstname">
          First name<span>*</span>
        </label>
        <input id="firstname" type="text" name="firstname" value="" />
        <label htmlFor="surname">
          Surname<span>*</span>
        </label>
        <input id="surname" type="text" name="surname" value="" />
        <label htmlFor="email">
          E-mail<span>*</span>
        </label>
        <input id="email" type="email" name="eamil" value="" />
        <label htmlFor="password">
          Password<span>*</span>
        </label>
        <input id="password" type="password" name="paswword" value="" />
        <div>
          <p>
            <span>X </span> Length between 10 and 40 characters.
          </p>
          <p>
            <span>X </span> {`At least one lowercase letter (az).`}
          </p>
          <p>
            <span>X </span> {`At least one capital letter (AZ).`}
          </p>
          <p>
            <span>X </span> {`At least one digit (0-9).`}
          </p>
          <p>
            <span>X </span> At least one special character:
          </p>
          <p>{`-./',;&@#*)(_+:"~`}</p>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
