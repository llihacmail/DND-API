const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});
const { USERS_TABLE } = process.env //to import from .yml

async function addUser_put() {
    const user = await dynamoDb.put(
        {
        TableName: process.env.USERS_TABLE,
        Item: {
            UserID: "2"
        }
    })
};
module.exports = addUser_put;