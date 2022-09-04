import BaseAPI from '../pages/base.api.js';

const ReqresAPI = {
    update: (data) => BaseAPI.post('/users/2', data)
}

export default ReqresAPI;