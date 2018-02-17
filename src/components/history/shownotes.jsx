import React from 'react';
import PropTypes from 'prop-types';
import './shownotes.css';

class ShowNotes extends React.Component {
  render() {
    return (
      this.props.noteStorage.map((elem, id) => (
        <div>
          <button
            className="ShowNotes-titleButton"
            onClick={this.props.editNotes}
            id={elem.key}
          >
            {elem.title}
          </button>
          <div className="ShowNotes-NoteText"> <pre>{elem.message}</pre> </div>
        </div>
      ))
    );
  }
}


ShowNotes.propTypes = {
  noteStorage: PropTypes.array.isRequired,
  editNotes: PropTypes.func.isRequired,
};

export default ShowNotes;
