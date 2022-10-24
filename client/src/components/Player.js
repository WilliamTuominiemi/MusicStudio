import React, { useRef, useEffect, useState } from 'react'

import sound from '../assets/piano.mp3'

const Player = (notes) => {
    const playSound = () => {
        let player = new Audio(sound)
        player.playbackRate = 1.5
        player.play()
    }

    const handleClick = () => {
        const notesArray = Object.values(notes)
        if (notesArray.length > 0) {
            notesArray.forEach((note) => {
                setTimeout(playSound, note.x * 500)
            })
        }
    }

    return <button onClick={handleClick}>Play</button>
}

export default Player
