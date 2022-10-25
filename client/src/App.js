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
            <div class="grid-container">
                <div class="grid-item">PIANO</div>
                <div class="grid-item">GUITAR</div>
                <div class="grid-item">KICK</div>
                <div class="grid-item">HIHAT</div>
                <div class="grid-item">SNARE</div>
            </div>
            <Canvas />
        </div>
    )
}

export default App
