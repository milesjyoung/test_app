const awsLambda = require('@vendia/serverless-express');
const app = require('./index');

exports.handler = awsLambda({ app });