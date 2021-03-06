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
      titleText: this.props.titleText,
      noteMessage: this.props.noteMessage,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.clearContents = this.clearContents.bind(this);
  }

  titleChange(event) {
    const input = event.target.value;
    this.setState({
      titleText: input,
    });
  }

  changeHandler(event) {
    const input = event.target.value;
    this.setState({
      color: (input.length === this.props.maxLength) ? 'red' : 'black',
      charactersLeft: this.props.maxLength - input.length,
      noteMessage: input,
    });
  }

  clearContents() {
    this.setState({
      titleText: '',
      charactersLeft: this.props.maxLength,
      noteMessage: '',
    });
    this.props.clearContents();
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
            value={this.state.titleText}
            onChange={this.titleChange}
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
            value={this.state.noteMessage}
          />
          <p className="body-remainingCharacters">
          Character left: {this.state.charactersLeft}
          </p>
          <Save
            titleText={this.state.titleText}
            noteMessage={this.state.noteMessage}
            keyLocal={this.props.keyLocal}
            clearContents={this.clearContents}
            changeState={this.props.changeState}
            resetKeyLocal={this.props.resetKeyLocal}
          />
        </div>
      </div>

    );
  }
}

Body.propTypes = {
  maxLength: PropTypes.number.isRequired,
  titlePlaceHolder: PropTypes.string.isRequired,
  notePlaceHolder: PropTypes.string.isRequired,
  noteMessage: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  keyLocal: PropTypes.number.isRequired,
  changeState: PropTypes.func.isRequired,
  clearContents: PropTypes.func.isRequired,
  resetKeyLocal: PropTypes.func.isRequired,
};

export default Body;
