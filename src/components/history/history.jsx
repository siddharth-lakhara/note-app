import React from 'react';
import PropTypes from 'prop-types';
import './history.css';
import ShowNotes from './shownotes';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.editNotes = this.editNotes.bind(this);
  }

  changeState() {
    this.props.changeState(1);
  }

  editNotes(event) {
    const key = event.target.id;
    // editNotes(key);
  }

  render() {
    return (
      <div className="history-displayPane">
        <ShowNotes
          noteStorage={this.props.noteStorage}
          editNotes={this.props.editNotes}
        />
        <button className="history-goBackButton" onClick={this.changeState}>Create New Note</button>
      </div>
    );
  }
}

History.propTypes = {
  noteStorage: PropTypes.array.isRequired,
  changeState: PropTypes.func.isRequired,
};
export default History;
