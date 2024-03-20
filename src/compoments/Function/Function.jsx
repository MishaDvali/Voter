import React, { Component} from 'react'

export default class Function extends Component {

  constructor ({width, height, func, weight}){
    super()
    this.canvasRef = React.createRef()
    this.width = width
    this.height = height
    this.func = func
    this.weight = weight
  }

  componentDidMount = () => {
    const ctx = this.canvasRef.current.getContext('2d')
    const {width, height} = this.canvasRef.current
    for (let x = -width/2; x < width/2; x++){
      for (let y = height/2; y > -height/2; y--){
        if (this.func.belongs(x, y, 2)){
          ctx.fillRect(x, y, this.weight, this.weight)
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
