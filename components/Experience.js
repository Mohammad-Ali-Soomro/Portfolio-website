import styles from "../styles/Experience.module.css";
import FadeIn from "./FadeIn";
const Experience = () => {
  return (
    <div id="experience" className="padding">
      <FadeIn>
        <h3 className="heading">/experience</h3>
        <div className={styles.company}>
          <div className={styles.grid}>
            <p className={styles.company_name}>PROJECT EXPERIENCE</p>
            <div className={styles.bar} />
          </div>
          <div className={styles.description}>
            <h4 className={styles.position}>Development Side</h4>
            <h6 className={styles.timeline}>2023 - PRESENT</h6>

            <ul className={styles.bullets}>
              <li>
                Developed a portfolio website using Next.js and React, implementing 
                responsive design and interactive UI components.
              </li>
              <li>
                Created a chess game with Python Pygame, implementing game logic and 
                AI opponent functionality.
              </li>
              <li>
                Built a data visualization application using Visual C++, creating a 
                GUI-based interface for bitmap manipulation and analysis.
              </li>
              <li>
                Developed web applications with HTML, CSS, and JavaScript, integrating 
                with backend systems using Django, Flask, and Laravel frameworks.
              </li>
              <li>
                Implemented database solutions using SQLite for local storage and 
                PostgreSQL for more complex data management requirements.
              </li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Experience;
