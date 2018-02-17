import React from 'react';
import './App.css';
import HeaderComponent from './components/header/header';
import BodyComponent from './components/body/body';
import FooterComponent from './components/footer/footer';
import HistoryComponent from './components/history/history';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
      currentState: 1,
      noteStorage: [],
      titleText: '',
      noteMessage: '',
    };
    this.changeState = this.changeState.bind(this);
    this.saveNotes = this.saveNotes.bind(this);
    this.editNotes = this.editNotes.bind(this);
  }

  changeState(newState) {
    this.setState({
      currentState: newState,
    });
  }

  saveNotes(newNoteArray) {
    this.setState({
      noteStorage: [...this.state.noteStorage, newNoteArray],
      key: this.state.key + 1,
    }, () => {
      console.log('Save Notes called in App');
      console.log(this.state.noteStorage);
    });
  }

  editNotes(key) {
    const oldNote = this.state.noteStorage[key - 1];
    this.setState({
      titleText: oldNote.title,
      noteMessage: oldNote.message,
    }, () => {
      this.changeState(1);
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
            saveNotes={this.saveNotes}
            noteStorage={this.state.noteStorage}
            keyId={this.state.key}
            changeState={this.changeState}
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
        />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
