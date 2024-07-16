import React, { useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import soundApplause from "../static/applause.mp3"

const Auto = () => {
  const [boxColors, setBoxColors] = useState({
    autoContentBox1: 'coral',
    autoContentBox2: 'coral',
    autoContentBox3: 'coral',
    autoContentBox4: 'coral',
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
    <div id="autoContentBoxes" className='contentBoxes'>
        <div
          id="autoContentBox1"
          className="contentBox"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 'autoContentBox1', 'A')}
          style={{ backgroundColor: boxColors.autoContentBox1 }}
      >
      </div>

      <div
        id="autoContentBox2"
        className="contentBox"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 'autoContentBox2', 'U')}
        style={{ backgroundColor: boxColors.autoContentBox2 }}
      >
      </div>

      {isExploding && <ConfettiExplosion {...confettiProps} className='confettiPosition'/>}

      <div
          id="autoContentBox3"
          className="contentBox"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 'autoContentBox3', 'T')}
          style={{ backgroundColor: boxColors.autoContentBox3 }}
      >
      </div>

      <div
        id="autoContentBox4"
        className="contentBox"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 'autoContentBox4', 'O')}
        style={{ backgroundColor: boxColors.autoContentBox4 }}
      >
      </div>
    </div>
)
}

export default Auto