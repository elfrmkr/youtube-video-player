import axios from 'axios';

const KEY = 'AIzaSyAoaYTnQPbfFyAg-HlS1sj1p2xSXAVQUws';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});