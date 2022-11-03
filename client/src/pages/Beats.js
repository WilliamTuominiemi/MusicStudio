import { BeatCard } from '../components/BeatCard'
import { useEffect, useState } from 'react'

import { Card, Container, Row, Col } from 'react-bootstrap'

export const Beats = () => {
    const [beats, setBeats] = useState([])

    const getData = async () => {
        const data = await fetch('http://localhost:8080')
        const json = await data.json()
        return json
    }

    useEffect(() => {
        getData().then((data) => {
            setBeats(data.beats)
        })
    }, [])

    const beatsList = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Container>
                    {beats.map((beat) => (
                        <BeatCard key={beat._id} beat={beat} />
                    ))}
                </Container>
            </div>
        )
    }

    return <>{beatsList()}</>
}
