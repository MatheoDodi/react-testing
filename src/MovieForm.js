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
        <input type="text" />
        <button>Submit</button>
      </form>
    );
  }
}

export default MovieForm;
