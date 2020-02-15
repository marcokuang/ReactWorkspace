import Keys from './Keys';
import axios from 'axios';

const baseURL = 'https://www.youtube.com';

export default axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: `Client-ID ${Keys.AccessKey}`
    }
});
