import { Dropdown, DropdownButton, Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Play, Stop, Pitch, Speed } from './Sound'

export const Notes = ({ getNotes }) => {
    const sounds = [{ value: '🔔' }, { value: '🎹' }, { value: '🎸' }, { value: '🥁' }, { value: '👏' }]

    const [pitch, setPitch] = useState(
        { id: 0, _pitch: 1.0 },
        { id: 1, _pitch: 1.0 },
        { id: 2, _pitch: 1.0 },
        { id: 3, _pitch: 1.0 },
        { id: 4, _pitch: 1.0 }
    )

    useEffect(() => {
        getNotes(Pitch)
    }, [])

    const updateObjectInArray = (id, newPitch) => {
        // setPitch((current) =>
        //     current.map((obj) => {
        //         if (obj.id === 2) {
        //             return { ...obj, name: 'Sophia', country: 'Sweden' }
        //         }
        //         return obj
        //     })
        // )
    }

    const onScrollPitch = (e) => {
        const delta = Math.round(e.deltaY * -0.1 * 1000) / 1000
        const newPitch = Math.min(Math.max(Math.round((pitch[parseInt(e.target.id)] + delta) * 1000) / 1000, 0.5), 5)

        updateObjectInArray(parseInt(e.target.id), newPitch)
    }

    return (
        <div className="grid-container">
            <Col>
                {sounds.map((sound, idx) => (
                    <Row className="grid-item" key={idx} id={`drowdown-${idx}`}>
                        <DropdownButton
                            variant="secondary"
                            drop={'start'}
                            title={sound.value}
                            size="lg"
                            style={{ margin: 'auto' }}
                        >
                            <Dropdown.Item eventKey="1">INSTRUMENT</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2">PITCH {idx}</Dropdown.Item>
                            <div onWheelCapture={onScrollPitch} id={idx}>
                                1.00
                            </div>
                        </DropdownButton>
                    </Row>
                ))}
            </Col>
        </div>
    )
}
