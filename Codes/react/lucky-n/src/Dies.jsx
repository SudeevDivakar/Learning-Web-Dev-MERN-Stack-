import Die from "./Die"
import './Dies.css'

export default function Dies({ dice }){
    return(
        <section className="Dice">
            {dice.map((i) => {
                return <Die val={i}/>
            })}
        </section>
    );
}