import Canvas from './components/Canvas.js'
import { useEffect } from 'react'

const getData = async () => {
    const data = await fetch('http://localhost:8080')
    const json = await data.json()
    return json
}

function App() {
    useEffect(() => {
        getData().then((data) => {
            console.log(data)
        })
    }, [])

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
