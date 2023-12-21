import Box from "./Box";
import { useState } from "react";

export default function BoxGrid({numBoxes = 9}) {
    const [colors, setColors] = useState([false, false, false, false, false, false, false, false, false]);
    
    function setRed(){
        setColors(() => {
            return [false, false, false, false, false, false, false, false, false];
        });
    }

    function toggleBox(idx){
        setColors((oldColors) => {
            return oldColors.map((color, ind) => {
                if(ind === idx){
                    return !color;
                }
                return color;
            });
        });
    }

    return (
        <div>
            {colors.map((i,index) => {
                return <Box key={index} isActive={i} toggleBox={() => toggleBox(index)}/>
            })}
            <button onClick={setRed}>Update all to Red</button>
        </div>
    )
}