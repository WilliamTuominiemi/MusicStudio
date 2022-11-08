import { Link } from 'react-router-dom'
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap'

export const Navbar = () => {
    return (
        <BootstrapNavbar bg="dark" expand="lg" style={{ marginBottom: '20px' }}>
            <Container fluid style={{ display: 'flex', justifyContent: 'center' }}>
                <Nav>
                    <Link to="/" className="nav-link">
                        <svg
                            style={{ margin: '10px', fill: '#f2f2f2' }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="30px"
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 6c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12zm-10 12h-12v-12h12v12zm7.638-8.594c1.426 1.271 1.55 3.454.279 4.879-1.258 1.41-3.442 1.561-4.88.278-1.422-1.269-1.546-3.457-.278-4.879 1.258-1.41 3.441-1.56 4.879-.278zm-.791.887c-.935-.833-2.367-.751-3.2.183s-.751 2.367.183 3.2c.935.833 2.366.751 3.2-.183.832-.933.75-2.366-.183-3.2zm-1.94 1.159c-.251-.224-.272-.609-.049-.86.224-.251.609-.273.86-.049s.273.609.049.86c-.223.25-.609.273-.86.049zm-12.907 4.548h-2v-4h2v4zm3 0h-2v-6h2v6zm3 0h-2v-2h2v2zm-6-5h-2v-1h2v1zm3-2h-2v-1h2v1zm3 4h-2v-1h2v1z" />
                        </svg>
                    </Link>
                </Nav>
                <Nav>
                    <Link to="/beats" className="nav-link">
                        <svg
                            style={{ margin: '10px', fill: '#f2f2f2' }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="30px"
                            viewBox="0 0 24 24"
                        >
                            <path d="M1 13h-1v-1h1v1zm22-1h-1v1h1v-1zm-20-1h-1v3h1v-3zm18 0h-1v3h1v-3zm-14 0h-1v3h1v-3zm10-1h-1v5h1v-5zm-12 0h-1v5h1v-5zm14-1h-1v7h1v-7zm-10 0h-1v7h1v-7zm2-2h-1v10h1v-10zm4 0h-1v10h1v-10zm-2-2h-1v14h1v-14z" />
                        </svg>
                    </Link>
                </Nav>
            </Container>
        </BootstrapNavbar>
    )
}
