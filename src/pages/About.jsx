import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../assets/About-Hero-image.jpg";
import style from "../css/about.module.css";

function About() {
  return (
    <section>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          minHeight: "20vh",
          transition: "background-image 1s ease-in-out",
        }}
      ></div>
      <section className={style.aboutContainer}>
        <h2 className={style.aboutTitle}>Built for the Drift</h2>
        <p className={style.aboutPar}>
          Kessho Garage is an e-commerce shop dedicated entirely to drift car
          parts, built for enthusiasts who want to take their car from stock to
          sideways. We carry everything needed to modify a car for drifting,
          organized into six core categories: braking, coilovers, flywheel,
          lighting, steering, and wheels. Every product in our catalog is chosen
          with one goal in mind — helping drivers build a car that performs and
          looks the part on the track. Whether you're starting your first build
          or fine-tuning a seasoned drift machine, Kessho Garage has the parts
          to get you there.
        </p>
        <h2 className={style.aboutTitle}>Chassis We Know Best</h2>
        <p className={style.aboutPar}>
          Our team has hands-on expertise with five of the most iconic chassis
          in the drift world: the 240SX, AE86, E36, RX7, and S2000. These
          platforms are the backbone of drift culture, and we've built our
          knowledge around them so we can offer parts, fitment advice, and build
          guidance specific to each one. Instead of trying to cover every car on
          the road, we've chosen to go deep on the models that matter most to
          drifters, so customers can trust that what they're buying is suited to
          their exact build.
        </p>
        <h2 className={style.aboutTitle}>Trusted Brands, Proven Performance</h2>
        <p className={style.aboutPar}>
          We partner with some of the biggest names in performance parts to make
          sure every product we sell meets the standards drifters demand. Our
          lineup includes Tein, Rays, Morimoto, Brembo, Enkei, Whiteline, and
          Wilwood — brands known worldwide for quality, durability, and
          performance under real track conditions. By working directly with
          these manufacturers, Kessho Garage ensures customers get authentic
          parts backed by proven engineering, not knockoffs or guesswork.
        </p>
      </section>
      <Footer />
    </section>
  );
}

export default About;
