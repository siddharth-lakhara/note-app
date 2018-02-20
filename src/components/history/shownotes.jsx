import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './shownotes.css';

class ShowNotes extends React.Component {
  render() {
    return (
      this.props.noteStorage.map(elem => (
        <div className="containNote" key={elem.key}>
          <div
            className="ShowNotes-titleButton"
            onClick={this.props.editNotes}
            id={elem.key}
          >
            {elem.title}
          </div>
          <textarea className="ShowNotes-NoteText" value={elem.message} />
        </div>
      ))
    );
  }
}

const mapStateToProps = state => ({
  noteStorage: state.saveState.noteStorage,
});

ShowNotes.propTypes = {
  noteStorage: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number,
    title: PropTypes.string,
    message: PropTypes.string,
  })).isRequired,
  editNotes: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(ShowNotes);
