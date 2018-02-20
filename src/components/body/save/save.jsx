import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { save, edit } from '../../../redux/actions';
import './save.css';

class Save extends React.Component {
  constructor(props) {
    super(props);
    this.saveNotes = this.saveNotes.bind(this);
  }

  saveNotes() {
    const message = this.props.noteMessage;
    const title = this.props.titleText;
    let key = this.props.keyId;
    if (this.props.keyLocal) {
      key = this.props.keyLocal;
    }
    if (title.length === 0 || message.length === 0) {
      console.log('Empty title or message');
      return;
    }
    const newNoteObject = {
      key,
      title,
      message,
    };
    this.props.clearContents();
    if (this.props.keyLocal) {
      this.props.resetKeyLocal();
      this.props.editThisNotes(newNoteObject, key);
    } else {
      this.props.saveThisNotes(newNoteObject);
    }
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
  keyLocal: PropTypes.number.isRequired,
  clearContents: PropTypes.func.isRequired,
  saveThisNotes: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  editThisNotes: PropTypes.func.isRequired,
  resetKeyLocal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Save);
