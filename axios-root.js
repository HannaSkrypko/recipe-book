import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://recipe-book-2a750.firebaseio.com/'
});

export default instance;