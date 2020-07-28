import React, { Component} from 'react';
import './App.css';
import ImageSequence from './Components/ImageSequence';

const allClues = [
  [require('./Images/chew.jpeg'), require('./Images/back.jpeg'), require('./Images/ahh.jpeg')],
  [require('./Images/albums.jpeg'), require('./Images/dumbell.jpeg'), require('./Images/door.jpeg')],
  [require('./Images/santa.jpeg'), require('./Images/lid.jpeg'), require('./Images/eh.png')],
  [require('./Images/L.png'), require('./Images/f.jpeg'), require('./Images/ant.jpeg')],
  [require('./Images/princes.jpeg'), require('./Images/back.jpeg'), require('./Images/ahh.jpeg')],
  [require('./Images/star.png'), require('./Images/gaze.jpeg'), require('./Images/inside.png')],
  [require('./Images/moon.jpeg'), require('./Images/opal.jpeg'), require('./Images/bruce_lee.jpeg')],
  [require('./Images/con.png'), require('./Images/ella.jpeg'), require('./Images/shin.jpeg')],
  [require('./Images/foot.jpeg'), require('./Images/ogre.png'), require('./Images/taffy.jpeg')],
  [require('./Images/ear.jpeg'), require('./Images/thick.jpeg'), require('./Images/wake.jpeg')],
  [require('./Images/umber.jpeg'), require('./Images/L.png'), require('./Images/ahh.jpeg')],
  [require('./Images/play.jpeg'), require('./Images/grand_teton.jpeg'), require('./Images/X.jpeg')]
  ];

const allAnswers = ['Chewbacca', 'Albus Dumbledore', 'holiday', 'elephant', 'Princess Leia', 'stargazing', 'Monopoly', 'constellation', 'photography', 'earthquake', 'umbrella', 'plate techtonics'];

class App extends Component {

  state = {
    turn: 1,
    score: 0,
    answer: allAnswers[0],
    guess: '',
    clue: allClues[0]
  }

  restartHandler = () => {

  }

  guessChangedHandler = (event) => {
    this.setState({guess: event.target.value});
    console.log('event!');
  }

  clickHandler = () => {
    this.setState({turn: this.state.turn+1})
    if(this.state.turn < allAnswers.length){
      this.setState({
        answer: allAnswers[this.state.turn],
        clue: allClues[this.state.turn],
        guess: ''
      })}
    document.getElementById('myInput').value = ''
    if(this.state.answer.localeCompare(this.state.guess)===0){
      console.log('correct');
      this.setState({score: this.state.score+1})
    }else{
      console.log('incorrect');
    }
  }

  render() {

     return (
       <div className="App">
         <ImageSequence img1 = {this.state.clue[0]} img2 = {this.state.clue[1]} img3 = {this.state.clue[2]}/>

          <p>Score: {this.state.score}</p>

          <input type = 'text' onChange = {this.guessChangedHandler} id='myInput'/>
          <button onClick = {this.clickHandler}>Submit Answer!</button>
       </div>
    );
  }
}

/*Allows "App" class to be used in other files in this project*/
export default App;
