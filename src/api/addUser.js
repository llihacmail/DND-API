
const addUser_put = require('../port/addUser_put.js')

 const addUser = async (event) => {
    const user = await addUser_put()
    return {
        statusCode: 200,
        body: JSON.stringify(user)
    }
};

module.exports = addUser;
