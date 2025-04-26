import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function MainNav() {
  const router = useRouter();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link href="/" passHref legacyBehavior>
            <Navbar.Brand>MC Form</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Home</Nav.Link>
              </Link>

              <Link href="/rules" passHref legacyBehavior>
                <Nav.Link>Rules</Nav.Link>
              </Link>
              <Link href="/catalogue" passHref legacyBehavior>
                <Nav.Link>Cards</Nav.Link>
              </Link>

              <Link href="/submit" passHref legacyBehavior>
                <Nav.Link>Submit</Nav.Link>
              </Link>
            </Nav>
            <Nav>
              <Link href="/account" passHref legacyBehavior>
                <Nav.Link href="#account">Account</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
