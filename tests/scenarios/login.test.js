import { assert } from 'chai';
//di laptopku harus pake .js di suffixnya dan ganti '$root/pages, dengan '../pages, padahal dari mentor samplenya beda
//contohnya begini '$root/pages/login.api';
//utk login, ReqresAPI ny ada di pages reqres.api.js
import ReqresAPI from '../pages/reqres.api.js';
import * as data from '../data/user.data.js';

describe('As a guest, I want to login', () => {
    it('Should succesfully login using valid account', async () => {
        const response = await ReqresAPI.login(data.VALID_LOGIN);
//chai utk assertion
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["token"]);
        assert.isString(response.data.token);

    });
});


