import React from 'react';
import PropTypes from 'prop-types';
import './history.css';
import ShowNotes from './shownotes';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    // this.editNotes = this.editNotes.bind(this);
  }

  changeState() {
    this.props.changeState(1);
  }

  render() {
    return (
      <div className="history-displayPane">
        <ShowNotes
          editNotes={this.props.editNotes}
        />
        <button className="history-goBackButton" onClick={this.changeState}>Create New Note</button>
        <button className="history-goBackButton" onClick={this.props.syncNotes}>Sync Notes</button>
      </div>
    );
  }
}

History.propTypes = {
  changeState: PropTypes.func.isRequired,
  editNotes: PropTypes.func.isRequired,
  syncNotes: PropTypes.func.isRequired,
};
export default History;
