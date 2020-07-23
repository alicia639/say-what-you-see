import React from 'react';
import './ImageSequence.css';

const ImageSequence = (props) => {
  return (
    <div className = 'ImageSequence'>
        <img src = {props.img1} alt = {props.alt1}/>
        <img src = {props.img2} alt = {props.alt2}/>
        <img src = {props.img3} alt = {props.alt3}/>
    </div>
  );
};

export default ImageSequence;
