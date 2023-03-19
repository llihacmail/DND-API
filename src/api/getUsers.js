const getUsers_scan = require('../port/getUsers_scan.js'); 

const getUsers = async () => {
    try {
        const users = await getUsers_scan();
        return {
            statusCode: 200,
            body: JSON.stringify(users)
        }
    }
    catch (err) {
        console.log("ERROR_SCANNING_DB", err)
        return {
            statusCode: 500,
            body: JSON.stringify("FAILED_TO_FETCH_USERS")
        }
    }
}
module.exports = getUsers;