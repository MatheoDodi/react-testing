import React, { Component } from 'react';

class MovieForm extends Component {
  state = {
    text: ''
  };

  render() {
    const { submitForm } = this.props;
    const { text } = this.state;
    return (
      <form
        onSubmit={() =>
          submitForm({
            text
          })
        }
        data-testid="movie-form"
      >
        <label htmlFor="text">
          Text
          <input
            id="text"
            type="text"
            onChange={e => this.setState({ text: e.target.value })}
          />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

export default MovieForm;
