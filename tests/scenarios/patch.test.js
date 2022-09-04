import { assert } from 'chai';
import ReqresAPI from '../pages/reqres.api.js';
import * as data from '../data/user.data.js';

describe('As a guest, I want to update user data (using PATCH method)', () => {
    it('Should be succesfully update user data', async () => {
        const response = await ReqresAPI.updatepatch(data.UPDATE_PATCH);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["name", "job", "updatedAt"]);
        assert.isString(response.data.name); 
        assert.isString(response.data.job);
        assert.isString(response.data.updatedAt);
    });
});