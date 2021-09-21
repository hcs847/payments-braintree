import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        // set a default header
        // once user authenticates, apply token to all req
        axios.defaults.headers.common['Authorization'] = token;
        window.location.assign('/home');
    } else {
        // delete auth header
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;