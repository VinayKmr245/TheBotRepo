import {useState} from "react";
import one from "./images/one.png";
import two from "./images/two.png";
import three from "./images/three.png";
import four from "./images/four.png";
import five from "./images/five.png";
import six from "./images/six.png";
const DiceObject=[{id:1,src:one},
{id:2,src:two},
{id:3,src:three},
{id:4,src:four},
{id:5,src:five},
{id:6,src:six}];

function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

export default function Dice(){
    const[dice, setDice] =useState(6);
    return(
        <div className="Container">
            <img src={DiceObject[dice-1].src} alt="dice"/>
            <button onClick={()=>setDice(generateRandomNumber())}>Roll Dice</button>
        </div>
    );
}