import React, { Component} from 'react';
import './App.css';
import ImageSequence from './Components/ImageSequence';

class App extends Component {

  restartHandler = () => {

  }

  guessChangedHandler = (event) => {
    this.setState({guess: event.target.value});

  }

  clickHandler = () => {

  }

  render() {

     return (
       <div className="App">
         
       </div>
    );
  }
}

/*Allows "App" class to be used in other files in this project*/
export default App;
