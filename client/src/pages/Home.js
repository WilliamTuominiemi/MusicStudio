import Canvas from '../components/Canvas.js'

export const Home = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh',
            }}
        >
            <div className="grid-container">
                <div className="grid-item">🔔</div>
                <div className="grid-item">🎹</div>
                <div className="grid-item">🎸</div>
                <div className="grid-item">🥁</div>
                <div className="grid-item">👏</div>
            </div>
            <Canvas />
        </div>
    )
}
