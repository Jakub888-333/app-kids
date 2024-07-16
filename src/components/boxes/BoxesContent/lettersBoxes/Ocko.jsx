import React, { useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import soundApplause from "../static/applause.mp3"

const Ocko = () => {

  const [boxColors, setBoxColors] = useState({
    ockoContentBox1: 'coral',
    ockoContentBox2: 'coral',
    ockoContentBox3: 'coral',
    ockoContentBox4: 'coral',
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
    <div id="ockoContentBoxes" className='contentBoxes'>
    <div
        id="ockoaContentBox1"
        className="contentBox"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 'ockoContentBox1', 'O')}
        style={{ backgroundColor: boxColors.ockoContentBox1 }}
    >
    </div>

    <div
      id="ockoContentBox2"
      className="contentBox"
      onDragOver={handleDragOver}
      onDrop={(event) => handleDrop(event, 'ockoContentBox2', 'C')}
      style={{ backgroundColor: boxColors.ockoContentBox2 }}
    >
    </div>

    {isExploding && <ConfettiExplosion {...confettiProps} className='confettiPosition'/>}

    <div
        id="ockoContentBox3"
        className="contentBox"
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, 'ockoContentBox3', 'K')}
        style={{ backgroundColor: boxColors.ockoContentBox3 }}
    >
    </div>

    <div
      id="ockoContentBox4"
      className="contentBox"
      onDragOver={handleDragOver}
      onDrop={(event) => handleDrop(event, 'ockoContentBox4', 'O')}
      style={{ backgroundColor: boxColors.ockoContentBox4 }}
    >
    </div>
  </div>

)
}

export default Ocko