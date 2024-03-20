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
                break;
        }
    }
}

export default class App extends Component {
  render() {
    return (
      <Function func={new Graph((x, y) => y, (x, y) => x*x)} height="100px" width="100px" weight={5}/>
    )
  }
}
