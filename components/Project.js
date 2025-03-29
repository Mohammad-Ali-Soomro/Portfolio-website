import FadeIn from "./FadeIn";
import styles from "../styles/Project.module.css";
import { Nav } from "react-bootstrap";
import { GitHub } from "@mui/icons-material";
const Project = () => {
  const projects = [
    {
      title: "Portfolio",
      type: "Web",
      desc: " A portfolio website showcasing my projects.",
      techstack: "nextjs",
      icons: ["/nextjs.svg"],
      url: "https://github.com/Mohammad-Ali-Soomro",
    },
    {
      title: "Nasa Space Tracker",
      type: "Web",
      desc: " A project for visualizing ISS using NASA's OpenAPIs",
      techstack: "Three.js, Leaflet.js, NASA APIs",
      icons: ["/react.svg", "/firebase.svg"],
      url: "https://github.com/Mohammad-Ali-Soomro/nasa-space-tracker",
    },
    
    {
      title: "Bot vs Player Chess Game",
      type: "App",
      desc: " A chess game where you can play against a bot.",
      techstack: "Python Pygame",
      icons: ["/php.svg", "/laravel.svg", "/sql.svg"],
      url: "https://github.com/Mohammad-Ali-Soomro/Chess-Game-in-Python-Pygame",
    },

    {
      title: "Data Visulaization using Bitmaps",
      type: "App",
      desc: " GUI based OOP Semester Project built using Visual C++",
      techstack: "Visual C++",
      icons: ["/flutter.svg", "/firebase.svg"],
      url: "https://github.com/Mohammad-Ali-Soomro/Data-Visualization-using-Bitmaps",
    },
  ];
  return (
    <div id="projects">
      <FadeIn>
        <div className="padding">
          <h3 className="heading">/projects</h3>
        </div>
        <div className={`${"padded_container"} ${styles.project_container}`}>
          {projects.map((project, i) => {
            return (
              <FadeIn delay={`${i + 1}00ms`}>
                <div className={`${"card"} ${styles.card}`}>
                  <Nav.Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3"
                  >
                    <GitHub className={styles.icon} />
                  </Nav.Link>
                  <div className="card-body">
                    <h6 className={styles.card_title}>
                      {project.title}
                      <span className={styles.type}> {project.type} </span>
                    </h6>

                    <p className={`${"card-text"} ${styles.description}`}>
                      {project.desc}
                    </p>
                    <div className={styles.bottom_line} />
                    <p className={styles.techstack}>{project.techstack}</p>
                    {project.icons?.map((icon) => {
                      return (
                        <img
                          src={icon}
                          style={{ marginRight: 5, height: 30 }}
                        />
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </FadeIn>
    </div>
  );
};

export default Project;
