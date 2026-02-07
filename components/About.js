import styles from "../styles/About.module.css";
import FadeIn from "./FadeIn";
const About = () => {
  const languages = [
    { name: "Python", icon: "/Python.svg" },
    { name: "JavaScript", icon: "/javascript.svg" },
    { name: "TypeScript", icon: "/typescript.svg" },
    { name: "C", icon: "/c.svg" },
    { name: "C++", icon: "/cpp.svg" },
    { name: "SQL", icon: "/sql.svg" },
  ];
  const frameworks = [
    { name: "Next.js", icon: "/nextjs.svg" },
    { name: "React", icon: "/react.svg" },
    { name: "Django", icon: "/django.svg" },
    { name: "Flask", icon: "/flask.svg" },
    { name: "FastAPI", icon: "/fastapi.svg" },
    { name: "Node.js", icon: "/nodejs.svg" },
    { name: "Express.js", icon: "/express.svg" },
    { name: "MERN Stack", icon: "/mern.svg" },
    { name: "LangChain", icon: "/langchain.svg" },
  ];
  const databases = [
    { name: "PostgreSQL", icon: "/postgresql.svg" },
    { name: "Supabase", icon: "/supabase.svg" },
    { name: "Neo4j", icon: "/neo4j.svg" },
    { name: "MongoDB", icon: "/mongodb.svg" },
    { name: "Firebase", icon: "/firebase.svg" },
  ];
  const tools = [
    { name: "Docker", icon: "/docker.svg" },
    { name: "Git", icon: "/git.svg" },
    { name: "Tailwind CSS", icon: "/tailwind.svg" },
    { name: "Socket.IO", icon: "/socketio.svg" },
  ];
  return (
    <div id="about" className={styles.main_container}>
      <FadeIn>
        <div className="padding">
          <h3 className="heading">/about me</h3>
          <p className="text">
            I don't just write code —
            <span className={styles.highlight}> I engineer experiences</span>.
            A CS undergrad at
            <span className={styles.highlight}> GIKI</span> who turns caffeine
            into
            <span className={styles.highlight}> full-stack products</span> and
            bends
            <span className={styles.highlight}> Generative AI</span> to do
            things it wasn't supposed to. If it can be built, I've probably
            already started.
          </p>
          <br />
          <p className="text">Languages I work with:</p>

          <div className={styles.skills_grid}>
            {languages.map((lang, i) => (
              <FadeIn delay={`${i + 1}00ms`} key={lang.name}>
                <div className={styles.skill_chip}>
                  <img src={lang.icon} alt={lang.name} className={styles.skill_icon} />
                  <span>{lang.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="text">Frameworks & Libraries:</p>
          <div className={styles.skills_grid}>
            {frameworks.map((fw, i) => (
              <FadeIn delay={`${i + 1}00ms`} key={fw.name}>
                <div className={styles.skill_chip}>
                  <img src={fw.icon} alt={fw.name} className={styles.skill_icon} />
                  <span>{fw.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="text">Databases & Backend:</p>
          <div className={styles.skills_grid}>
            {databases.map((db, i) => (
              <FadeIn delay={`${i + 1}00ms`} key={db.name}>
                <div className={styles.skill_chip}>
                  <img src={db.icon} alt={db.name} className={styles.skill_icon} />
                  <span>{db.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className="text">Tools & Technologies:</p>
          <div className={styles.skills_grid}>
            {tools.map((tool, i) => (
              <FadeIn delay={`${i + 1}00ms`} key={tool.name}>
                <div className={styles.skill_chip}>
                  <img src={tool.icon} alt={tool.name} className={styles.skill_icon} />
                  <span>{tool.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <p className={styles.hobby_text}>
            When I'm not coding, I enjoy poetry, philosophy, and cricket.
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default About;
