const deleteUser_delete = require('../port/deleteUser_delete')
const DeleteUserModel = require('../application/deleteUser.model');

 const deleteUser = async (event) => {
    const payload = event.body;
    try {
        console.info("deleting User..... *scrubbing*", payload) // debugging
        const deleteUserModel = DeleteUserModel(payload)
        const user = await deleteUser_delete(deleteUserModel); // DELETE
        return {
            statusCode: 200,
            body: JSON.stringify("USER-SUCCESSFULLY-DELETED")
        }
    }
    catch (err) {
        console.error(`error deleting user, ${payload}`, err) // err handler
        return {
            statusCode: 500,
            body: JSON.stringify("ERROR_DELETING_USER")
        }
    }
};

module.exports = deleteUser;