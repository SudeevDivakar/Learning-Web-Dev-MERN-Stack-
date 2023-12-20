import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    function increseCount(){
        setCount((count) => count + 1);
    }
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={increseCount}>+1</button>
        </div>
    );
}