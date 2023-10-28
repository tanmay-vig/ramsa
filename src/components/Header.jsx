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
                        <Nav className="">
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
                            <div className="m-auto">
                                <a href="https://sites.google.com/view/ramsa-2024/speakers" className="l">
                                    Speakers
                                </a>
                            </div>
                            <Nav.Link eventKey="4">
                                <Link to="/sessions" className="l">
                                    Call For Sessions
                                </Link>
                            </Nav.Link>
                            <Nav.Link eventKey="5">
                                <Link to="/papers" className="l">
                                    Call For Papers
                                </Link>
                            </Nav.Link>
                            <Nav.Link eventKey="6">
                                <Link to="/registration" className="l">
                                    Registration
                                </Link>
                            </Nav.Link>
                            
                            <Nav.Link eventKey="7">
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
