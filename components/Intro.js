import { TypeAnimation } from "react-type-animation";
import styles from "../styles/Intro.module.css";
import { useState, useEffect } from "react";
import FadeIn from "./FadeIn";
const Intro = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <div id="intro" className={`${styles.fadeIn} ${fadeIn && styles.active}`}>
      <div className={styles.text_container}>
        <p className={styles.text}>hi,</p>

        <div className={styles.type_container}>
          <TypeAnimation
            className={styles.name}
            sequence={["i'm "]}
            wrapper="p"
            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
            cursor=""
          />
          <div style={{ padding: 5 }} />
          <TypeAnimation
            className={styles.name}
            sequence={["amna"]}
            style={{ color: "#64ffda" }}
            wrapper="p"
            speed={{ type: "keyStrokeDelayInMs", value: 300 }}
          />
        </div>

        <p className={styles.text}>and i code sometimes</p>
        <img src="/bow.svg" className={styles.bow} />
      </div>
    </div>
  );
};
export default Intro;
