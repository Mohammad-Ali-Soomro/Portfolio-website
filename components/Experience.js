import styles from "../styles/Experience.module.css";
import FadeIn from "./FadeIn";
const Experience = () => {
  const experiences = [
    {
      category: "AI & GENERATIVE AI",
      position: "Sherlock — AI Crime Detective",
      timeline: "2025",
      bullets: [
        "Built a full-stack AI-powered crime investigation app using knowledge graphs and Retrieval-Augmented Generation (RAG) for intelligent case analysis.",
        "Developed a FastAPI backend with LangChain for LLM orchestration and Neo4j graph database for mapping relationships between suspects, evidence, and locations.",
        "Created a Next.js 14 frontend with TypeScript and Tailwind CSS for an interactive investigation dashboard.",
        "Containerized the entire stack with Docker Compose for seamless deployment.",
      ],
    },
    {
      category: "FULL-STACK DEVELOPMENT",
      position: "UROG — Research Opportunities Platform",
      role: "Manager Tech",
      timeline: "2026",
      bullets: [
        "Leading the technical development as Manager Tech, overseeing architecture decisions, code quality, and team coordination.",
        "Built a platform connecting GIKI professors with undergraduate students for research opportunities.",
        "Implemented role-based authentication, admin dashboard with analytics, project management with deadlines and file uploads.",
        "Developed with Next.js 14 (App Router), TypeScript, Supabase, and Tailwind CSS.",
      ],
    },
    {
      category: "FULL-STACK DEVELOPMENT",
      position: "Gikians — Alumni & Scholar Network",
      timeline: "2025",
      bullets: [
        "Developed a social networking platform for GIKI alumni and scholars using Next.js 14, TypeScript, and Supabase.",
        "Implemented AI-powered alumni search, real-time messaging with media support, and a community feed with role-based access.",
        "Designed a Neobrutalism-inspired UI with Tailwind CSS and built a comprehensive database schema for users, posts, comments, and messages.",
      ],
    },
    {
      category: "BACKEND DEVELOPMENT",
      position: "Dareecha 2.0 — Virtual Library",
      timeline: "2025",
      bullets: [
        "Built a peer-to-peer book lending platform for GIKI students with JWT authentication and Microsoft OAuth for university accounts.",
        "Engineered a Node.js/Express.js backend with PostgreSQL and MongoDB, featuring real-time notifications via Socket.IO.",
        "Developed advanced search, borrowing request system with customizable periods, and user dashboards with library analytics.",
      ],
    },
  ];

  return (
    <div id="experience" className="padding">
      <FadeIn>
        <h3 className="heading">/experience</h3>
        {experiences.map((exp, index) => (
          <div className={styles.company} key={index}>
            <div className={styles.grid}>
              <p className={styles.company_name}>{exp.category}</p>
              <div className={styles.bar} />
            </div>
            <div className={styles.description}>
              <h4 className={styles.position}>{exp.position}</h4>
              {exp.role && <h5 className={styles.role}>{exp.role}</h5>}
              <h6 className={styles.timeline}>{exp.timeline}</h6>
              <ul className={styles.bullets}>
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </FadeIn>
    </div>
  );
};

export default Experience;
