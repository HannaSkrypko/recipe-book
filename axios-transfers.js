import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://recipes-c3bf4.firebaseio.com/'
});

export default instance;