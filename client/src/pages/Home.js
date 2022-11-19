import { Canvas } from '../components/Canvas.js'

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
            <Canvas />
        </div>
    )
}
