import React, { useState } from 'react'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./css/pagesStyles.css"
import "../components/css/stylesCompo.css"
import { Link } from 'react-router-dom'; 
import { BoxesName, Letters, Mama, Ocko, Pes, Auto, UvodnaPage } from '../components';
import mama from "../static/pictures/pages/mama.jpg"
import ocko from "../static/pictures/pages/ocko.png"
import auto from "../static/pictures/pages/auto.png" 
import pes from "../static/pictures/pages/pes.png"


const LettersExercise = () => {

  const [selectedWord, setSeledtedWord] = useState(UvodnaPage)
  const [activeBox, setActiveBox] = useState(null)

  const renderContend = () => {
    switch (selectedWord) {
      case 'MAMA':
        return <Mama />;
      case 'OCKO':
        return <Ocko />;
      case 'AUTO':
        return <Auto />;
      case 'PES':
        return <Pes />;
      default:
        return <UvodnaPage />;
    }
  } 

  const handleBoxClick = (word) => {
    setSeledtedWord(word);
    setActiveBox(word);
  };

  const handleDragOver = (event) =>{
    event.preventDefault();
  }

  const handleDrop = (event) =>{
    event.preventDefault();
    const letter = event.dataTransfer.getData("text");
    event.target.textContent = letter;
  }



  return (
    <div id="fruitPage" className='pages'>
        <div id="buttonBackFruitPage" className="backButtonPages">
          <Link to="/">
            <Button variant="contained" size="small" color='warning' startIcon={<ArrowBackIcon />}>
            SPÄŤ
            </Button>
          </Link>
        </div>

        <div id="mainPageFruit" className='mainPageSection'>
          <div className='mainPageSectionLettersNumbers'>
            <Letters />
          </div>
          <div className='mainPageSectionChooseWordName'><div className='mainPageSectionChooseWordNameFirstText'>POSKLADAJ SLOVO</div><div className='mainPageSectionChooseWordNameWhatToDo'>PRETIAHNI PÍSMENÁ DO BOXOV</div></div>
          <div className='mainPageSectionChooseWords'>
            <BoxesName 
              boxName="MAMA"
              image={mama}
              onBoxClick={()=> handleBoxClick('MAMA')}
              isActive={activeBox=== 'MAMA'}
            />
            <BoxesName 
              boxName="OCKO"
              image={ocko}
              onBoxClick={()=> handleBoxClick('OCKO')}
              isActive={activeBox=== 'OCKO'}
            />
            <BoxesName 
              boxName="AUTO"
              image={auto}
              onBoxClick={()=> handleBoxClick('AUTO')}
              isActive={activeBox=== 'AUTO'}
            />
            <BoxesName 
              boxName="PES"
              image={pes}
              onBoxClick={()=> handleBoxClick('PES')}
              isActive={activeBox=== 'PES'}
            />
          </div>

            <div 
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className='mainPageSectionMakeWordContent'
            >
              {renderContend()}
                
            </div>

        </div>
    </div>
)
}

export default LettersExercise