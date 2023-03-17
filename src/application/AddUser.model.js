//model template for specific user objects

const assert = require('assert');
const objectid = require('objectid');

function AddUserModel({username}) {
    assert(username && typeof username === 'string', `Username must be a string, instead got ${typeof username}` );
    return {
        UserID: objectid(),
        username: username,
    }
}
module.exports = AddUserModel;