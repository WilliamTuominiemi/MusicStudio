import { useEffect, useState } from 'react'

export const BeatCard = (data) => {
    useEffect(() => {
        fixArray(data)
    }, [])

    const beats = []

    const fixArray = (data) => {
        // console.log(data.beat.notes[0][1])
        data.beat.notes.forEach((note) => {
            beats.push(note[1])
        })
        console.log(beats)
    }

    return (
        <div>
            <p>{data.beat._id}</p>
        </div>
    )
}
