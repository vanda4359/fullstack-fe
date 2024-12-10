import axios from '../axios';

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password });
}

const getAllUsers = (inputId) => {
    // template string
    return axios.get(`/api/get-all-users?id=${inputId}`);
}

const createNewUser = (data) => {
    return axios.post(`/api/create-new-user`, data)
}

const deleteUser = (id) => {
    return axios.delete(`/api/delete-user`, { data: { id } })
}

const editUser = (data) => {
    return axios.put(`/api/edit-user`, data)
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`);
}

export { handleLoginApi, getAllUsers, createNewUser, deleteUser, editUser, getAllCodeService };