const getUser_query = require('../port/getUser_query')

 const getUser = async (event) => {
    const payload = event.body
    try {
        const user = await getUser_query(payload)
        return {
            statusCode: 200,
            body: JSON.stringify(user)
        }
    }
    catch (err) {
        console.log(`error fetching ${payload}`, err)
        return {
            statusCode: 500,
            body: JSON.stringify("ERROR_FETCHING_USER")
        }
    }
 }

module.exports = getUser;
