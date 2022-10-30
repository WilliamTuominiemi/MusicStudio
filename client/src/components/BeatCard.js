import { useEffect, useState } from 'react'

import { Play, Stop, Pitch, Speed } from './Sound'

export const BeatCard = (data) => {
    useEffect(() => {
        fixArray(data)
    }, [])

    const notes = []

    const fixArray = (data) => {
        // console.log(data.beat.notes[0][1])
        data.beat.notes.forEach((note) => {
            notes.push(note[1])
        })
        console.log(notes)
    }

    const playButton = () => {
        Play(notes)
    }

    return (
        <div>
            <p>{data.beat._id}</p>
            <button onClick={playButton} style={{ margin: '10px', padding: '10px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M3 22v-20l18 10-18 10z" />
                </svg>
            </button>
        </div>
    )
}
