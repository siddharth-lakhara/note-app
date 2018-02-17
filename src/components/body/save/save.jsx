import React from 'react';
import PropTypes from 'prop-types';
import './save.css';

class Save extends React.Component {
  constructor(props) {
    super(props);
    this.saveNotes = this.saveNotes.bind(this);
  }

  saveNotes() {
    const message = this.props.noteMessage;
    const title = this.props.titleText;
    const key = this.props.keyId;
    const newNoteObject = {
      key,
      title,
      message,
    };
    this.props.clearContents();
    this.props.saveNotes(newNoteObject);
    this.props.changeState(0);
  }

  render() {
    return (
      <div>
        <button className="save-button" onClick={this.saveNotes}>Save</button>
      </div>
    );
  }
}

Save.propTypes = {
  noteMessage: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  keyId: PropTypes.number.isRequired,
  clearContents: PropTypes.func.isRequired,
  saveNotes: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,

};

export default Save;
