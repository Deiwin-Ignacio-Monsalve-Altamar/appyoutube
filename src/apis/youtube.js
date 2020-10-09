import axios from 'axios';
const KEY = 'AIzaSyCxKpmkXAn1Ub3CkK0ALyUFCu4FRSKYjRg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
