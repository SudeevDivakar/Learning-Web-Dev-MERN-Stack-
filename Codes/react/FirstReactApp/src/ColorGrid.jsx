import ColorBox from "./ColorBox";
import './ColorGrid.css'

const colors = [
    "#ff0000", // Red
    "#00ff00", // Green
    "#0000ff", // Blue
    "#ffff00", // Yellow
    "#ff00ff", // Magenta
    "#00ffff", // Cyan
    "#800080", // Purple
    "#008000", // Dark Green
    "#800000", // Maroon
    "#008080", // Teal
    "#ff4500", // Orange Red
    "#00bfff", // Deep Sky Blue
    "#a52a2a", // Brown
    "#9400d3", // Dark Violet
    "#32cd32", // Lime Green
    "#ff1493"  // Deep Pink
]   
const len = colors.length;

export default function Colorgrid() {
    let boxes = [];
    for(let i = 0; i < 25; i++){
        boxes.push(<ColorBox key={i} colors={colors} len={len} />);
    }
    return(
        <div className="Grid">
            {boxes}
        </div>
    );
}