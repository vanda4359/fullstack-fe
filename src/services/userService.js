import axios from '../axios';

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', {email, password});
}

const getAllUsers = (inputId) => {
    // template string
    return axios.get(`/api/get-all-users?id=${inputId}`);
}

export { handleLoginApi, getAllUsers };