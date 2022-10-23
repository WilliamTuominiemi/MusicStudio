import './App.css'
import Canvas from './components/Canvas.js'

function App() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50vh',
                width: '80vh',
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-25vh',
                marginLeft: '-40vh',
            }}
        >
            <Canvas />
        </div>
    )
}

export default App
