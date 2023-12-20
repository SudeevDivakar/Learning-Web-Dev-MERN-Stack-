import { useState } from "react";

export default function ScoreKeeper({numPlayers, target = 5}) {
    const [winner, setWinner] = useState(false)
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    function updateScore(ind){
        setScores((prevScores) => {
            const copy = [...prevScores];
            copy[ind] += 1;
            if(copy[ind] === target){
                setWinner((i) => true);
            }
            return copy;
        })
    }
    function playerReset(){
        setScores((oldscores) => {
            return oldscores.map((i) => 0)
        })
        setWinner((i) => false)
    }
    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, index) => {
                    return (<li key={index}>
                        Player {index + 1}: {score} 
                        <button onClick={winner ? playerReset : () => updateScore(index)}>+1</button>
                        {score >= target ? 'WINNER!!!' : '' }
                        </li>);
                })}
            </ul>
            <button onClick={playerReset}>Reset</button>
        </div>
    );
}