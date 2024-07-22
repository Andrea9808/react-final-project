const axios = require('axios');
require('dotenv').config();

exports.handler = async function (event, context) {
    const API_URL = "https://api.igdb.com/v4/games";
    const CLIENT_ID = process.env.CLIENT_ID;
    const AUTHORIZATION = `Bearer ${process.env.AUTHORIZATION}`;

    try {
        const response = await axios({
            method: 'POST',
            url: API_URL,
            headers: {
                'Client-ID': CLIENT_ID,
                'Authorization': AUTHORIZATION,
                'Accept': 'application/json'
            },
            data: event.body
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error fetching data' }),
        };
    }
};
