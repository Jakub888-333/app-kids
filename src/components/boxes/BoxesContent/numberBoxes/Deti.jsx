import React, { useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import soundApplause from "../static/applause.mp3"

const Deti = () => {
  const [boxColors, setBoxColors] = useState({
    detiContentBox: 'coral',
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
      alert('Nesprávne číslo');
    };
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };


  return (
    <div className='contentBoxes'>
        <div className='contentBoxNumbersText'>
          SPOČÍTAJ DETI
        </div> 

        {isExploding && <ConfettiExplosion {...confettiProps} className='confettiPosition'/>}

        <div
          id="detiContentBox"
          className="contentBox"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 'detiContentBox', '6')}
          style={{ backgroundColor: boxColors.detiContentBox }}
        >
        </div>
    </div>
)
}

export default Deti