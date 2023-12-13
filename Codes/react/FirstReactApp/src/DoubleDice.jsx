//For react conditionals + Dynamic styles

export default function DoubleDice(){
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const styles = { color : num1 === num2 ? 'green' : 'red'}
    return(
    <div className="DoubleDice" style={styles}>
        {num1 === num2 ? <h1>You win :)</h1> : <h1>You lose :(</h1>}
        <p>Num1: {num1}</p>
        <p>Num2: {num2}</p>
    </div>
    );
}