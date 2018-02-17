import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './components/header/header';
import BodyComponent from './components/body/body';
import FooterComponent from './components/footer/footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: 0,
    };
  }

  changeState(newState) {
    this.state({
      currentState: newState,
    });
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent
          headerText="Note Making Application"
        />
        <BodyComponent
          titlePlaceHolder="Note Title Here"
          notePlaceHolder="Your Note here"
          maxLength={120}
        />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
