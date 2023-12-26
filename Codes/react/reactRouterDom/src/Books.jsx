import { useParams } from 'react-router-dom';

export default function Books(){
    const { id } = useParams();
    return <h1>Book {id}</h1>
}