import React, { useState } from 'react'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./css/pagesStyles.css"
import "../components/css/stylesCompo.css"
import { Link } from 'react-router-dom'; 
import { Numbers, BoxesName, Psy, Jahody, Deti, Tvare, UvodnaPage } from '../components';
import dvaPsy from "../static/pictures/pages/dvaPsy.png"
import štyriJahody from "../static/pictures/pages/štyriJahody.jpg"
import šesťDetí from "../static/pictures/pages/šesťDetí.png"
import deväťDetí from "../static/pictures/pages/deväťDetí.png"

const NumberExercise = () => {

  const [selectedWord, setSeledtedWord] = useState(UvodnaPage)
  const [activeBox, setActiveBox] = useState(null)

  const renderContend = () => {
    switch(selectedWord) {
      case "PSY":
        return <Psy />;
      case "JAHODY":
        return <Jahody />;
      case "DETI":
        return <Deti />;
      case "TVÁRE":
        return <Tvare />;
      default:
        return <UvodnaPage />
    }
  }
  
  const handleBoxClick = (word) => {
    setSeledtedWord(word);
    setActiveBox(word);
  }

  const handleDragOver = (event) =>{
    event.preventDefault();
  }

  const handleDrop = (event) =>{
    event.preventDefault();
    const letter = event.dataTransfer.getData("text");
    event.target.textContent = letter;
  }

  return (
    <div id="vegetablesPage" className='pages'>
      <div id="buttonBackVegetablesPage" className="backButtonPages">
        <Link to="/">
          <Button variant="contained" size="small" color='warning' startIcon={<ArrowBackIcon />}>
          SPÄŤ
          </Button>
        </Link>
      </div>

      <div id="mainPageVegetables" className='mainPageSection'>
          <div className='mainPageSectionLettersNumbers'>
            <Numbers />
          </div>
          <div className='mainPageSectionChooseWordName'><p>SPOČÍTAJ</p><div className='mainPageSectionChooseWordNameWhatToDo'>PRETIAHNI ČÍSLA DO BOXOV</div></div>
          <div className='mainPageSectionChooseWords'>
            <BoxesName
              boxName="PSY"
              image={dvaPsy}
              onBoxClick={()=>handleBoxClick("PSY")}
              isActive={activeBox === "PSY"}
            />

            <BoxesName
              boxName="JAHODY"
              image={štyriJahody}
              onBoxClick={()=> handleBoxClick("JAHODY")}
              isActive={activeBox === "JAHODY"} 
            />

            <BoxesName
              boxName="DETI"
              image={šesťDetí}
              onBoxClick={()=>handleBoxClick("DETI")}
              isActive={activeBox === "DETI"}
            />

            <BoxesName
              boxName="TVÁRE"
              image={deväťDetí}
              onBoxClick={()=>handleBoxClick("TVÁRE")}
              isActive={activeBox === "TVÁRE"}
            />

          </div>
          <div 
            className='mainPageSectionMakeWordContent'
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
              {renderContend()}
          </div>
      </div>
    </div>
)
}

export default NumberExercise