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
         <ImageSequence
            img1 = {require('./Images/chew.jpeg')} alt1 = "chew"
            img2 = {require('./Images/back.jpeg')} alt2 = "back"
            img3 = {require('./Images/ahh.jpeg')} alt3 = "ahh" />
       </div>
    );
  }
}

/*Allows "App" class to be used in other files in this project*/
export default App;
