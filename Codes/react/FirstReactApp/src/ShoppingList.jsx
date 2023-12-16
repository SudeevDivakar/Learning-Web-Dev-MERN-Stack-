import ListItem from './ListItem';

export default function ShoppingList({list}) {
    return(
        <ul>
            {list.map((i) => (
                <ListItem i={i}></ListItem>
            ))}
        </ul>
    );
}