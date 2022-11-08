import { useEffect, useState } from 'react'
import { Play, Stop, Pitch, Speed } from './Sound'
import { Dropdown, Form, Button, ButtonGroup, ToggleButton, Card } from 'react-bootstrap'

export const Player = (notes) => {
    const [pitch, setPitch] = useState(1.0)
    const [speed, setSpeed] = useState(500)

    const [name, setName] = useState('')
    const [cover, setCover] = useState('#563d7c')

    const [radioValue, setRadioValue] = useState('1')
    const radios = [
        { name: '⏹️', value: '1' },
        { name: '▶️', value: '2' },
    ]

    let playing = false

    const postData = async () => {
        const body = {
            name,
            cover,
            pitch,
            speed,
            notes,
        }

        const data = await fetch('http://localhost:8080', {
            method: 'POST',
            body: JSON.stringify(body),
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
                    setRadioValue(1)
                } else {
                    playing = true
                    setRadioValue(2)
                }
                break
            default:
                break
        }
    }

    const onScrollPitch = (e) => {
        Stop()
        const delta = Math.round(e.deltaY * -0.1 * 1000) / 1000
        setPitch(Math.min(Math.max(Math.round((pitch + delta) * 1000) / 1000, 0.5), 5))
        Pitch(pitch)
    }

    const onScrollSpeed = (e) => {
        Stop()
        const delta = Math.round(e.deltaY * -10 * 1000) / 1000
        setSpeed(Math.min(Math.max(Math.round((speed + delta) * 1000) / 1000, 100), 1000))
        Speed(speed)
    }

    const controlButton = (e) => {
        setRadioValue(e)
        console.log(e)
        if (e === '2') {
            Play(notes)
            setTimeout(() => {
                setRadioValue('1')
                Stop()
            }, 15 * speed)
        } else {
            Stop()
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <ButtonGroup style={{ backgroundColor: 'rgba(255,255,255)' }} size="lg">
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => controlButton(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
            <Card style={{ margin: '10px', width: '125px' }}>
                <div onWheelCapture={onScrollPitch}>
                    PITCH
                    <p style={{ fontSize: 20, margin: 'auto' }}>{pitch.toFixed(2)}</p>
                </div>
            </Card>
            <Card style={{ margin: '10px', width: '125px' }}>
                <div onWheelCapture={onScrollSpeed}>
                    SPEED
                    <p style={{ fontSize: 20, margin: 'auto' }}>{speed}</p>
                </div>
            </Card>
            <Button style={{ width: '125px' }} size="lg" onClick={() => window.location.reload(false)} variant="light">
                🗑️
            </Button>

            <Dropdown>
                <Dropdown.Toggle
                    align="end"
                    drop="down"
                    size="lg"
                    variant="light"
                    style={{ width: '125px', margin: '10px' }}
                >
                    <h1>📤</h1>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Form style={{ margin: '10px' }}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                defaultValue={name}
                                type="text"
                                placeholder="Song name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Label htmlFor="exampleColorInput">Cover color</Form.Label>
                        <Form.Control
                            type="color"
                            id="exampleColorInput"
                            defaultValue={cover}
                            title="Cover color"
                            onChange={(e) => setCover(e.target.value)}
                        />

                        <Button
                            onClick={async () => {
                                await postData()
                            }}
                            variant="dark"
                        >
                            Upload
                        </Button>
                    </Form>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
