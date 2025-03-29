import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { LinkedIn, GitHub } from "@mui/icons-material/";
import { Nav, Navbar } from "react-bootstrap";
import styles from "../styles/Navbar.module.css";
const NavbarComponent = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Navbar fixed="top" className={styles.background}>
      <Navbar.Brand
        className={styles.name}
        onClick={handleScrollToTop}
        href="#"
      >
        Amna Kamran
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            className={styles.tab_text}
            onClick={handleScrollToTop}
            href="#intro"
            active
          >
            Home
          </Nav.Link>
          <Nav.Link className={styles.tab_text} href="#about" active>
            About
          </Nav.Link>
          <Nav.Link className={styles.tab_text} href="#experience" active>
            Experience
          </Nav.Link>
          <Nav.Link className={styles.tab_text} href="#projects" active>
            Projects
          </Nav.Link>
        </Nav>
        <Nav className="m1-auto">
          <Nav.Link
            href="mailto:amnakamran139@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EnvelopeIcon className={styles.icon} />
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/amnakamranbutt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className={styles.icon} />
          </Nav.Link>
          <Nav.Link
            href="https://github.com/amna-kamran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className={styles.icon} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarComponent;
