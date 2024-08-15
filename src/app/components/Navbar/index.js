"use client";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./style.module.css";

import Image from "next/image";
import menuHamburger from "../../../../datas/menu-scale.png";
export default function NavBar() {
  return (
    <Navbar className={styles.customNavbar} expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{ color: "#78350F" }}>
          <span>Collers</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "none", background: "transparent" }} 
        >
          <Image width={24} height={24} src={menuHamburger} /> 
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarCollapse}>
          <Nav className="ms-auto">
            <Nav.Link href="/" className={styles.navLink}>
              Products
            </Nav.Link>
            <Nav.Link href="/" className={styles.navLink}>
              Solutions
            </Nav.Link>
            <Nav.Link href="/" className={styles.navLink}>
              Pricing
            </Nav.Link>
            <Nav.Link href="/" className={styles.navLink}>
              Resources
            </Nav.Link>
            <Nav.Link href="/" className={styles.navLink}>
              Log In
            </Nav.Link>
            <Nav.Link href="/" className={`btn ${styles.navSignup}`}>
              Sign Up Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
