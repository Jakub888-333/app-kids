import React, { useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import soundApplause from "../static/applause.mp3"

const Jahody = () => {
  const [boxColors, setBoxColors] = useState({
    jahodyContentBox: 'coral',
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
          SPOČÍTAJ JAHODY
        </div> 

        {isExploding && <ConfettiExplosion {...confettiProps} className='confettiPosition'/>}

        <div
          id="jahodyContentBox"
          className="contentBox"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 'jahodyContentBox', '4')}
          style={{ backgroundColor: boxColors.jahodyContentBox }}
        >
        </div>
    </div>
)
}

export default Jahody