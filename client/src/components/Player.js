import React, { useRef, useEffect, useState } from 'react'

import piano from '../assets/piano.mp3'
import bass from '../assets/808.mp3'

const Player = (notes) => {
    const playSound = (note) => {
        let player = new Audio(note)
        player.playbackRate = 1.5
        player.play()
    }

    const handleClick = () => {
        const notesArray = Object.values(notes)
        if (notesArray.length > 0) {
            notesArray.forEach((note) => {
                setTimeout(function () {
                    switch (note.y) {
                        case 1:
                            playSound(piano)
                            break
                        case 2:
                            playSound(bass)
                            break
                    }
                }, note.x * 500)
            })
        }
    }

    return <button onClick={handleClick}>Play</button>
}

export default Player
