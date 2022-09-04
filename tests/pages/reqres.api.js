import BaseAPI from '../pages/base.api.js';

const ReqresAPI = {
    register: (data) => BaseAPI.post('/register', data),
    login: (data) => BaseAPI.post('/login', data),
    updateput: (data) => BaseAPI.put('/users/2', data),
    updatepatch :(data) => BaseAPI.patch('/users/2', data)
}

export default ReqresAPI;


