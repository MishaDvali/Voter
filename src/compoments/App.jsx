import React, { Component } from 'react'
import Function from './Function/Function'

class Graph {
    constructor(left, right, symbol = "="){
        this.left = left
        this.right = right
        this.symbol = symbol
    }

    belongs = (x, y, accuracy = 1) => {
        switch (this.symbol) {
            default :
                return (this.right(x, y) <= this.left(x, y) + accuracy/2
                        && this.right(x,y) >= this.left(x, y) - accuracy/2)
        }
    }
}

export default class App extends Component {
  render() {
    return (
      <Function func={new Graph((x, y) => y, (x, y) => x*x)} height="800px" width="800px" weight={3} zoom={0.1} posX={100} posY={100}/>
    )
  }
}
