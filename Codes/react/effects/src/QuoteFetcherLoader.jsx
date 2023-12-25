import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = 'https://inspo-quotes-api.herokuapp.com/quotes/random';

export default function QuoteFetcherLoader() {
    const [quote, setQuote] = useState({text:'', author: ''});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getInitialQuote(){
            const response = await fetch(RANDOM_QUOTE_URL);
            const jsonResponse = await response.json();
            const randomQuote = jsonResponse.quote;
            setQuote(lol         => randomQuote);
            setIsLoading(lol => false);
        }
        getInitialQuote();
    }, []); 

    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
    }

    return(
        <div>
            {isLoading && <p>Loading...</p>}
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    )
}