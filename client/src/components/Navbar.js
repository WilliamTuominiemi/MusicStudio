import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            {/* <Link to="/" className="navbar-brand">
                <svg
                    style={{ margin: '10px', marginLeft: '15px', fill: '#f2f2f2' }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="40px"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.141 16.566l1.081-6.964 1.104 4.742c.109.486.784.541.968.073l1.001-2.557.934 2.176c.155.361.644.417.876.1l.85-1.156h1.837c.271 0 .49-.22.49-.49s-.22-.49-.49-.49h-2.099c-.162 0-.315.078-.41.208l-.472.611-1.071-2.496c-.179-.417-.773-.408-.939.016l-.848 2.168-1.308-6.102c-.123-.548-.907-.517-.996.03l-1.084 7-1.108-4.118c-.124-.492-.818-.52-.975-.032l-.825 2.715h-2.885c-.27 0-.49.22-.49.49s.22.49.49.49h3.284c.184 0 .382-.148.434-.324l.411-1.387 1.247 5.338c.135.537.905.501.993-.041z" />
                </svg>
            </Link> */}
            <div className="collpase navbar-collapse" style={{ display: 'flex', justifyContent: 'center' }}>
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
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
                    </li>

                    <li className="navbar-item">
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
                    </li>
                </ul>
            </div>
        </nav>
    )
}
