import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Beats } from './pages/Beats'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/beats" element={<Beats />} />
            </Routes>
        </Router>
    )
}

export default App
