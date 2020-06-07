const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const mongoose = require('mongoose');
const resolvers = require('./resolvers');
require('dotenv').config();

mongoose.connect(process.env.DATABASE,
{
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

const options = {
    port: process.env.PORT,
    endpoint: `/${process.env.ENDPOINT}`,
    playground: `/${process.env.PLAYGROUND}`,
    // cors: {
    //     credential: true,
    //     // origin:["http://localhost:3000"]
    // }
}

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, process.env.SCHEMA),
    resolvers
});

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)