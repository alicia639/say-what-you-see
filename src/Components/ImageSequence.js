import React from 'react';
import './ImageSequence.css';

const ImageSequence = (props) => {
  const imageItems = props.images.map((image, index) =>
    <img key={image} src={image}/>
  );
  return (
    <div className = 'ImageSequence'>
        {imageItems}
    </div>
  );
};

export default ImageSequence;
