import { useEffect, useRef } from 'react'
import { Play, Stop, Pitch, Speed } from './Sound'
import { Card, Col, Button } from 'react-bootstrap'

export const BeatCard = (data) => {
    let playing = false

    const vinylRef = useRef(null)

    useEffect(() => {
        fixArray(data.beat.notes)
    })

    const notes = []

    const fixArray = (data) => {
        data.forEach((note) => {
            notes.push(note[1])
        })
    }

    const playButton = () => {
        if (!playing) {
            playing = true
            Pitch(data.beat.pitch)
            Speed(data.beat.speed)
            Play(notes)
            vinylRef.current.setAttribute('id', 'vinyl')
            setTimeout(() => {
                vinylRef.current.removeAttribute('id')
                playing = false
            }, 10000)
        }
    }

    const stopButton = () => {
        Stop()
        playing = false
        vinylRef.current.removeAttribute('id')
    }

    return (
        <Col>
            <Card className="beat-card" style={{ width: '18rem', float: 'left', background: '#373737' }}>
                <Card.Body>
                    <Card.Title style={{ color: 'white' }}>{data.beat.name}</Card.Title>
                    <div>
                        <svg
                            className="vinyl"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50%"
                            height="50%"
                            viewBox="0 0 24 24"
                            style={{ fill: data.beat.cover }}
                            ref={vinylRef}
                        >
                            <path d="M12 8c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.104 0-2-.897-2-2s.896-2 2-2 2 .897 2 2-.896 2-2 2zm0-12c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.914 20.526c-2.625-.902-4.697-2.978-5.592-5.606l1.02-.127c.807 2.174 2.529 3.901 4.699 4.714l-.127 1.019zm.258-2.054c-1.723-.71-3.098-2.085-3.807-3.807l1.041-.13c.596 1.272 1.623 2.299 2.895 2.896l-.129 1.041zm8.095-9.007c-.598-1.272-1.625-2.3-2.896-2.896l.131-1.041c1.721.71 3.096 2.085 3.807 3.807l-1.042.13zm2.049-.256c-.814-2.157-2.529-3.869-4.691-4.677l.129-1.019c2.613.896 4.68 2.958 5.582 5.568l-1.02.128z" />
                        </svg>
                    </div>

                    <Button style={{ margin: '10px' }} onClick={stopButton} variant="light">
                        ⏹️
                    </Button>
                    <Button style={{ margin: '10px' }} onClick={playButton} variant="light">
                        ▶️
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
