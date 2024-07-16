import React, { useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import soundApplause from "../static/applause.mp3"

const Mama = () => {
  
  const [boxColors, setBoxColors] = useState({
    mamaContentBox1: 'coral',
    mamaContentBox2: 'coral',
    mamaContentBox3: 'coral',
    mamaContentBox4: 'coral',
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
    <div id="mamaContentBoxes" className='contentBoxes'>
      <div
          id="mamaContentBox1"
          className="contentBox"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 'mamaContentBox1', 'M')}
          style={{ backgroundColor: boxColors.mamaContentBox1 }}
      >
      </div>

      <div
        id="mamaContentBox2"
        className="contentBox"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 'mamaContentBox2', 'A')}
        style={{ backgroundColor: boxColors.mamaContentBox2 }}
      >
      </div>

      {isExploding && <ConfettiExplosion {...confettiProps} className='confettiPosition'/>}
 
      <div
          id="mamaContentBox3"
          className="contentBox"
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, 'mamaContentBox3', 'M')}
          style={{ backgroundColor: boxColors.mamaContentBox3 }}
      >
      </div>

      <div
        id="mamaContentBox4"
        className="contentBox"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 'mamaContentBox4', 'A')}
        style={{ backgroundColor: boxColors.mamaContentBox4 }}
      >
      </div>
    </div>
)
}

export default Mama