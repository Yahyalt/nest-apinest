import { assert } from 'chai';
//di laptopku harus pake .js di suffixnya dan ganti '$root/pages, dengan '../pages, contohnya begini '$root/pages/reqres.api';
//
import ReqresAPI from '../pages/reqres.api.js';
import * as data from '../data/user.data.js';

describe('As a guest, I want to register', () => {
    it('Should succesfully register using valid account', async () => {
        const response = await ReqresAPI.register(data.VALID_REGISTER);
//chai utk assertion
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["id", "token"]);
        assert.isNumber(response.data.id);
        assert.isString(response.data.token);

    });
});


