import './Box.css'

export default function Box({isActive, toggleBox}){
    return(
        <div className="Box" onClick={toggleBox} style={{backgroundColor: isActive ? "green" : "red"}}></div>
    );
}