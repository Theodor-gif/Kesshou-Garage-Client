import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import style from "../css/contact.module.css";
import ImageOne from "../assets/Contact-imageTwo.jpg";
import ImageTwo from "../assets/Contact-imageOne.jpg";
import ImageThree from "../assets/Contact-imageThree.jpg";
import ImageFour from "../assets/Contact-imageFour.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <div
        style={{
          position: "relative",
          width: "100vw",
          minHeight: "20vh",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${ImageOne})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            inset: 0,
          }}
        />
        <div
          style={{
            backgroundImage: `url(${ImageTwo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            inset: 0,
            opacity: 0.2,
          }}
        />
      </div>
      <section className={style.contactContainer}>
        <div className={style.contactContOne}>
          <form className={style.contactForm}>
            <label className={style.contactLabel} htmlFor="firstname">
              First name <span>*</span>
            </label>
            <input
              className={style.contactInput}
              id="firstname"
              type="text"
              name="firstname"
              required
            />
            <label className={style.contactLabel} htmlFor="surname">
              Surname <span>*</span>
            </label>
            <input
              className={style.contactInput}
              id="surname"
              type="text"
              name="surname"
              required
            />
            <label className={style.contactLabel} htmlFor="email">
              E-mail <span>*</span>
            </label>
            <input
              className={style.contactInput}
              id="email"
              type="email"
              name="email"
              required
            />
            <label className={style.contactLabel} htmlFor="phone">
              Phone number
            </label>
            <input
              className={style.contactInput}
              id="phone"
              type="tel"
              name="phone"
            />
            <label className={style.contactLabel} htmlFor="reason">
              How can we help you?
            </label>
            <select className={style.contactInput} id="reason">
              <option value="">--Please choose an option--</option>
              <option value="What can I do if I can't find the product I'm looking for?">
                What can I do if I can't find the product I'm looking for ?
              </option>
              <option value="How can I save the products I like to find them later?">
                How can I save the products I like to find them later ?
              </option>
              <option value="A product does not have the purchase option. Why is this happening? What can I do?">
                A product does not have the purchase option. Why is this
                happening? What can I do ?
              </option>
            </select>
            <label className={style.contactLabel} htmlFor="text">
              Your Message
            </label>
            <textarea
              className={style.contactInputText}
              id="text"
              placeholder="Please describe your request"
              rows="4"
              cols="50"
            ></textarea>
            <div className={style.contactCheck}>
              <input c id="check-box" type="checkbox" name="check-box" />
              <label className={style.contactLabel} for="check-box">
                I agree to the processing of my personal data in accordance with
                the Privacy Policy .
              </label>
            </div>
            <p className={style.contactLabel}>
              <span>*</span> Required
            </p>
            <div className={style.contactBtnContainer}>
              <button className={style.contactBtn} type="reset">
                Reset
              </button>
              <button className={style.contactBtn} type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className={style.contactContTwo}>
          <div className={style.contactBoxImageOne}>
            <img
              className={style.contactImg}
              src={ImageThree}
              alt=""
              width="300"
            />
          </div>
          <div className={style.contactBoxImageTwo}>
            <img
              className={style.contactImg}
              src={ImageFour}
              alt=""
              width="600"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
