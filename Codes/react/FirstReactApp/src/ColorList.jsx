export default function ColorList({colors}){
    const lis = colors.map((color) => <li>{color}</li>);
    const styles = {color: 'magenta'};
    return (
        <div style={styles}>
            <h3>List of colors used:</h3>
            <ul>
                {lis}
            </ul> 
        </div>
    );
}