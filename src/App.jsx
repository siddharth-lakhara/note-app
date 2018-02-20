import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import HeaderComponent from './components/header/header';
import BodyComponent from './components/body/body';
import FooterComponent from './components/footer/footer';
import HistoryComponent from './components/history/history';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      titleText: '',
      noteMessage: '',
      currentState: 0,
    };
    this.changeState = this.changeState.bind(this);
    // this.saveNotes = this.saveNotes.bind(this);
    this.editNotes = this.editNotes.bind(this);
    this.clearContents = this.clearContents.bind(this);
    this.resetKeyLocal = this.resetKeyLocal.bind(this);
    this.syncNotes = this.syncNotes.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/fetch')
      .then(data => (data.json()))
      .then((response) => {
        console.log('response: ', response);
      });
  }

  syncNotes() {
    console.log('Sync notes called');
    console.log(this.props.noteStorage);
    fetch('http://localhost:3000/save', {
      method: 'POST',
      body: JSON.stringify(this.props.noteStorage),
    });
  }

  resetKeyLocal() {
    this.setState({
      key: 0,
    });
  }

  changeState(newState) {
    this.setState({
      currentState: newState,
    });
  }

  // saveNotes(newNoteArray) {
  //   const currentKey = newNoteArray.key;
  //   const newNoteStorage = this.state.noteStorage;
  //   newNoteStorage[currentKey - 1] = newNoteArray;
  //   this.setState({
  //     noteStorage: newNoteStorage,
  //     key: newNoteStorage.length + 1,
  //   }, () => {
  //     console.log(this.state.noteStorage);
  //   });
  // }

  editNotes(event) {
    const key = event.target.id;
    const oldNote = this.props.noteStorage[key - 1];
    this.setState({
      titleText: oldNote.title,
      noteMessage: oldNote.message,
      key: oldNote.key,
    }, () => {
      this.changeState(1);
    });
  }

  clearContents() {
    this.setState({
      titleText: '',
      noteMessage: '',
    });
  }

  render() {
    if (this.state.currentState) {
      return (
        <div className="App">
          <HeaderComponent
            headerText="Note Making Application"
          />
          <BodyComponent
            titleText={this.state.titleText}
            titlePlaceHolder="Note Title Here"
            noteMessage={this.state.noteMessage}
            notePlaceHolder="Your Note here"
            maxLength={120}
            noteStorage={this.state.noteStorage}
            keyLocal={this.state.key}
            changeState={this.changeState}
            clearContents={this.clearContents}
            resetKeyLocal={this.resetKeyLocal}
          />
          <FooterComponent />
        </div>
      );
    }

    return (
      <div className="App">
        <HeaderComponent
          headerText="Saved Notes"
        />
        <HistoryComponent
          noteStorage={this.state.noteStorage}
          changeState={this.changeState}
          editNotes={this.editNotes}
          syncNotes={this.syncNotes}
        />
        <FooterComponent />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  noteStorage: state.saveState.noteStorage,
});

export default connect(mapStateToProps)(App);
