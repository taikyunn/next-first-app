import React, { Component } from "react";
import layout from "@/styles/Layout.module.css"

class Footer extends Component {
  render() {
    return(
      <footer className={layout.footer}>
        <div>{this.props.footer}</div>
      </footer>
    );
  }
}
export default Footer;
