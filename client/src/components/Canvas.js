import React, { useRef, useEffect, useState } from 'react'

const Canvas = (props) => {
    const canvasRef = useRef(null)
    const ctx = useRef(null)

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
        const p = 1
        const lineWidth = 0.5
        const cellSizeVertical = 20
        const cellSizeHorizontal = 40
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

        const rectangleSize = {x: 16, y: 36}

        ctx.fillStyle = '#FFFFFF'
        ctx.fillRect(coords.x-(rectangleSize.x/2), coords.y-(rectangleSize.y/2), rectangleSize.x, rectangleSize.y)
    }

    const handleMouseMove = (event) => {

        const rect = canvasRef.current.getBoundingClientRect(),
        scaleX = canvasRef.current.width / rect.width,
        scaleY = canvasRef.current.height / rect.height;

        setCoords({
            x: (event.clientX - rect.left) * scaleX,
            y: (event.clientY - rect.top) * scaleY,
        })
    }

    const handleMouseDown = (event) => {
        console.log('fuck')
        draw(coords)
    }

    return (
        <canvas
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            style={{ width: '100%', maxWidth: '100%', height: '100%' }}
            ref={canvasRef}
            {...props}
        />
    )
}

export default Canvas
