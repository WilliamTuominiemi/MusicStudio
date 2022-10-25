import bell from '../assets/bell.mp3'
import bass from '../assets/808.mp3'
import hihat from '../assets/hihat.mp3'
import synth from '../assets/synth.mp3'
import clap from '../assets/clap.mp3'
import { useEffect, useState } from 'react'

const Player = (notes) => {
    const [pitch, setPitch] = useState(1.00)
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
        const delta = Math.round((e.deltaY * -0.001)*1000) / 1000
        setPitch(Math.min(Math.max((Math.round((pitch + delta)*1000) / 1000), 0.5), 5))
    }

    const onScrollSpeed = (e) => {
        stop()
        const delta = Math.round((e.deltaY * -0.1)*1000) / 1000
        setSpeed(Math.min(Math.max((Math.round((speed + delta)*1000) / 1000), 100), 1000))
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
            <div className='scroll' onWheelCapture={onScrollPitch}>
                    PITCH
                <p style={{fontSize: 20, margin: 'auto'}}>{pitch.toFixed(2)}</p>
            </div>
            <div className='scroll' onWheelCapture={onScrollSpeed}>
                    SPEED
                <p style={{fontSize: 20, margin: 'auto'}}>{speed}</p>
            </div>
        </div>
    )
}

export default Player
