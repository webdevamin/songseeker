import axios from 'axios';
import {getAccessToken} from "../config/spotify";

const getTracks = async (query, offset) => {
    try {
        const accessToken = await getAccessToken();

        return await axios.get(process.env.NEXT_PUBLIC_SPOTIFY_URL, {
            params: {
                'type': 'track',
                'market': 'US',
                'offset': offset,
                'q': query,
            }, headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
    }
    catch (err) {
        return false;
    }
}

export {
    getTracks,
}