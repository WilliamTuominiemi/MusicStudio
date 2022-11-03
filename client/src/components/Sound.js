import bell from '../assets/bell.mp3'
import bass from '../assets/808.mp3'
import hihat from '../assets/hihat.mp3'
import synth from '../assets/synth.mp3'
import clap from '../assets/clap.mp3'

let pitch = 1.0
let speed = 500

let timeouts = []

export const Play = (notes) => {
    Stop()
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

const playSound = (note) => {
    let player = new Audio(note)
    player.playbackRate = pitch
    player.play()
}

export const Stop = () => {
    for (let i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i])
    }

    timeouts = []
}

export const Pitch = (p) => {
    pitch = p
}

export const Speed = (s) => {
    speed = s
}
