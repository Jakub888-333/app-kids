import React, { useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import soundApplause from "../static/applause.mp3"

const Pes = () => {
  const [boxColors, setBoxColors] = useState({
    pesContentBox1: 'coral',
    pesContentBox2: 'coral',
    pesContentBox3: 'coral',
  });

  const [isExploding, setIsExploding] = useState(false)

  const confettiProps = {
    force: 0.8,
    duration: 3000,
    particleCount: 250,
    width: 1600,
  };

  const playApplause = (sound) => {
    const audio = new Audio(sound);
    audio.play();
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 3000);
  }

  const handleDrop = (event, boxId, correctLetter) => {
    event.preventDefault();
    const letter = event.dataTransfer.getData('text');
    if (letter === correctLetter) {
      setBoxColors((prevColors) => {
        const updateColors = {
        ...prevColors,
        [boxId]: 'green',
      };
      
      const allGreen = Object.values(updateColors).every(color => color === "green");
      if (allGreen){
        setIsExploding(true)
        playApplause(soundApplause) 
      }
    
      return updateColors;
    
    });
    } else {
      setBoxColors((prevColors) => ({
        ...prevColors,
        [boxId]: 'red',
      }));
      alert('Nesprávne písmeno');
    };
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };


  return (
    <div id="pesContentBoxes" className='contentBoxes'>
      <div
          id="pesContentBox1"
          className="contentBox"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 'pesContentBox1', 'P')}
          style={{ backgroundColor: boxColors.pesContentBox1 }}
      >
      </div>

      <div
        id="mamaContentBox2"
        className="contentBox"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 'pesContentBox2', 'E')}
        style={{ backgroundColor: boxColors.pesContentBox2 }}
      >
      </div>

      {isExploding && <ConfettiExplosion {...confettiProps} className='confettiPosition'/>}

      <div
          id="pesaContentBox3"
          className="contentBox"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 'pesContentBox3', 'S')}
          style={{ backgroundColor: boxColors.pesContentBox3 }}
      >
      </div>
    </div>
)
}

export default Pes