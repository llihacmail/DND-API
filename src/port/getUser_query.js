const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});
const { USERS_TABLE } = process.env //to import from .yml

async function getUser_query(userID) {
    const query = {
        TableName: process.env.USERS_TABLE,
        KeyConditionExpression: "#uId = :uId",
        ExpressionAttributeNames: {
            "#uId": "UserID"
        },
        ExpressionAttributeValues: {
            ':uId': userID
        }
    }
    const result = await dynamoDb.query(query).promise();

    return result && result.Items.length && result.Items || "NOT_FOUND" //NULL CHECK THE DB OBJECT
}
module.exports = getUser_query
