import styles from "../styles/Experience.module.css";
import FadeIn from "./FadeIn";
const Experience = () => {
  return (
    <div id="experience" className="padding">
      <FadeIn>
        <h3 className="heading">/experience</h3>
        <div className={styles.company}>
          <div className={styles.grid}>
            <p className={styles.company_name}>DEXPLAT</p>
            <div className={styles.bar} />
          </div>
          <div className={styles.description}>
            <h4 className={styles.position}>Flutter Intern</h4>
            <h6 className={styles.timeline}>JULY 2023 - SEP 2023</h6>

            <ul className={styles.bullets}>
              <li>
                Learned about basic user interface, simple state management,
                Provider for state management, Firebase Firestore, and Cloud
                Firestore.
              </li>
              <li>
                Learned file structuring and naming conventions, followed coding
                and reusability principles to convert the figma designs into
                flutter ui.
              </li>
              <li>
                Implemented Firebase authentication on a “To-do App” and a
                module to store, fetch, display and delete images using “Cloud
                Firestore”.
              </li>
              <li>
                Created a “News App” using the news API and learned how to fetch
                data before rendering the components.
              </li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Experience;
