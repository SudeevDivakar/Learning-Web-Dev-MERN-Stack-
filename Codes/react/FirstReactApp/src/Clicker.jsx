// function clickHandler(){
//     console.log('You clicked!');
// }

// function handleHover(){
//     console.log('You Hovered!');
// }

// export default function Clicker() {
//     return(
//         <div>
//             <p onMouseOver={handleHover}>Hover over me</p>
//             <button onClick={clickHandler}>Click</button>
//         </div>
//     );
// }


export default function Clicker({ message, buttonText }){
    function handleClick(){
        alert(message)
    }
    return(
        <div>
            {/* <button onClick={() => alert(message)}>{buttonText}</button> */}
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}