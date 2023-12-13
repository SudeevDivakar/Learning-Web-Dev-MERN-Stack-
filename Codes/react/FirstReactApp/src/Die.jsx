export default function Die(props){
    const rand = Math.floor(Math.random() * props.numSides) + 1;
    return <h1>Your lucky number is {rand}</h1>
}


// export default function Die({numSides}){
//     const rand = Math.floor(Math.random() * numSides) + 1;
//     return <h1>Your lucky number is {rand}</h1>
// }