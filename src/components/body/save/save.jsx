import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { save } from '../../../redux/actions';
import { edit } from '../../../redux/actions';
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
    this.props.saveThisNotes(newNoteObject);
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

const mapDispatchToProps = dispatch => ({
  saveThisNotes: (newNoteObject) => { dispatch(save(newNoteObject)); },
  editThisNotes: (newNoteObject, oldKey) => { dispatch(edit(newNoteObject, oldKey)); },
});

const mapStateToProps = state => ({
  keyId: state.saveState.key,
});

Save.propTypes = {
  noteMessage: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  keyId: PropTypes.number.isRequired,
  clearContents: PropTypes.func.isRequired,
  saveThisNotes: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(Save);
