import { BeatCard } from '../components/BeatCard'
import { useEffect, useState } from 'react'

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
                {beats.map((beat) => (
                    <BeatCard key={beat._id} beat={beat} />
                ))}
            </div>
        )
    }

    return <>{beatsList()}</>
}
