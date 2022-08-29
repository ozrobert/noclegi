import { useEffect, useLayoutEffect, useState } from 'react';

const quotes = [
    'To, że milczę, nie znaczy, że nie mam nic do powiedzenia.',
    'Lepiej zaliczać się do niektórych, niż do wszystkich.',
    'Pluń na wszystko, co minęło: na własną boleść i na cudzą nikczemność... Wybierz sobie jakiś cel, jakikolwiek i zacznij nowe życie.',
];

const styles = {
    position: 'absolute',
    inset: '10px 0 0 0',
    paddingInline: '20px',
    textAlign: 'center',
    color: '#fff',
    fontStyle: 'italic',
    fontSize: '1.1rem',
    zIndex: -1,
};
function InspiringQuote(props) {
    const [quote, setQuote] = useState('Wczytywanie cytatu...');
    const [loading, setLoading] = useState(true);

    useEffect(() => setLoading(false), []);

    useLayoutEffect(() => {
        const randomQuoteId = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomQuoteId]);
    }, [loading]);

    return <p style={styles}>{quote}</p>;
}

export default InspiringQuote;
