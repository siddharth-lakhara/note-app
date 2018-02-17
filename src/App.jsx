import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/header/header';
import BodyComponent from './components/body/body';
import FooterComponent from './components/footer/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
      currentState: 0,
      noteStorage: [],
      titleText: '',
      noteMessage: '',
    };
    this.changeState = this.changeState.bind(this);
    this.saveNotes = this.saveNotes.bind(this);
  }

  changeState(newState) {
    this.state({
      currentState: newState,
    });
  }

  saveNotes(newNoteArray) {
    this.setState({
      noteStorage: [...this.state.noteStorage, newNoteArray],
      key: this.state.key + 1,
    }, () => {
      console.log(this.state.noteStorage);
    });
  }

  render() {
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
        />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
