import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
export default function Header() {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Navbar expanded={expanded} expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/" className="text-white">
                        <b>RAMSA</b>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        onClick={() =>
                            setExpanded(expanded ? false : "expanded")
                        }
                        aria-controls="basic-navbar-nav"
                        className="bg-white"
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <Nav.Item
                                className="mx-2"
                                onClick={() => setExpanded(false)}
                            >
                                <Link to="/about" className="l">
                                    About us
                                </Link>
                            </Nav.Item>
                            <Nav.Item
                                className="mx-2"
                                onClick={() => setExpanded(false)}
                            >
                                <Link to="/organizers" className="l">
                                    Organizers
                                </Link>
                            </Nav.Item>

                            <Nav.Item
                                className="mx-2"
                                onClick={() => setExpanded(false)}
                            >
                                <a
                                    href="https://sites.google.com/view/ramsa-24-speakers/home"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="l"
                                >
                                    Speakers
                                </a>
                            </Nav.Item>
                            <Nav.Item
                                className="mx-2"
                                onClick={() => setExpanded(false)}
                            >
                                <Link to="/sessions" className="l">
                                    Call For Sessions
                                </Link>
                            </Nav.Item>
                            <Nav.Item
                                className="mx-2"
                                onClick={() => setExpanded(false)}
                            >
                                <Link to="/papers" className="l">
                                    Call For Papers
                                </Link>
                            </Nav.Item>

                            <Nav.Item
                                className="mx-2"
                                onClick={() => setExpanded(false)}
                            >
                                <Link to="/registration" className="l">
                                    Registration
                                </Link>
                            </Nav.Item>
                            <Nav.Item
                                className="mx-2"
                                onClick={() => setExpanded(false)}
                            >
                                <a
                                    href="https://sites.google.com/view/ramsa-24-important-dates/home"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="l"
                                >
                                    Important Dates
                                </a>
                            </Nav.Item>
                            <Nav.Item
                                className="mx-2"
                                onClick={() => setExpanded(false)}
                            >
                                <a
                                    href="https://sites.google.com/view/ramsa-24-updates/home"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="l"
                                >
                                    Updates
                                </a>
                            </Nav.Item>
                            <Nav.Item
                                className="mx-2"
                                onClick={() => setExpanded(false)}
                            >
                                <Link to="/contact" className="l">
                                    Contact Us
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
