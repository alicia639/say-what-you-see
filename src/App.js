import React, { Component} from 'react';
import './App.css';
import ImageSequence from './Components/ImageSequence';


const allClues = [
  [require('./Images/chew.jpeg'), require('./Images/back.jpeg'), require('./Images/ahh.jpeg')],
  [require('./Images/orca.jpeg'), require('./Images/straw.jpeg')],
  [require('./Images/inside.png'), require('./Images/vent.jpeg'), require('./Images/shin.jpeg')],
  [require('./Images/albums.jpeg'), require('./Images/dumbell.jpeg'), require('./Images/door.jpeg')],
  [require('./Images/peas.jpeg'), require('./Images/ahh.jpeg')],
  [require('./Images/santa.jpeg'), require('./Images/lid.jpeg'), require('./Images/eh.png')],
  [require('./Images/fern.jpeg'), require('./Images/itch.jpeg'), require('./Images/sure.jpeg')],
  [require('./Images/L.png'), require('./Images/f.jpeg'), require('./Images/ant.jpeg')],
  [require('./Images/princes.jpeg'), require('./Images/sleigh.jpeg'), require('./Images/ahh.jpeg')],
  [require('./Images/star.png'), require('./Images/gaze.jpeg'), require('./Images/inside.png')],
  [require('./Images/moon.jpeg'), require('./Images/opal.jpeg'), require('./Images/ollie.jpeg')],
  [require('./Images/con.png'), require('./Images/ella.jpeg'), require('./Images/shin.jpeg')],
  [require('./Images/foot.jpeg'), require('./Images/ogre.png'), require('./Images/taffy.jpeg')],
  [require('./Images/ear.jpeg'), require('./Images/thick.jpeg'), require('./Images/wake.jpeg')],
  [require('./Images/umber.jpeg'), require('./Images/L.png'), require('./Images/ahh.jpeg')],
  [require('./Images/suit.png'), require('./Images/table.jpeg')],
  [require('./Images/play.jpeg'), require('./Images/grand_teton.jpeg'), require('./Images/X.jpeg')],
  [require('./Images/sheer.jpeg'), require('./Images/lock.png'), require('./Images/home.jpeg')],
  [require('./Images/fray.jpeg'), require('./Images/ken.jpeg'), require('./Images/sty.jpeg')],
  [require('./Images/com.png'), require('./Images/pet.jpeg'), require('./Images/tea.jpeg'), require('./Images/shin.jpeg')],
  [require('./Images/gel.jpeg'), require('./Images/hiss.jpeg')]
  ];

let allAnswers = [ /chewbacc\w/i, /orchestr\w/i, /inventio\w/i, /albus ?dumbledor\w/i, /pizz\w/i, /holida\w/i, /furnitur\w/i, /elephan\w/i, /princess ?lei\w/i, /stargazin\w/i, /monopol\w/i, /constellatio\w/i, /photograph\w/i, /earthquak\w/i, /umbrell\w/i, /suitabl\w/i, /plate ?techtonic\w/i, /sherlock ?holme\w/i, /frankenstei\w/i, /competitio\w/i];

const clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
  });

class App extends Component {


  state = {
    turn: 1,
    score: 0,
    answer: allAnswers[0],
    guess: '',
    clue: allClues[0],
    newTurn: false,
    timerOn: false
  }

  restartHandler = () => {
    this.setState({
      turn: 1,
      score: 0,
      answer: allAnswers[0],
      guess: '',
      clue: allClues[0],
      newTurn: true,
      timerOn: true
    })
    this.startTimer()
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
        guess: '',
        newTurn: true
      })}
    document.getElementById('myInput').value = ''
    if(this.state.answer.test(this.state.guess)===true){
      console.log('correct');
      this.setState({score: this.state.score+1})
      document.getElementById('congrats').innerHTML = 'Congrats!';
      setTimeout(function(){
      document.getElementById('congrats').innerHTML = '';}, 2100)
    }else{
      console.log('incorrect');
    }
    this.startTimer()
  }


  startTimer = () => {
    var minute;
    var sec;
    var time = 180;
    const interval = setInterval(() => {
      if (time < 0){ 
        console.log('time out');
        document.getElementById('timeDisplay').innerHTML = "time out";  
        clearInterval(interval);
        document.getElementById('clickButton').dispatchEvent(clickEvent);
      } else if(this.state.newTurn===true) {
        clearInterval(interval);
        this.setState({newTurn: false})
      }else{
        minute = parseInt(time/60);
        sec = parseInt(time%60);
        document.getElementById('timeDisplay').innerHTML = minute+" min "+sec + " s left";
        console.log(minute+" min "+sec + " s left");
        time--;
     }
    }, 1000);
  }

  callTimer = (fn) => {
    if (this.state.timerOn === false){
      fn();
      this.setState({timerOn: true})
    }  
  }


  render() {
    
     return (
       <div className="App">
           

         <h1>Say What You See</h1>
         <p>Guess the word or phrase that these images represent.  You have three minutes per question.</p> 

         <p id='timeDisplay' className = 'time'></p>
         <script onLoad ={this.callTimer(this.startTimer)}></script>  

         <ImageSequence images = {this.state.clue}/>

         <input type = 'text' onChange = {this.guessChangedHandler} id='myInput'/>
         <button className = "newButton" onClick = {this.clickHandler} id="clickButton">Submit Answer!</button>
         <p>Clue: {this.state.turn}/{allAnswers.length}</p>
         <p>Score: {this.state.score}</p>

         <button className = "newButton" onClick = {this.restartHandler}>Restart?</button>

         <p id='congrats' className = 'popUpText'></p>

       </div>
    );
  }
}

/*Allows "App" class to be used in other files in this project*/
export default App;
