import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const responseBody = (response) => response.data;

const requests = {
    get: () =>
        axios
            .get
            .then(responseBody),
    post: (body) =>
        axios
            .post(body)
            .then(responseBody),
    put: (url, body) =>
        axios
            .put(url, body)
            .then(responseBody),
    delete: (url) =>
        axios
            .delete(url)
            .then(responseBody)
};

export default requests;
