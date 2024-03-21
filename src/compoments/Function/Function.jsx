import React, { Component} from 'react'

export default class Function extends Component {

  constructor ({width, height, func, weight, zoom, posX, posY}){
    super()
    this.canvasRef = React.createRef()
    this.width = width
    this.height = height
    this.func = func
    this.weight = weight
    this.zoom = zoom
    this.posX = posX
    this.posY = posY
    console.log(this.zoom)
  }

  componentDidMount = () => {
    const ctx = this.canvasRef.current.getContext('2d')
    const {width, height} = this.canvasRef.current
    let xp, yp
    for (let y = width/2; y > -width/2; y--){
      for (let x = -height/2; x < height/2; x++){
        xp = x*this.zoom + this.posX
        yp = y*this.zoom + this.posY
        if (this.func.belongs(xp, yp, 2)){
          ctx.fillRect(xp + height/2 - this.weight/2, (height - yp - height/2)-this.weight/2, this.weight, this.weight)
        }
      }
    }
  }

  render() {

    return (
      <canvas ref={this.canvasRef} width={this.width} height={this.height}/>
    )
  }
}
