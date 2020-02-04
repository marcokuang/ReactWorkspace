import axios from 'axios';
import Keys from './Keys';

const baseURL = "https://api.unsplash.com";

export default axios.create(
{
    baseURL: baseURL,
    headers: {
        Authorization: `Client-ID ${Keys.AccessKey}`
    }
}
);