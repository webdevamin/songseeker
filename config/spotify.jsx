import axios from 'axios';

const getAccessToken = async () => {
    const config = {
        headers: {
            Authorization: `Basic ${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ENCODED}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    const params = new URLSearchParams();

    params.append('grant_type', 'client_credentials');

    const authRes = await axios.post(process.env.NEXT_PUBLIC_SPOTIFY_AUTH_URL, params, config);
    
    return authRes.data.access_token;
}

export {
    getAccessToken,
}