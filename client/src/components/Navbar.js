import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">
                MusicStudio
            </Link>
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">
                            Studio
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/beats" className="nav-link">
                            Beats
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
