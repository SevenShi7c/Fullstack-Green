import React, { Component } from "react";
import "./css/style.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isNull: true,
    correct: false,
    message_error_email: "",
    message_error_password: "",
    length: 0,
    user: {
      name: "Truc",
      email: "trucvu@gmail.com",
      password: "1234567",
    },
    value_email: "",
    value_password: "",
  };

  // if isnull when blur out input =>message error
  handleOnBlur = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name == "email") {
      if (value === "") {
        this.setState({
          message_error_email: "Vui lòng không để trống trường này!",
          length: value.length,
        });
      } else {
        this.setState({
          message_error_email: "",
        });
      }
    }
    if (name == "password") {
      if (value === "") {
        this.setState({
          message_error_password: "Vui lòng không để trống trường này!",
          length: value.length,
        });
      } else {
        this.setState({
          message_error_password: "",
        });
      }
    }
  };

  // if element have value => setState.isNull=false
  handleOnChange = (e) => {
    var valueLength = e.target.value.length;
    if (valueLength > 0) {
      if (e.target.name === "email") {
        this.setState({
          message_error_email: "",
          value_email: e.target.value,
        });
      }
      if (e.target.name === "password") {
        this.setState({
          message_error_password: "",
          length: valueLength,
          value_password: e.target.value,
        });
      }
    }
  };

  //  if submit =>
  // 1.input email correct type email
  // 2.password.length() < 6=>error
  // 3. if all correct => signal: login success!
  // email:"trucvu",
  // password:"1234567",
  handleSubmit = (e) => {
    if (this.state.length > 6) {
      if (
        this.state.value_email == this.state.user.email &&
        this.state.value_password == this.state.user.password
        ){
          console.log(true);
          alert("Submit successfully!");
        }else{
          this.setState(prevState=>{
            prevState.message_error_password="Email or password incorrect!";
            return prevState;
          })
      }
    } else {
      this.setState({
        message_error_password: "Password must be longer than 6 character.",
      });
    }
    e.preventDefault();
  };

  render() {
    const styleLabelError = {
      color: "red",
      fontSize: 12,
      margin: 4,
    };

    return (
      <form action="" method="" onSubmit={() => this.handleSubmit()}>
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
          <label style={styleLabelError}>
            {this.state.message_error_email}
          </label>
          {/* email */}
          <label>PASSWORD</label>
          <input
            type="password"
            name="password"
            placeholder="Min 6 charaters long"
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
          />
          <label style={styleLabelError}>
            {this.state.message_error_password}
          </label>
          {/* email */}
          <button type="submit">LOGIN</button>
        </div>
      </form>
    );
  }
}
