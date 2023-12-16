export default function ListItem({ i }) {
    return(
        <li key={i.id} style={{color: i.completed === true ? 'gray' : 'red' , textDecoration: i.completed === true ? 'line-through' : ''}}>
                <b>{i.item}</b> - {i.quantity}
        </li>
    )
}