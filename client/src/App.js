import Canvas from './components/Canvas.js'

function App() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <div className="grid-container">
                <div className="grid-item">PIANO</div>
                <div className="grid-item">GUITAR</div>
                <div className="grid-item">KICK</div>
                <div className="grid-item">HIHAT</div>
                <div className="grid-item">SNARE</div>
            </div>
            <Canvas />
        </div>
    )
}

export default App
