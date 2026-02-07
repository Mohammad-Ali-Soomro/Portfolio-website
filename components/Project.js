import FadeIn from "./FadeIn";
import styles from "../styles/Project.module.css";
import { Nav } from "react-bootstrap";
import { GitHub, LinkedIn } from "@mui/icons-material";
import FiverrIcon from "./FiverrIcon";
const Project = () => {
  const projects = [
    {
      title: "Sherlock",
      type: "Web",
      desc: "AI-powered crime investigation app using knowledge graphs and RAG for intelligent case analysis.",
      techstack: "FastAPI, LangChain, Neo4j, Next.js",
      icons: ["/Python.svg", "/nextjs.svg", "/docker.svg"],
      url: "https://github.com/Mohammad-Ali-Soomro/sherlock",
    },
    {
      title: "Gikians",
      type: "Web",
      desc: "Alumni & scholar networking platform with AI-powered search, real-time messaging, and community feed.",
      techstack: "Next.js, TypeScript, Supabase, AI SDK",
      icons: ["/nextjs.svg", "/typescript.svg", "/supabase.svg"],
      url: "https://github.com/Mohammad-Ali-Soomro/Gikians",
    },
    {
      title: "UROG",
      type: "Web",
      desc: "A platform connecting GIKI professors with undergraduate students for research opportunities.",
      techstack: "Next.js, TypeScript, Supabase",
      icons: ["/nextjs.svg", "/typescript.svg", "/supabase.svg"],
      url: "https://github.com/Mohammad-Ali-Soomro/urog",
    },
    {
      title: "Dareecha 2.0",
      type: "Web",
      desc: "A virtual library for GIKI students enabling peer-to-peer book lending with real-time notifications.",
      techstack: "Node.js, Express, PostgreSQL, Socket.IO",
      icons: ["/nodejs.svg", "/sql.svg"],
      url: "https://github.com/Mohammad-Ali-Soomro/Dareecha-2.0",
    },
    {
      title: "Nasa Space Tracker",
      type: "Web",
      desc: "A project for visualizing ISS using NASA's OpenAPIs.",
      techstack: "Three.js, Leaflet.js, NASA APIs",
      icons: ["/leaflet.svg"],
      url: "https://github.com/Mohammad-Ali-Soomro/nasa-space-tracker",
    },
    {
      title: "Data Visualization using Bitmaps",
      type: "App",
      desc: "GUI based OOP Semester Project built using Visual C++.",
      techstack: "Visual C++",
      icons: ["/visualC.svg"],
      url: "https://github.com/Mohammad-Ali-Soomro/Data-Visualization-using-Bitmaps",
    },
    {
      title: "Bot vs Player Chess Game",
      type: "App",
      desc: "A chess game where you can play against a bot.",
      techstack: "Python Pygame",
      icons: ["/Python.svg"],
      url: "https://github.com/Mohammad-Ali-Soomro/Chess-Game-in-Python-Pygame",
    },
    {
      title: "Portfolio",
      type: "Web",
      desc: "A portfolio website showcasing my projects.",
      techstack: "Next.js",
      icons: ["/nextjs.svg"],
      url: "https://github.com/Mohammad-Ali-Soomro",
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
                    <div className={styles.icon_row}>
                      {project.icons?.map((icon, idx) => {
                        return (
                          <img
                            key={idx}
                            src={icon}
                            alt="tech icon"
                            className={styles.tech_icon}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA Section */}
        <FadeIn>
          <div className={styles.cta_section}>
            <h3 className={styles.cta_heading}>Let's Build Something Extraordinary</h3>
            <p className={styles.cta_text}>
              Impressed by what you see? That's just the surface. I bring the same
              obsession for quality, performance, and clean architecture to every
              project I take on — whether it's a full-stack web app, an AI-powered
              product, or a scalable backend system.
            </p>
            <p className={styles.cta_text}>
              If you're looking for a developer who doesn't just deliver code but delivers
              <span className={styles.cta_highlight}> results that move the needle</span>,
              let's talk.
            </p>
            <div className={styles.cta_buttons}>
              <a
                href="https://www.linkedin.com/in/mohammad-ali-176602219/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta_button}
              >
                <LinkedIn className={styles.cta_icon} />
                Connect on LinkedIn
              </a>
              <a
                href="https://www.fiverr.com/mohammadkhan725?public_mode=true"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.cta_button} ${styles.cta_button_fiverr}`}
              >
                <FiverrIcon className={styles.cta_icon} />
                Hire Me on Fiverr
              </a>
            </div>
            <p className={styles.cta_subtext}>
              Serious about your project? So am I. Let's ship something great together.
            </p>
          </div>
        </FadeIn>
      </FadeIn>
    </div>
  );
};

export default Project;
