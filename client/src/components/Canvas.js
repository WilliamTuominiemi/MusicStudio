import { useRef, useEffect, useState } from 'react'
import { Player } from './Player'

let notes = []

const gridColor = '#3D434B'

export const Canvas = (props) => {
    const canvasRef = useRef(null)

    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const [backgroundColor, setBackgroundColor] = useState('#66707E')

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let bgGradient = context.createLinearGradient(0, 0, 0, 170)
        bgGradient.addColorStop(0, '#66707E')
        bgGradient.addColorStop(1, '#3D5F74')
        setBackgroundColor(bgGradient)
        context.fillStyle = bgGradient
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        drawGrid(context)
    }, [])

    function drawGrid(context) {
        const offset = 0
        const lineWidth = 0.1
        const cellSizeVertical = context.canvas.width / 16
        const cellSizeHorizontal = 30

        for (let x = 0; x <= context.canvas.width; x += cellSizeVertical) {
            context.moveTo(lineWidth + x + offset, offset)
            context.lineTo(lineWidth + x + offset, context.canvas.height + offset)
        }
        for (let x = 0; x <= context.canvas.height; x += cellSizeHorizontal) {
            context.moveTo(offset, lineWidth + x + offset)
            context.lineTo(context.canvas.width + offset, lineWidth + x + offset)
        }

        context.strokeStyle = gridColor
        context.stroke()
    }

    function draw(coords) {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        let gradient = context.createLinearGradient(0, 0, 0, 170)
        gradient.addColorStop(0, '#A3B3C9')
        gradient.addColorStop(1, '#6699CC')

        context.fillStyle = gradient
        context.strokeStyle = '#282C32'

        const gridSizeX = 16
        const gridSizeY = 5

        const rectangleSize = { x: 16, y: 26 }

        const posX = Math.ceil((coords.x / canvasRef.current.width) * gridSizeX)
        const newPosX = (posX / gridSizeX) * canvasRef.current.width - context.canvas.width / gridSizeX / 2

        const posY = Math.ceil((coords.y / canvasRef.current.height) * gridSizeY)
        const newPosY = (posY / gridSizeY) * canvasRef.current.height - context.canvas.height / gridSizeY / 2

        const pos = { x: posX, y: posY }

        if (!notes.some((note) => note.x === pos.x && note.y === pos.y)) {
            notes.push(pos)
            context.fillRect(
                newPosX - rectangleSize.x / 2,
                newPosY - rectangleSize.y / 2,
                rectangleSize.x,
                rectangleSize.y
            )
            context.strokeRect(
                newPosX - rectangleSize.x / 2,
                newPosY - rectangleSize.y / 2,
                rectangleSize.x,
                rectangleSize.y
            )
        } else {
            context.fillStyle = backgroundColor

            context.fillRect(
                newPosX - rectangleSize.x / 2 - 0.5,
                newPosY - rectangleSize.y / 2 - 0.5,
                rectangleSize.x + 1,
                rectangleSize.y + 1
            )

            const index = notes.findIndex((note) => note.x === pos.x && note.y === pos.y)
            if (index > -1) {
                notes.splice(index, 1)
            }
        }
    }

    const handleMouseMove = (event) => {
        const rect = canvasRef.current.getBoundingClientRect(),
            scaleX = canvasRef.current.width / rect.width,
            scaleY = canvasRef.current.height / rect.height

        setCoords({
            x: (event.clientX - rect.left) * scaleX,
            y: (event.clientY - rect.top) * scaleY,
        })
    }

    const handleMouseDown = (event) => {
        draw(coords)
    }

    return (
        <>
            <canvas
                onMouseMove={handleMouseMove}
                onMouseDown={handleMouseDown}
                style={{
                    height: '400px',
                    width: '700px',
                }}
                ref={canvasRef}
                {...props}
            />
            <Player {...notes} />
        </>
    )
}
