import axios from 'axios';

const KEY = 'AIzaSyAsYS3ygCqueGXJdOQoBl4zwUQibkb1RZ8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});



