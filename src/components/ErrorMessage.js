import React, { Component } from 'react';


class ErrorMessage extends Component {
  render() {
    const {message, onRetry} = this.props;
    return (
      <div>
          <p>
              Could not fetch data. {message}
          </p>
          <button onClick={onRetry}>Retry</button>
      </div>
    );
  }
}

export default ErrorMessage;
