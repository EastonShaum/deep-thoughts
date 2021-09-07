

// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typedefs
const typedefs = gql`
    type Query {
        helloWorld: String
    }
`;

//export the typedefs
module.exports = typedefs;