import { Fade } from "react-bootstrap";
import styles from "../styles/About.module.css";
import FadeIn from "./FadeIn";
const About = () => {
  const languages = ["javascript ES6+", "dart", "python", "java"];
  const frameworks = ["reactJS", "nextJS", "react native", "flutter"];
  const databases = ["MongoDB", "Firebase", "SQL"];
  return (
    <div id="about" className={styles.main_container}>
      <FadeIn>
        <div className="padding">
          <h3 className="heading">/about me</h3>
          <p className="text">
            I am currently a 4th year
            <span className={styles.highlight}> computer science</span> student
            at
            <span className={styles.highlight}>
              {" "}
              COMSATS University Islamabad.
            </span>
          </p>
          <br />
          <p className="text">Some languages i have been working with:</p>

          <div className={styles.language_container}>
            <ul className="ul">
              {languages.map((language, i) => {
                return (
                  <FadeIn delay={`${i + 1}00ms`}>
                    <li>{language}</li>
                  </FadeIn>
                );
              })}
            </ul>
          </div>
          <p className="text">Frameworks:</p>
          <div className={styles.language_container}>
            <ul className="ul">
              {frameworks.map((framework, i) => {
                console.log(i);
                return (
                  <FadeIn delay={`${i + 2}50ms`}>
                    <li>{framework}</li>
                  </FadeIn>
                );
              })}
            </ul>
          </div>
          <p className="text">Databases:</p>
          <div className={styles.language_container}>
            <ul className="ul">
              {databases.map((database, i) => {
                console.log(i);
                return (
                  <FadeIn delay={`${i + 2}50ms`}>
                    <li>{database}</li>
                  </FadeIn>
                );
              })}
            </ul>
          </div>
          <p className="text">
            When i'm not coding, i do digital art, crochet and also play video
            games.
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className={styles.picture}>
          <img src="/self-portrait.png"></img>
        </div>
      </FadeIn>
    </div>
  );
};

export default About;
