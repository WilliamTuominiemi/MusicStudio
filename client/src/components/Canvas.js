import React, { useRef, useEffect, useState } from 'react'

const Canvas = (props) => {
    const canvasRef = useRef(null)
    const ctx = useRef(null)

    const [coords, setCoords] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const canvas = canvasRef.current
        ctx.current = canvas.getContext('2d')
        ctx.fillStyle = '#696969'
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        drawGrid()
        draw()
    }, [])

    function drawGrid() {
        // let ctx = context
        // const p = 1
        // const lineWidth = 0.5
        // const cellSizeVertical = 20
        // const cellSizeHorizontal = 40
        // for (var x = 0; x <= ctx.canvas.width; x += cellSizeVertical) {
        //     context.moveTo(lineWidth + x + p, p)
        //     context.lineTo(lineWidth + x + p, ctx.canvas.height + p)
        // }
        // for (var x = 0; x <= ctx.canvas.height; x += cellSizeHorizontal) {
        //     context.moveTo(p, lineWidth + x + p)
        //     context.lineTo(ctx.canvas.width + p, lineWidth + x + p)
        // }
        // context.strokeStyle = 'black'
        // context.stroke()
    }

    function draw() {
        // console.log(context)
        // const ctx = context
        // ctx.fillStyle = '#FFFFFF'
        // ctx.fillRect(3, 3, 16, 36)
    }

    const handleMouseMove = (event) => {
        setCoords({
            x: event.clientX - 170,
            y: event.clientY - 180,
        })
        console.log(context)

        draw()
    }

    const handleMouseDown = (event) => {
        console.log('fuck')
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
