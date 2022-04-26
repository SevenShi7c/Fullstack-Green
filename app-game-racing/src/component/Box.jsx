import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    positionTop: 0,
  };
  render() {
    setInterval(() => {
      console.log(1);
    }, 200);

    const postionTop = 50;
    return (
      <div
        className="box"
        style={{
          top: this.state.positionTop,
        }}
      ></div>
    );
  }
}

export default Box;
