const getUsers_scan = require('../port/getUsers_scan.js'); 

const getUsers = async (event) => {
    const users = await getUsers_scan();
    return {
        statusCode: 200,
        body: JSON.stringify(users)
    }
};

module.exports = getUsers;