const updateUser_update = require("../port/updateUser_update.js")
const UpdateUserModel = require("../application/UpdateUser.model.js");

const updateUser = async (event) => {
    const payload = event.body;
    try {
        console.info("updating user", payload);
        const updateUserModel = await UpdateUserModel(payload);
        const user = await updateUser_update(updateUserModel);
        return {
            statusCode: 200,
            body: JSON.stringify(user)
        }
    }
    catch (err) {
        console.error(`error updating user, ${payload}`, err);
        return {
            statusCode: 500,
            body: JSON.stringify("ERROR UPDATING USER")
        }

    }
}
module.exports = updateUser