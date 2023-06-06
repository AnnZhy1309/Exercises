import React, { Component } from 'react';

class ResetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleResetState = () => {
    this.setState({
      username: '',
      password: '',
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.username}
          onChange={(e) => this.setState({ username: e.target.value })}
        />
        <input
          type="password"
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <button onClick={this.handleResetState}>Reset</button>
      </div>
    );
  }
}

export default ResetComponent;