const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});
const { USERS_TABLE } = process.env //to import from .yml

async function getUsers_scan() {
    const result = await dynamoDb.scan(
        { TableName: process.env.USERS_TABLE }).promise();

    return result.Items|| "NOT_FOUND" //NULL CHECK THE DB OBJECT

}
module.exports = getUsers_scan;