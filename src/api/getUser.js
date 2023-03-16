const getUser_query = require('../port/getUser_query')

 const getUser = async (event) => {
    const user = await getUser_query("1")
    return {
        statusCode: 200,
        body: JSON.stringify(user)
    }
};

module.exports = getUser;
