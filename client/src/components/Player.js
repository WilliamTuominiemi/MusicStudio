import bell from '../assets/bell.mp3'
import bass from '../assets/808.mp3'
import hihat from '../assets/hihat.mp3'
import synth from '../assets/synth.mp3'
import clap from '../assets/clap.mp3'
import { useEffect, useState } from 'react'

const Player = (notes) => {
    const [pitch, setPitch] = useState(1.0)
    const [speed, setSpeed] = useState(500)

    let timeouts = []

    let playing = false

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
    }, [])

    const handleKeyDown = (event) => {
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
        player.playbackRate = pitch
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
                                playSound(bell)
                                break
                            case 2:
                                playSound(synth)
                                break
                            case 3:
                                playSound(bass)
                                break
                            case 4:
                                playSound(hihat)
                                break
                            case 5:
                                playSound(clap)
                                break
                            default:
                                break
                        }
                    }, note.x * speed)
                )
            })
        }
    }

    const stop = () => {
        for (let i = 0; i < timeouts.length; i++) {
            clearTimeout(timeouts[i])
        }

        timeouts = []
    }

    const onScrollPitch = (e) => {
        stop()
        const delta = Math.round(e.deltaY * -0.001 * 1000) / 1000
        setPitch(Math.min(Math.max(Math.round((pitch + delta) * 1000) / 1000, 0.5), 5))
    }

    const onScrollSpeed = (e) => {
        stop()
        const delta = Math.round(e.deltaY * -0.1 * 1000) / 1000
        setSpeed(Math.min(Math.max(Math.round((speed + delta) * 1000) / 1000, 100), 1000))
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
            <div className="scroll" onWheelCapture={onScrollPitch}>
                PITCH
                <p style={{ fontSize: 20, margin: 'auto' }}>{pitch.toFixed(2)}</p>
            </div>
            <div className="scroll" onWheelCapture={onScrollSpeed}>
                SPEED
                <p style={{ fontSize: 20, margin: 'auto' }}>{speed}</p>
            </div>
            <div className="scroll" onClick={() => window.location.reload(false)}>
                <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    style={{ margin: '10px' }}
                >
                    <path d="M7 9h-7v-7h1v5.2c1.853-4.237 6.083-7.2 11-7.2 6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.286 0-11.45-4.844-11.959-11h1.004c.506 5.603 5.221 10 10.955 10 6.071 0 11-4.929 11-11s-4.929-11-11-11c-4.66 0-8.647 2.904-10.249 7h5.249v1z" />
                </svg>
            </div>
        </div>
    )
}

export default Player
