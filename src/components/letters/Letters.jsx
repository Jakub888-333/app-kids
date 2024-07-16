import React, {} from 'react'
import "../css/stylesCompo.css"
import soundA from "../staticCompo/soundsCompo/a.mp3"
import soundB from "../staticCompo/soundsCompo/b.mp3"
import soundC from "../staticCompo/soundsCompo/c.mp3"
import soundD from "../staticCompo/soundsCompo/d.mp3"
import soundE from "../staticCompo/soundsCompo/e.mp3"
import soundF from "../staticCompo/soundsCompo/f.mp3"
import soundG from "../staticCompo/soundsCompo/g.mp3"
import soundH from "../staticCompo/soundsCompo/h.mp3"
import soundCH from "../staticCompo/soundsCompo/ch.mp3"
import soundI from "../staticCompo/soundsCompo/i.mp3"
import soundJ from "../staticCompo/soundsCompo/j.mp3"
import soundK from "../staticCompo/soundsCompo/k.mp3"
import soundL from "../staticCompo/soundsCompo/l.mp3"
import soundM from "../staticCompo/soundsCompo/m.mp3"
import soundN from "../staticCompo/soundsCompo/n.mp3"
import soundO from "../staticCompo/soundsCompo/o.mp3"
import soundP from "../staticCompo/soundsCompo/p.mp3"
import soundR from "../staticCompo/soundsCompo/r.mp3"
import soundS from "../staticCompo/soundsCompo/s.mp3"
import soundT from "../staticCompo/soundsCompo/t.mp3"
import soundU from "../staticCompo/soundsCompo/u.mp3"
import soundV from "../staticCompo/soundsCompo/v.mp3"
import soundX from "../staticCompo/soundsCompo/x.mp3"
import soundZ from "../staticCompo/soundsCompo/z.mp3"


const Letters = () => {

    const playSound = (sound) => {
        new Audio(sound).play()
     } 

     const handleDragStart = (event, letter) => {
        event.dataTransfer.setData("text", letter);
     }


 
  return (
    <div id="letters">
        <button
            onMouseEnter={()=> playSound(soundA)}
            onClick={()=> playSound(soundA)}
            draggable
            onDragStart={(e) => handleDragStart(e, "A")}
        >
            A
        </button>
        <button
            onMouseEnter={()=> playSound(soundB)}
            onClick={()=> playSound(soundB)}
            draggable
            onDragStart={(e) => handleDragStart(e, "B")}
        >
            B
        </button>
        <button
            onMouseEnter={()=> playSound(soundC)}
            onClick={()=> playSound(soundC)}
            draggable
            onDragStart={(e) => handleDragStart(e, "C")}
        >
            C
        </button>
        <button
            onMouseEnter={()=> playSound(soundD)}
            onClick={()=> playSound(soundD)}
            draggable
            onDragStart={(e) => handleDragStart(e, "D")}
        >
            D
        </button>
        <button
            onMouseEnter={()=> playSound(soundE)}
            onClick={()=> playSound(soundE)}
            draggable
            onDragStart={(e) => handleDragStart(e, "E")}
        >
            E
        </button>
        <button
            onMouseEnter={()=> playSound(soundF)}
            onClick={()=> playSound(soundF)}
            draggable
            onDragStart={(e) => handleDragStart(e, "F")}
        >
            F
        </button>
        <button
            onMouseEnter={()=> playSound(soundG)}
            onClick={()=> playSound(soundG)}
            draggable
            onDragStart={(e) => handleDragStart(e, "G")}
        >
            G
        </button> 
        <button
            onMouseEnter={()=> playSound(soundH)}
            onClick={()=> playSound(soundH)}
            draggable
            onDragStart={(e) => handleDragStart(e, "H")}
        >
            H
        </button>
        <button style={{width: "75px"}}
            onMouseEnter={()=> playSound(soundCH)}
            onClick={()=> playSound(soundCH)}
            draggable
            onDragStart={(e) => handleDragStart(e, "CH")}
        >
            CH
        </button>
        <button
            onMouseEnter={()=> playSound(soundI)}
            onClick={()=> playSound(soundI)}
            draggable
            onDragStart={(e) => handleDragStart(e, "I")}
        >
            I
        </button>
        <button
           onMouseEnter={()=> playSound(soundJ)}
           onClick={()=> playSound(soundJ)}
           draggable
            onDragStart={(e) => handleDragStart(e, "J")}
        >
            J
        </button>
        <button
            onMouseEnter={()=> playSound(soundK)}
            onClick={()=> playSound(soundK)}
            draggable
            onDragStart={(e) => handleDragStart(e, "K")}
        >
            K
        </button>
        <button
            onMouseEnter={()=> playSound(soundL)}
            onClick={()=> playSound(soundL)}
            draggable
            onDragStart={(e) => handleDragStart(e, "L")}
        >
            L
        </button>
        <button
            onMouseEnter={()=> playSound(soundM)}
            onClick={()=> playSound(soundM)}
            draggable
            onDragStart={(e) => handleDragStart(e, "M")}
        >
            M
        </button>
        <button
            onMouseEnter={()=> playSound(soundN)}
            onClick={()=> playSound(soundN)}
            draggable
            onDragStart={(e) => handleDragStart(e, "N")}
        >
            N
        </button>
        <button
           onMouseEnter={()=> playSound(soundO)}
           onClick={()=> playSound(soundO)}
           draggable
            onDragStart={(e) => handleDragStart(e, "O")}
        >
            O
        </button>
        <button
           onMouseEnter={()=> playSound(soundP)}
           onClick={()=> playSound(soundP)}
           draggable
            onDragStart={(e) => handleDragStart(e, "P")}
        >
            P
        </button>
        <button
            onMouseEnter={()=> playSound(soundR)}
            onClick={()=> playSound(soundR)}
            draggable
            onDragStart={(e) => handleDragStart(e, "R")}
        >
            R
        </button>
        <button
            onMouseEnter={()=> playSound(soundS)}
            onClick={()=> playSound(soundS)}
            draggable
            onDragStart={(e) => handleDragStart(e, "S")}
        >
            S
        </button>
        <button
            onMouseEnter={()=> playSound(soundT)}
            onClick={()=> playSound(soundT)}
            draggable
            onDragStart={(e) => handleDragStart(e, "T")}
        >
            T
        </button>
        <button
            onMouseEnter={()=> playSound(soundU)}
            onClick={()=> playSound(soundU)}
            draggable
            onDragStart={(e) => handleDragStart(e, "U")}
        >
            U
        </button>
        <button
            onMouseEnter={()=> playSound(soundV)}
            onClick={()=> playSound(soundV)}
            draggable
            onDragStart={(e) => handleDragStart(e, "V")}
        >
            V
        </button>
        <button
           onMouseEnter={()=> playSound(soundX)}
           onClick={()=> playSound(soundX)}
           draggable
            onDragStart={(e) => handleDragStart(e, "X")}
        >
            X
        </button>
        <button
            onMouseEnter={()=> playSound(soundI)}
            onClick={()=> playSound(soundI)}
            draggable
            onDragStart={(e) => handleDragStart(e, "Y")}
        >
            Y
        </button>
        <button
            onMouseEnter={()=> playSound(soundZ)}
            onClick={()=> playSound(soundZ)}
            draggable
            onDragStart={(e) => handleDragStart(e, "Z")}
        >
            Z
        </button>

    </div>
)
}

export default Letters