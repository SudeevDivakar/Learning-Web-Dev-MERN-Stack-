import {useState} from 'react';

export default function ColorBox({ id, colors, len }) {
    const [rand, setRand] = useState(Math.floor(Math.random()*len))
    const changeColor = () => {
        setRand(Math.floor(Math.random()*len));
    }
    return(
        <div onClick={changeColor} style={{height: '20%', width: '20%',backgroundColor: colors[rand]}}></div>
    )
}