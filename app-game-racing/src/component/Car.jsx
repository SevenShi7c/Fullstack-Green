import React, { Component } from "react";

class Car extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isKeyPress: 0,
    position_x: 0,
    position_y: 0,
  };

  handleKeyDown = (e) => {
    let key = e.keyCode;

    this.setState({ isKeyPress: 1 });

    if (this.state.isKeyPress) {
      if (key === 37) {
        //arrowLeft
        this.setState({
          position_x: this.state.position_x,
          position_y: this.state.position_y - 5,
        });
      } else if (key === 39) {
        //arrowRight
        this.setState({
          position_x: this.state.position_x,
          position_y: this.state.position_y + 5,
        });
      } else if (key === 38) {
        //arrowUp
        this.setState({
          position_x: this.state.position_x + 5,
          position_y: this.state.position_y,
        });
      } else if (key === 40) {
        //arrowUp
        this.setState({
          position_x: this.state.position_x - 5,
          position_y: this.state.position_y,
        });
      }
    }
   
// clientWidth
    const maximumX = e.target.offsetParent.clientWidth;
    const maximumY =e.target.offsetParent.clientHeight;
    console.log(maximumY);
    if(this.state.position_x<0){
        this.setState({
            isKeyPress:1,
            position_x:0,
            position_y:this.state.position_y,
        })
    }
    else if(this.state.position_y<0){
        this.setState({
            isKeyPress:1,
            position_x:this.state.position_x,
            position_y:0,
        })
    }
    else if(this.state.position_y>maximumY){
        this.setState({
            isKeyPress:1,
            position_x:this.state.position_x,
            position_y:maximumY,
        })
    }
    else if(this.state.position_x>maximumX){
        this.setState({
            isKeyPress:1,
            position_x:maximumX,
            position_y:this.state.position_y,
        })
    }
  };

 

  render() {
    const { isKeyPress: isPress } = this.state;
    return (
      <div
        tabIndex={0}
        className="car"
        onKeyDown={this.handleKeyDown}
        style={{
          left: this.state.position_y,
          bottom: this.state.position_x,
        }}
      ></div>
    );
  }
}

export default Car;
