const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});
const { USERS_TABLE } = process.env //to import from .yml

async function addUser_put(user) {
    try {
        console.log(user)
        const query = {
            TableName: process.env.USERS_TABLE,
            Item: user,
            ConditionExpression: "attribute_not_exists(#uId)",
            ExpressionAttributeNames: {
                "#uId": "UserID"
            }
        }
        await dynamoDb.put(query).promise();
        return user
    }
    catch (err) {
        if (err.code === "ConditionalCheckFailedException") { // dynamodb condition for UserID
            throw JSON.stringify("USER_ALREADY_EXISTS_ERROR");
        }
        throw err
    }
};

module.exports = addUser_put;