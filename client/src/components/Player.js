import piano from '../assets/piano.mp3'
import bass from '../assets/808.mp3'
import hihat from '../assets/hihat.mp3'
import guitar from '../assets/guitar.mp3'
import snare from '../assets/snare.mp3'
import { useEffect } from 'react'

const Player = (notes) => {
    let timeouts = []

    let playing = false

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
    }, [])

    const handleKeyDown = (event) => {
        console.log(event.keyCode)
        switch (event.keyCode) {
            case 32:
                if (playing) {
                    playing = false
                    stop()
                } else {
                    playing = true
                    playButton()
                }
                break
            default:
                break
        }
    }

    const playSound = (note) => {
        let player = new Audio(note)
        player.playbackRate = 1.25
        player.play()
    }

    const playButton = () => {
        stop()
        const notesArray = Object.values(notes)
        if (notesArray.length > 0) {
            notesArray.forEach((note) => {
                timeouts.push(
                    setTimeout(function () {
                        switch (note.y) {
                            case 1:
                                playSound(piano)
                                break
                            case 2:
                                playSound(guitar)
                                break
                            case 3:
                                playSound(bass)
                                break
                            case 4:
                                playSound(hihat)
                                break
                            case 5:
                                playSound(snare)
                                break
                            default:
                                break
                        }
                    }, note.x * 500)
                )
            })
            console.log(timeouts)
        }
    }

    const stop = () => {
        for (let i = 0; i < timeouts.length; i++) {
            clearTimeout(timeouts[i])
        }

        timeouts = []
    }

    return (
        <div>
            <button onClick={playButton} style={{ margin: '10px', padding: '10px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M3 22v-20l18 10-18 10z" />
                </svg>
            </button>
            <button onClick={stop} style={{ margin: '10px', padding: '10px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M2 2h20v20h-20z" />
                </svg>
            </button>
        </div>
    )
}

export default Player
