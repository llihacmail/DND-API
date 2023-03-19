const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});
const { USERS_TABLE } = process.env //to import from .yml

async function deleteUser_delete(user) {
    try {
        console.log("PENDING-DELETE", user);
        const query = {
            TableName: process.env.USERS_TABLE,
            Item: user,
            Key: {
                UserID: user.UserID
            }
        }
        await dynamoDb.delete(query).promise();
        return user;
    }
    catch (err) {
        throw err

    }
}

module.exports = deleteUser_delete;