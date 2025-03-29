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
            <h4 className={styles.position}>Full Stack Development</h4>
            <h6 className={styles.timeline}>2024 - PRESENT</h6>

            <ul className={styles.bullets}>
              <li>
                Developed responsive web applications using React.js and Next.js, 
                implementing modern UI/UX principles and component-based architecture.
              </li>
              <li>
                Built RESTful APIs and backend systems using Django and Flask, 
                with database integration using PostgreSQL for efficient data management.
              </li>
              <li>
                Created PHP web applications with Laravel framework, implementing MVC 
                architecture and utilizing Blade templating for dynamic content.
              </li>
              <li>
                Implemented interactive 3D visualizations using Three.js, enhancing 
                user experience with immersive graphical elements and animations.
              </li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Experience;
