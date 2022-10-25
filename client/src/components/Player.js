import piano from '../assets/piano.mp3'
import bass from '../assets/808.mp3'
import hihat from '../assets/hihat.mp3'
import guitar from '../assets/guitar.mp3'
import snare from '../assets/snare.mp3'

const Player = (notes) => {
    const playSound = (note) => {
        let player = new Audio(note)
        player.playbackRate = 1.25
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
            })
        }
    }

    return (
        <button onClick={handleClick} style={{ margin: '10px', padding: '10px' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/0/375.png" height="50px"></img>
        </button>
    )
}

export default Player
