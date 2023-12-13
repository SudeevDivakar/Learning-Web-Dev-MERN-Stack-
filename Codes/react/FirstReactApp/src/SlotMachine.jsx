export default function({values}) {
    const isWinner = values[0] === values[1] && values[0] === values[2];
    const h1s = values.map((value) => <h1 style={{display:"inline-block"}}>{value}</h1>);
    return(
        <div>
            {h1s}
            {isWinner ? <h2>You win :D</h2> : <h2>You lose D:</h2>}
            {isWinner && <h3>Congrats!!!!!!</h3>}
        </div>
    );
}