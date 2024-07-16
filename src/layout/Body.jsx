import React, {} from 'react'
import "./css/styles.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LettersExercise from "../pages/LettersExercise"
import NumberExercise from "../pages/NumberExercise"
import Home from '../pages/Home';



const Body = () => {
  return (
    <div id="body">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Home/> } />
              <Route path="/pismena" element={ <LettersExercise /> }/>
              <Route path="/cisla" element={ <NumberExercise/> }/>
            </Routes>
          </BrowserRouter>
    </div>
        )
}

export default Body