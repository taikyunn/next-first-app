import React, { Component } from "react";
import layout from "@/styles/Layout.module.css"

class Header extends Component {
  render(){
    return(
      <header className={layout.header}>
        <div>
          {this.props.header}
        </div>
        <h1 className={layout.h1}>{this.props.title}</h1>
      </header>
    )
  }
}
export default Header;
