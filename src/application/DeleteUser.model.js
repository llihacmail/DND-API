const assert = require('assert');
const objectid = require('objectid');

function DeleteUserModel({UserID}) {
    assert(UserID && typeof UserID === 'string', `UserID must be a string, instead got ${typeof UserID}` );
    return {
        UserID: UserID,
    }
}
module.exports = DeleteUserModel;