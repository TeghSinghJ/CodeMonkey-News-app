import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center" >
        <img src={loading} style={{height:"50px"}} alt="Loading Icon"></img>
      </div>
    )
  }
}

export default Spinner
