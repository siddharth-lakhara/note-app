import React from 'react';
import PropTypes from 'prop-types';
import './body.css';
import Save from './save/save';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
      charactersLeft: this.props.maxLength,
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    const input = event.target.value;
    this.setState({
      color: (input.length === 5) ? 'red' : 'black',
      charactersLeft: this.props.maxLength - input.length,
    });
  }

  render() {
    return (
      <div className="body-mainClass">
        <div>
          <p className="body-noteTitleText">Note Title</p>
          <input
            type="text"
            className="body-noteTitle"
            placeholder={this.props.titlePlaceHolder}
          />
        </div>
        <div>
          <p className="body-noteBodyText">Please enter your note here</p>
          <textarea
            className="body-noteBody"
            placeholder={this.props.notePlaceHolder}
            maxLength={this.props.maxLength}
            onChange={this.changeHandler}
            style={{ color: this.state.color }}
          />
          <p className="body-remainingCharacters">
          Character left: {this.state.charactersLeft}
          </p>
          <Save />
        </div>
      </div>

    );
  }
}

Body.propTypes = {
  maxLength: PropTypes.number.isRequired,
};

export default Body;
