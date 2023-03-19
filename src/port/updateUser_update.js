const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});
const { USERS_TABLE } = process.env //to import from .yml

async function updateUser_update(user) {
    try {
        console.log(user);
        const query = {
            TableName: process.env.USERS_TABLE,
            Item: user,
            ExpressionAttributesNames: {
                "#uId": "UserID",
                "#username": "username"
            },
            ExpressionAttributeValues: {
                ":a": user.username
            },
            UpdateExpression: "set username = :a",
            Key: {
                UserID: user.UserID
            }
        }
        await dynamoDb.update(query).promise();
        return user;

    }
    catch (err) {
        throw err
    }
};

module.exports = updateUser_update;