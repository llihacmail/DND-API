
const addUser_put = require('../port/addUser_put.js')
const AddUserModel = require('../application/AddUser.model.js')

 const addUser = async (event) => {
    const payload = event.body;
    try {
        console.info("creating user", payload) // debugging
        const addUserModel = await AddUserModel(payload); // sending body through model asserts
        const user = await addUser_put(addUserModel); // PUT
        return {
            statusCode: 200,
            body: JSON.stringify(user)
        }
    }
    catch (err) {
        console.error(`error creating user, ${payload}`, err) // err handler
        return {
            statusCode: 500,
            body: JSON.stringify("ERROR_CREATING_USER")
        }
    }
};

module.exports = addUser;
