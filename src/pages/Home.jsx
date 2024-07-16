import React, {} from 'react'
import letterPic from "../static/pictures/body/pismena.jpg"
import numberPic from "../static/pictures/body/cisla.jpg"
import { Link } from 'react-router-dom'
import "./css/pagesStyles.css"


const Home = () => {
    return (
        <div id="homePage" className='pages'>
          <div id="bodyBoxes">
            <div id="ovocieBox" className='bodyBox'>
            <Link to ="/pismena"><img src={letterPic} alt="fruit"/></Link>
              <h1>PÍSMENÁ</h1>
            </div>  
    
            <div id="zeleninaBox" className='bodyBox'>
            <Link to ="/cisla"><img src={numberPic} alt="vegetables"/></Link>
              <h1>ČÍSLA</h1>
            </div>
          </div>
        </div>
            )
}

export default Home