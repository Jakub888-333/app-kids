import React, {} from 'react'
import cislo1 from "../staticCompo/soundsCompo/cislo1.mp3"
import cislo2 from "../staticCompo/soundsCompo/cislo2.mp3"
import cislo3 from "../staticCompo/soundsCompo/cislo3.mp3"
import cislo4 from "../staticCompo/soundsCompo/cislo4.mp3"
import cislo5 from "../staticCompo/soundsCompo/cislo5.mp3"
import cislo6 from "../staticCompo/soundsCompo/cislo6.mp3"
import cislo7 from "../staticCompo/soundsCompo/cislo7.mp3"
import cislo8 from "../staticCompo/soundsCompo/cislo8.mp3"
import cislo9 from "../staticCompo/soundsCompo/cislo9.mp3"
import cislo10 from "../staticCompo/soundsCompo/cislo10.mp3"


const NumberExercise = () => {

    const playSound = (sound) => {
        new Audio(sound).play()
    }
 
    const handleDragStart = (event, letter) => {
        event.dataTransfer.setData("text", letter);
     }



  return (
    <div id="numbers">
        <button
            draggable
            onDragStart={(e) => handleDragStart(e, "1")}
            onMouseEnter={()=> playSound(cislo1)}
            onClick={()=> playSound(cislo1)}
        >
            1
        </button>

        <button
            draggable
            onDragStart={(e) => handleDragStart(e, "2")}
            onMouseEnter={()=> playSound(cislo2)}
            onClick={()=> playSound(cislo2)}
        >
            2
        </button>

        <button
            draggable
            onDragStart={(e) => handleDragStart(e, "3")}
            onMouseEnter={()=> playSound(cislo3)}
            onClick={()=> playSound(cislo3)}
        >
            3
        </button>

        <button
            draggable
            onDragStart={(e) => handleDragStart(e, "4")}
            onMouseEnter={()=> playSound(cislo4)}
            onClick={()=> playSound(cislo4)}
        >
            4
        </button>

        <button
            draggable
            onDragStart={(e) => handleDragStart(e, "5")}
            onMouseEnter={()=> playSound(cislo5)}
            onClick={()=> playSound(cislo5)}
        >
            5
        </button>

        <button
            draggable
            onDragStart={(e) => handleDragStart(e, "6")}
            onMouseEnter={()=> playSound(cislo6)}
            onClick={()=> playSound(cislo6)}
        >
            6
        </button>

        <button
            draggable
            onDragStart={(e) => handleDragStart(e, "7")}
            onMouseEnter={()=> playSound(cislo7)}
            onClick={()=> playSound(cislo7)}
        >
            7
        </button> 

        <button
            draggable
            onDragStart={(e) => handleDragStart(e, "8")}
            onMouseEnter={()=> playSound(cislo8)}
            onClick={()=> playSound(cislo8)}
        >
            8
        </button>

        <button
            draggable
            onDragStart={(e) => handleDragStart(e, "9")}
            onMouseEnter={()=> playSound(cislo9)}
            onClick={()=> playSound(cislo9)}
        >
            9
        </button>

        <button
            style={{width: "60px"}}
            raggable
            onDragStart={(e) => handleDragStart(e, "10")}ň
            onMouseEnter={()=> playSound(cislo10)}
            onClick={()=> playSound(cislo10)}
        >
            10
        </button>

    </div>
)
}

export default NumberExercise