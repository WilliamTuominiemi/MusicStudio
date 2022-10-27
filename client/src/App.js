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
                <div className="grid-item">BELL</div>
                <div className="grid-item">SYNTH</div>
                <div className="grid-item">808</div>
                <div className="grid-item">HIHAT</div>
                <div className="grid-item">CLAP</div>
            </div>
            <Canvas />
        </div>
    )
}

export default App
