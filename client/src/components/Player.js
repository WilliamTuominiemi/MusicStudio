import React, { useRef, useEffect, useState } from 'react'

const Player = (notes) => {
    useEffect(() => {
        console.log(notes)
    }, [])

    const handleClick = () => {
        console.log('click')
        console.log(notes)
    }

    return <button onClick={handleClick}></button>
}

export default Player
