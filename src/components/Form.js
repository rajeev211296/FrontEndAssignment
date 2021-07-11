import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      question: "",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleQuestionChange = (event) => {
    this.setState({
      question: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <div className="container">
          <div className="form">
            <h1>Got A Question?</h1>
            <div>
              <label> Name </label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </div>
            <div>
              <label>Question</label>
              <textarea
                value={this.state.question}
                onChange={this.handleQuestionChange}
              />
            </div>
            <button type="submit">Send Message</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
