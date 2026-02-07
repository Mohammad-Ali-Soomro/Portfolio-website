import styles from "../styles/About.module.css";
import FadeIn from "./FadeIn";
const About = () => {
  const languages = [
    "Python",
    "JavaScript",
    "TypeScript",
    "C",
    "C++",
    "SQL",
  ];
  const frameworks = [
    "Next.js",
    "React",
    "FastAPI",
    "Node.js",
    "Express.js",
    "LangChain",
  ];
  const databases = [
    "PostgreSQL",
    "Supabase",
    "Neo4j",
    "MongoDB",
    "Firebase",
  ];
  const tools = ["Docker", "Git", "Tailwind CSS", "Socket.IO"];
  return (
    <div id="about" className={styles.main_container}>
      <FadeIn>
        <div className="padding">
          <h3 className="heading">/about me</h3>
          <p className="text">
            I am a
            <span className={styles.highlight}>
              {" "}
              Computer Science student
            </span>{" "}
            at
            <span className={styles.highlight}> GIKI</span> with a
            passion for building
            <span className={styles.highlight}> full-stack web applications</span> and
            exploring
            <span className={styles.highlight}> Generative AI</span>. I enjoy
            crafting solutions that solve real problems — from AI-powered
            investigation tools to university platforms used by peers daily.
          </p>
          <br />
          <p className="text">Languages I work with:</p>

          <div className={styles.language_container}>
            <ul className="ul">
              {languages.map((language, i) => {
                return (
                  <FadeIn delay={`${i + 1}00ms`} key={language}>
                    <li>{language}</li>
                  </FadeIn>
                );
              })}
            </ul>
          </div>
          <p className="text">Frameworks & Libraries:</p>
          <div className={styles.language_container}>
            <ul className="ul">
              {frameworks.map((framework, i) => {
                return (
                  <FadeIn delay={`${i + 2}50ms`} key={framework}>
                    <li>{framework}</li>
                  </FadeIn>
                );
              })}
            </ul>
          </div>
          <p className="text">Databases & Backend:</p>
          <div className={styles.language_container}>
            <ul className="ul">
              {databases.map((database, i) => {
                return (
                  <FadeIn delay={`${i + 2}50ms`} key={database}>
                    <li>{database}</li>
                  </FadeIn>
                );
              })}
            </ul>
          </div>
          <p className="text">Tools & Technologies:</p>
          <div className={styles.language_container}>
            <ul className="ul">
              {tools.map((tool, i) => {
                return (
                  <FadeIn delay={`${i + 2}50ms`} key={tool}>
                    <li>{tool}</li>
                  </FadeIn>
                );
              })}
            </ul>
          </div>
          <p className="text">
            When I'm not coding, I enjoy poetry, philosophy, and cricket.
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className={styles.picture}>
          <img src="/self-portrait.png" alt="Mohammad Ali"></img>
        </div>
      </FadeIn>
    </div>
  );
};

export default About;
