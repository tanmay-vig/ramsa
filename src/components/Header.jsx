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
                            <div className="mx-2">
                                <Link to="/about" className="l">
                                    About us
                                </Link>
                            </div>
                            <div className="mx-2">
                                <Link to="/organizers" className="l">
                                    Organizers
                                </Link>
                            </div>

                            <div className="mx-2">
                                <a
                                    href="https://sites.google.com/view/ramsa-2024/speakers"
                                    className="l"
                                >
                                    Speakers
                                </a>
                            </div>
                            <div className="mx-2">
                                <Link to="/sessions" className="l">
                                    Call For Sessions
                                </Link>
                            </div>
                            <div className="mx-2">
                                <Link to="/papers" className="l">
                                    Call For Papers
                                </Link>
                            </div>
                            
                            <div className="mx-2">
                                <Link to="/registration" className="l">
                                    Registration
                                </Link>
                            </div>
                            <div className="mx-2">
                                <a href="https://sites.google.com/view/ramsa-24-important-dates/home" className="l">
                                    Important Dates
                                </a>
                            </div>
                            <div className="mx-2">
                                <a href="https://sites.google.com/view/ramsa-24-updates/home" className="l" >
                                    Updates
                                </a>
                            </div>
                            <div className="mx-2">
                                <Link to="/contact" className="l">
                                    Contact Us
                                </Link>
                            </div>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
