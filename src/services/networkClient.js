import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const networkClient = {
    post: async (url, body) => {
        return await axios.post(url, body);
    },
};

export default networkClient;
