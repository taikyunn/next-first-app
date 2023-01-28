import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
    this.fileName = 'image/' + props.fileName;
    this.width = props.width+ 'px';
  }

  render() {
    return(
      <img src={this.fileName} width={this.width} />
    );
  }
}
export default Image;
