
const assert = require('assert');
const objectid = require('objectid');

function GetUserModel(UserID) {
    assert(UserID && typeof UserID === 'string', `Username must be a string, instead got ${typeof UserID}` );
    return {
        UserID: objectid(),
        username: username,
    }
}
module.exports = GetUserModel;