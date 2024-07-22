import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (id = null) => {
    const [input, setInput] = useState('');
    const [count, setCount] = useState(0);
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const apiUrl = "/.netlify/functions/proxy";

    const handleSearch = async (event, searchInput) => {
        event.preventDefault();

        setIsLoading(true);
        setIsError(false);

        try {
            const response = await axios({
                method: 'POST',
                url: apiUrl,
                data: `search "${searchInput}"; fields name, cover.url, summary; limit 40;`
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

    useEffect(() => {
        if (id) {
            const fetchSingleGame = async () => {
                setIsLoading(true);
                setIsError(false);

                try {
                    const response = await axios({
                        method: 'POST',
                        url: apiUrl,
                        data: `fields name, cover.url, summary, videos.video_id, videos.name, platforms.name, category; where id = ${id};`
                    });

                    setGames([response.data[0]]);
                    console.log('Single Game Data from IGDB:', response.data[0]);
                } catch (error) {
                    console.error('Error fetching single game data:', error);
                    setIsError(true);
                }

                setIsLoading(false);
            };

            fetchSingleGame();
        }
    }, [id]);

    return { input, setInput, games, isLoading, isError, handleSearch, count };
};

export default useFetch;
