import React, { useRef, useEffect, useState } from 'react'

import Player from './Player'

let notes = []

const Canvas = (props) => {
    const canvasRef = useRef(null)

    const [coords, setCoords] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.fillStyle = '#696969'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        drawGrid(context)
    }, [])

    function drawGrid(context) {
        let ctx = context
        const p = 0
        const lineWidth = 0.5
        const cellSizeVertical = 20
        const cellSizeHorizontal = 30

        for (var x = 0; x <= ctx.canvas.width; x += cellSizeVertical) {
            context.moveTo(lineWidth + x + p, p)
            context.lineTo(lineWidth + x + p, ctx.canvas.height + p)
        }
        for (var x = 0; x <= ctx.canvas.height; x += cellSizeHorizontal) {
            context.moveTo(p, lineWidth + x + p)
            context.lineTo(ctx.canvas.width + p, lineWidth + x + p)
        }

        context.strokeStyle = 'black'
        context.stroke()
    }

    function draw(coords) {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        const ctx = context

        ctx.fillStyle = '#FFFFFF'

        const rectangleSize = { x: 15, y: 25 }

        const posX = Math.ceil((coords.x / canvasRef.current.width) * 15)
        const newPosX = (posX / 15) * canvasRef.current.width - 10

        const posY = Math.ceil((coords.y / canvasRef.current.height) * 5)
        const newPosY = (posY / 5) * canvasRef.current.height - 15

        const pos = { x: posX, y: posY }

        if (!notes.some((note) => note === pos)) {
            console.log('new note')
            notes.push(pos)
            ctx.fillRect(newPosX - rectangleSize.x / 2, newPosY - rectangleSize.y / 2, rectangleSize.x, rectangleSize.y)
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
                style={{ width: '100%', maxWidth: '100%', height: '100%' }}
                ref={canvasRef}
                {...props}
            />
            <Player {...notes} />
        </>
    )
}

export default Canvas
