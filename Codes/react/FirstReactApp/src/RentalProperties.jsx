import Card from "./Card";

export default function RentalProperties({ properties }) {
    return(
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            {properties.map((i) => (
                <Card i={i} key={i.id} />
            ))}
        </div>
    );
}