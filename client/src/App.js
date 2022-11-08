import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Beats } from './pages/Beats'
import { Navbar } from './components/Navbar'

export const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/beats" element={<Beats />} />
            </Routes>
        </BrowserRouter>
    )
}
