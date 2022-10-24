import React, { useRef, useEffect, useState } from 'react'

import sound from '../assets/piano.mp3'

const Player = (notes) => {
    const handleClick = () => {
        const notesArray = Object.values(notes)
        if (notesArray.length > 0) {
            console.log(notesArray)
        }
    }

    return <button onClick={handleClick}>Play</button>
}

export default Player
