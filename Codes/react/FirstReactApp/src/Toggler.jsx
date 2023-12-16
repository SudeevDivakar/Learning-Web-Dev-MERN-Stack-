import {useState} from 'react';

export default function Toggler() {
    const [face, setFace] = useState('🙂');
    function changeFace(){
        if(face === '🙂'){
            setFace('😔');
        }
        else{
            setFace('🙂');
        }
    }
    return(
        <div>
            <h1>{face}</h1>
            <button onClick={changeFace}>Change</button>
        </div>
    );
}