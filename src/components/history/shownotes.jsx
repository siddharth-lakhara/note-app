import React from 'react';
import PropTypes from 'prop-types';
import './shownotes.css';

class ShowNotes extends React.Component {
  render() {
    return (
      this.props.noteStorage.map(elem => (
        <div key={elem.key}>
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
  noteStorage: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number,
    title: PropTypes.string,
    message: PropTypes.string,
  })).isRequired,
  editNotes: PropTypes.func.isRequired,
};

export default ShowNotes;
