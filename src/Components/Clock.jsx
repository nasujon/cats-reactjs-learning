import React, { Component } from 'react'

export default class Clock extends Component {

  state = {date: new Date()}

  componentDidMount(){

    this.clickTimer = setInterval(()=> this.tick(), 1000);

  }

  componentWillUnmount(){
    clearInterval(this.clickTimer)
  }


  tick(){
    this.setState({
      date: new Date()
     })
  }

  
  render() {
    return (
      <>
        <h1 className="heading">
          <span className="text">{this.state.date.toLocaleTimeString("bn-BD")}</span>
        </h1>
      </>
    )
  }
}
