import React, { Component } from 'react';
import {Link} from 'react-router'

export default class Root extends Component {
  // constructor() {
  //   super()
  //   this.nextJoke = this.nextJoke.bind(this)
  //   this.answer = this.answer.bind(this)
  // }

  render() {

    return (
    <div>
    <header>
      Margaret Hamilton Interplanetary Academy of JavaScript
      <Link to="/"><button>Home</button></Link>
      <Link to="/students"><button>Students</button></Link>

    </header>
    {this.props.children}
  </div>
    )
}
}


