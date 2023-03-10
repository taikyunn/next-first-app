import React, { Component } from "react";

class Counter extends Component {
  msgStyle ={
    fontSize: '16pt',
    backgroundColor: '#eef',
    padding: '5px'
  }

  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      msg: 'counter: 0',
    };
    this.doAction = this.doAction.bind(this);
  }

  doAction() {
    this.setState((state) => {
      const num = state.counter + 1;
      return({
        counter: num,
        msg: 'counter:' + num
      });
    })
  }

  render(){
    return(
      <p style={this.msgStyle} onClick={this.doAction}>
        {this.state.msg}
      </p>
    );
  }
}
 export default Counter;
