import { BeatCard } from '../components/BeatCard'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

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

    return  (
        <Container className="container">
            {beats.map((beat) => (
                <BeatCard key={beat._id} beat={beat} />
            ))}
        </Container> 
    )
}
