import Image from "next/image";
import { Offcanvas, Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/Navbar.module.css"

const NavBar = () => {

  return (
    <>
        <Navbar bg="light" expand="false" className={styles.navbar}>
          <Container fluid className="p-3">
            <Navbar.Brand className={styles.brand} href="/">
              <span className={styles.image}>
                <Image src="/car-brand.jpeg" alt="" width={40} height={40} />
              </span>
              Auto Mart</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-false"
              aria-labelledby="offcanvasNavbarLabel-expand-false"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-false" className={styles.title}>
                AutoMart
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/postcar">Post Car</Nav.Link>
                  <Nav.Link href="/advertistment">Cars Advertistment</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  
    </>
  );
}

export default NavBar;
