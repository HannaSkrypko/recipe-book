import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://money-keeper-a936a.firebaseio.com/'
});

export default instance;