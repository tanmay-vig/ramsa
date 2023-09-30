
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="/">RAMSA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/organizers">Organizers</Nav.Link>
            <Nav.Link href="/resourceperson">Resource Person</Nav.Link>
            <Nav.Link href="/sessions">Sessions</Nav.Link>
            <Nav.Link href="/papers">Papers</Nav.Link>
            <Nav.Link href="/registration">Registration</Nav.Link>
            <Nav.Link href="/annoucements">Annoucements</Nav.Link>
            <Nav.Link href="/importantdates">Important Dates</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
