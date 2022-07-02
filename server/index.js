require('dotenv').config();

const express = require('express');

const colors = require('colors');

const connectDB = require('./config/db');

const { graphqlHTTP } = require('express-graphql')

const schema = require('./schema/schema');

const port = process.env.PORT || 5000;

const app = express();

connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    
    graphiql: true
//    graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(port, console.log(`Server Running on port ${port}`));
