import React, { Component } from "react";
import "./css/style.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isNull: true,
    correct: false,
    resString: "",
  };

  // if isnull when blur out input =>message error 
  handleOnBlur = (e) => {
    const value = e.target.value;

    if (value==="") {
      this.setState({
        resString: "Vui lòng không để trống trường này!",
      });
    } else {
      this.setState({
        resString:"",
      })
    }
    };

  // if element have value => setState.isNull=false
  handleOnChange = (e) => {
    this.setState({
      isNull: false,
    });
  };

  //  if submit =>
    // 1.input email correct type email
    // 2.password.length() < 6=>error
    // 3. if all correct => signal: login success!
  handleSubmit=(e)=>{
    console.log("Submit successfully!");
  };

  render() {
    const styleLabelError = {
      color: "red",
      fontSize: 12,
      margin: 4,
    };

    return (
      <form action="#" method="" onSubmit={this.handleSubmit}>
        <div className="brand-logo"></div>
        <div className="brand-title">TWITTER</div>
        <div className="inputs">
          {/* email */}
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            name="email"
            placeholder="example@test.com"
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
          />
          <label style={styleLabelError}>{this.state.resString}</label>
          {/* email */}
          <label>PASSWORD</label>
          <input
            type="password"
            placeholder="Min 6 charaters long"
            onBlur={this.handleOnBlur}
          />
          <label style={styleLabelError}>{this.state.resString}</label>
          {/* email */}
          <button type="submit" >LOGIN</button>
        </div>
      </form>
    );
  }
}

