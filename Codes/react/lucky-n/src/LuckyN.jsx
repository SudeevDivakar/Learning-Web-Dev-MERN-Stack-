import { useState } from "react";
import Dies from "./Dies";

export default function LuckyN({num=2, N=7}){
    let [dice, setDice] = useState(new Array(num).fill(0));
    dice = dice.map((i) => Math.floor(Math.random() * 6) + 1);
    let sum = 0;
    dice.map((i) => {
        sum += i;
    });
    const win = (sum === N);
    function rollDie(){
        setDice((oldDice) => {
            return oldDice.map((i) => {
                return Math.floor(Math.random() * 6) + 1;
            });
        });
    }
    return(
        <div>
            <h1>Lucky-N Game {win ? ': YOU WIN!!!' : ''}</h1>
            <Dies dice={dice}/>
            <button onClick={rollDie}>Roll Again</button>
        </div>
    );
}