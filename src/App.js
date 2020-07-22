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
            img1 = {require('./Images/ahh.jpeg')} alt1 = "ahh"
            img2 = {require('./Images/albums.jpeg')} alt2 = "albums"
            img3 = {require('./Images/ant.jpeg')} alt3 = "ant"
            img4 = {require('./Images/back.jpeg')} alt4 = "back"
            img5 = {require('./Images/bruce_lee.jpeg')} alt5 = "bruce_lee"
            img6 = {require('./Images/chew.jpeg')} alt6 = "chew"
            img7 = {require('./Images/con.png')} alt7 = "con"
            img8 = {require('./Images/door.jpeg')} alt8 = "door"
            img9 = {require('./Images/dumbell.jpeg')} alt9 = "dumbell"
            img10 = {require('./Images/ear.jpeg')} alt10 = "ear"
            img11 = {require('./Images/eh.png')} alt11 = "eh"
            img12 = {require('./Images/ella.jpeg')} alt12 = "ella"
            img13 = {require('./Images/f.jpeg')} alt13 = "f"
            img14 = {require('./Images/foot.jpeg')} alt14 = "foot"
            img15 = {require('./Images/gaze.jpeg')} alt15 = "gaze"
            img16 = {require('./Images/L.png')} alt16 = "L"
            img17 = {require('./Images/lid.jpeg')} alt17 = "lid"
            img18 = {require('./Images/moon.jpeg')} alt18 = "moon"
            img19 = {require('./Images/ogre.png')} alt19 = "ogre"
            img20 = {require('./Images/opal.jpeg')} alt20 = "opal"
            img21 = {require('./Images/princes.jpeg')} alt21 = "princes"
            img22 = {require('./Images/santa.jpeg')} alt22 = "santa"
            img23 = {require('./Images/shin.jpeg')} alt23 = "shin"
            img24 = {require('./Images/sleigh.jpeg')} alt24 = "sleigh"
            img25 = {require('./Images/star.png')} alt25 = "star"
            img26 = {require('./Images/taffy.jpeg')} alt26 = "taffy"
            img27 = {require('./Images/thick.jpeg')} alt27 = "thick"
            img28 = {require('./Images/umber.jpeg')} alt28 = "umbder"
            img29 = {require('./Images/wake.jpeg')} alt29 = "wake"/>
       </div>
    );
  }
}

/*Allows "App" class to be used in other files in this project*/
export default App;
