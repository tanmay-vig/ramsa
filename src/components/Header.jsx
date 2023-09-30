
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import './Header.css'
export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="/">
          <b>RAMSA</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >
            <Link to='/' className='l'>
              Home
            </Link>
              </Nav.Link>
            <Nav.Link>
              <Link to='/about' className='l'>

              About us
              </Link>
              </Nav.Link>
            <Nav.Link >
              <Link to="/organizers" className='l'>Organizers</Link>
              </Nav.Link>
            <Nav.Link >
              <Link to="/resourceperson" className='l'>

              Resource Person
              </Link>
              </Nav.Link>
            <Nav.Link>
              <Link to="/sessions" className='l'>
              Sessions
              </Link>
              </Nav.Link>
            <Nav.Link>
              <Link to="/papers" className='l'>Papers</Link>
              
              </Nav.Link>
            <Nav.Link>
              <Link to="/registration" className='l'>
              Registration
              </Link>
              </Nav.Link>
            <Nav.Link>
              <Link to="/annoucements" className='l'>

              Annoucements
              </Link>
              </Nav.Link>
            <Nav.Link>
              <Link to="/importantdates" className='l'>

              Important Dates
              </Link>
              </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className='l'>

              Contact Us
              </Link>
              </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
