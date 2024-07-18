import { useState } from 'react';
import axios from 'axios';

const useFetch = () => {
    const [input, setInput] = useState('');
    const [count, setCount] = useState(0); // Inizializza count a 0
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const apiUrl = "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games";

    const handleSearch = async (event, searchInput) => {
        event.preventDefault();
    
        setIsLoading(true);
        setIsError(false);
    
        try {
            const response = await axios({
                method: 'GET',
                url: apiUrl,
                headers: {
                    'Client-ID': 'akhchja2t72t0afrjp5tot6pxx2p8n',
                    'Authorization': 'Bearer 72w8kzjf4dif9h14yhmwolg1cmrmgb'
                },
                params: {
                    fields: 'name, cover.url, summary', 
                    search: searchInput,
                    limit: 40,
                    'locale': 'IT-it' 
                }
            });
    
            setGames(response.data);
            setCount(response.data.length);
            console.log('Data from IGDB:', response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsError(true);
        }
    
        setIsLoading(false);
    };

    return { input, setInput, games, isLoading, isError, handleSearch, count };
};

export default useFetch;
