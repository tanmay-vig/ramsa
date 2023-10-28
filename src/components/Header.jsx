import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/" className="text-white">
                        <b>RAMSA</b>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        className="bg-white"
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link eventKey="1">
                                <Link to="/about" className="l">
                                    About us
                                </Link>
                            </Nav.Link>
                            <Nav.Link eventKey="2">
                                <Link to="/organizers" className="l">
                                    Organizers
                                </Link>
                            </Nav.Link>
                            <Nav.Link eventKey="3">
                                <Link to="/resourceperson" className="l">
                                    Speakers
                                </Link>
                            </Nav.Link>
                            <Nav.Link eventKey="4">
                                <Link to="/sessions" className="l">
                                    Sessions
                                </Link>
                            </Nav.Link>
                            <Nav.Link eventKey="5">
                                <Link to="/papers" className="l">
                                    Papers
                                </Link>
                            </Nav.Link>
                            <Nav.Link eventKey="6">
                                <Link to="/registration" className="l">
                                    Registration
                                </Link>
                            </Nav.Link>
                            <Nav.Link eventKey="7">
                                <Link to="/annoucements" className="l">
                                    Annoucements
                                </Link>
                            </Nav.Link>
                            <Nav.Link eventKey="8">
                                <Link to="/importantdates" className="l">
                                    Important Dates
                                </Link>
                            </Nav.Link>
                            <Nav.Link eventKey="9">
                                <Link to="/contact" className="l">
                                    Contact Us
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
