import { useState } from "react";

function generateGameBoard(){
    console.log('Making the initial game board');
    return Array(5000);
}
export default function Dumbo(){
    const [board, setBoard] = useState(generateGameBoard);
    return(
        <button onClick={() => setBoard}>Click Me to change state</button>
    )
}