import React, { Component } from "react";
import Box from "./Box";
import Car from "./Car";

class Road extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    height: 0,
  };

  render() {
    return (
      <div className="road">
        <Car />
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
      </div>
    );
  }
}

export default Road;
