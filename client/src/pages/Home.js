import { Canvas } from '../components/Canvas.js'
import { Dropdown, DropdownButton, Container, Row, Col } from 'react-bootstrap'

export const Home = () => {
    const sounds = [{ value: '🔔' }, { value: '🎹' }, { value: '🎸' }, { value: '🥁' }, { value: '👏' }]

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
                <Col>
                    {sounds.map((sound) => (
                        <Row className="grid-item">
                            <DropdownButton
                                variant="secondary"
                                drop={'start'}
                                title={sound.value}
                                size="lg"
                                style={{ margin: 'auto' }}
                            >
                                <Dropdown.Item eventKey="1">INSTRUMENT</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="2">PITCH</Dropdown.Item>
                                <Dropdown.Item eventKey="3">NOTE</Dropdown.Item>
                            </DropdownButton>
                        </Row>
                    ))}
                </Col>
            </div>
            <Canvas />
        </div>
    )
}
