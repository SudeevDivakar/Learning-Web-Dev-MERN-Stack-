import {useState} from 'react';

export default function Counter() {
    let [num, setNum] = useState(0);

    function changeNum(){
        num += 1;
        setNum(num);
    }
    return(
        <div>
            <p>The count is: {num}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    );
}