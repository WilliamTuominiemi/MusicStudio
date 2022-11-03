import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Beats } from './pages/Beats'
import { Navbar_ } from './components/Navbar'

function App() {
    return (
        <Router>
            <Navbar_ />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/beats" element={<Beats />} />
            </Routes>
        </Router>
    )
}

export default App
