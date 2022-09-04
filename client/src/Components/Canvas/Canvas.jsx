import React from 'react'
import './canvas.css'
import { FabricJSCanvas } from 'fabricjs-react'


const Canvas = ({onReady}) => {
  return (
    <div className="canvas">
        <FabricJSCanvas className="sample-canvas" onReady={onReady} width="100%" height="100%" />
    </div>
  )
}

export default Canvas