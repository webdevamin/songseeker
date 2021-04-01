import axios from 'axios';
import { getAccessToken } from "../config/spotify";

const getTracks = async (query, offset) => {
    try {
        const accessToken = await getAccessToken();

        const itemsRes = await axios.get(process.env.NEXT_PUBLIC_SPOTIFY_URL, {
            params: {
                'type': 'track',
                'market': 'US',
                'offset': offset,
                'q': query,
            }, headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        return itemsRes;
    }
    catch (err) {
        return false;
    }
}

export {
    getTracks,
}