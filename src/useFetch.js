import { useState, useEffect } from "react";
import axios from "axios";
const url = "https://api.igdb.com/v4/games"
const client_id = 'akhchja2t72t0afrjp5tot6pxx2p8n'
const access_token = '0ze23d44k9j6fir5sv59a192hsdssm'
const type_token = 'Bearer'


const useFetch = (type = false, query) => {
    const url = type ? `https://api.igdb.com/v4/${type}` : "https://api.igdb.com/v4/games"
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [isError, setIsError] = useState(false);
}