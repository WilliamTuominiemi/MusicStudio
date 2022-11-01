import { useEffect, useState } from 'react'

import { Play, Stop, Pitch, Speed } from './Sound'

import { Card } from 'react-bootstrap'

export const BeatCard = (data) => {
    useEffect(() => {
        fixArray(data)
    })

    const notes = []

    const fixArray = (data) => {
        data.beat.notes.forEach((note) => {
            notes.push(note[1])
        })
        console.log(notes)
    }

    const playButton = () => {
        Play(notes)
    }

    return (
        <Card className="beat-card" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title color="text.secondary">{data.beat._id}</Card.Title>
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
            </Card.Body>
        </Card>
    )
}
