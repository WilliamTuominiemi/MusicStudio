import { useEffect, useState } from 'react'

import { Play, Stop, Pitch, Speed } from './Sound'

import { Dropdown, Form, Button } from 'react-bootstrap'

const Player = (notes) => {
    const [pitch, setPitch] = useState(1.0)
    const [speed, setSpeed] = useState(500)

    let playing = false

    const postData = async () => {
        const data = await fetch('http://localhost:8080', {
            method: 'POST',
            body: JSON.stringify(notes),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const json = await data.json()
        return alert(json.message)
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
    })

    const handleKeyDown = (event) => {
        switch (event.keyCode) {
            case 32:
                if (playing) {
                    playing = false
                } else {
                    playing = true
                    playButton()
                }
                break
            default:
                break
        }
    }

    const playButton = () => {
        Play(notes)
    }

    const onScrollPitch = (e) => {
        Stop()
        const delta = Math.round(e.deltaY * -0.001 * 1000) / 1000
        setPitch(Math.min(Math.max(Math.round((pitch + delta) * 1000) / 1000, 0.5), 5))
        Pitch(pitch)
    }

    const onScrollSpeed = (e) => {
        Stop()
        const delta = Math.round(e.deltaY * -0.1 * 1000) / 1000
        setSpeed(Math.min(Math.max(Math.round((speed + delta) * 1000) / 1000, 100), 1000))
        Speed(speed)
    }

    return (
        <div>
            <button onClick={playButton} style={{ margin: '10px', padding: '10px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M3 22v-20l18 10-18 10z" />
                </svg>
            </button>
            <button onClick={Stop} style={{ margin: '10px', padding: '10px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M2 2h20v20h-20z" />
                </svg>
            </button>
            <div className="scroll" onWheelCapture={onScrollPitch}>
                PITCH
                <p style={{ fontSize: 20, margin: 'auto' }}>{pitch.toFixed(2)}</p>
            </div>
            <div className="scroll" onWheelCapture={onScrollSpeed}>
                SPEED
                <p style={{ fontSize: 20, margin: 'auto' }}>{speed}</p>
            </div>
            <div className="scroll" onClick={() => window.location.reload(false)}>
                <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    style={{ margin: '10px' }}
                >
                    <path d="M7 9h-7v-7h1v5.2c1.853-4.237 6.083-7.2 11-7.2 6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.286 0-11.45-4.844-11.959-11h1.004c.506 5.603 5.221 10 10.955 10 6.071 0 11-4.929 11-11s-4.929-11-11-11c-4.66 0-8.647 2.904-10.249 7h5.249v1z" />
                </svg>
            </div>

            <Dropdown>
                <Dropdown.Toggle className="scroll" variant="light">
                    <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        style={{ margin: '10px' }}
                    >
                        <path d="M9 16h-8v6h22v-6h-8v-1h9v8h-24v-8h9v1zm11 2c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-7.5 0h-1v-14.883l-4.735 5.732-.765-.644 6.021-7.205 5.979 7.195-.764.645-4.736-5.724v14.884z" />
                    </svg>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Form style={{ margin: '10px' }}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Song name" />
                        </Form.Group>

                        <>
                            <Form.Label htmlFor="exampleColorInput">Cover color</Form.Label>
                            <Form.Control
                                type="color"
                                id="exampleColorInput"
                                defaultValue="#563d7c"
                                title="Cover color"
                            />
                        </>

                        <Button variant="dark" type="submit">
                            Upload
                        </Button>
                    </Form>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Player
