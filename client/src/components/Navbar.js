import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap'

export const Navbar_ = () => {
    return (
        <Navbar sticky="top" bg="dark" expand="lg">
            <Container fluid style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to="/" className="nav-link">
                    Studio
                </Link>
                <Link to="/beats" className="nav-link">
                    Beats
                </Link>
            </Container>
        </Navbar>
    )
}
