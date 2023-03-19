
const assert = require('assert');
const objectid = require('objectid');

function UpdateUserModel({UserID, username}) {
    assert(username && typeof username === 'string', `Username must be a string, instead got ${typeof UserID}` );
    return {
        UserID: UserID,
        username: username,
    }
}
module.exports = UpdateUserModel;