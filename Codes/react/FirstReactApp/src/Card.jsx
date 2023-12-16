export default function Card({ i }) {
    return(
        <div>
            <h2>{i.name}</h2>
            <h3>${i.price} a night</h3>
            <h4>{i.rating}⭐</h4>
        </div>
    );
}