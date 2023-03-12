const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id:ID!
        name:String!
        username:String!
        email:String!
        gender:String!
        country:String!
        favouriteMovie:[Movie]
    }

    type Movie{
        id:ID!
        movie:String!
        genre:String!
        release:Int!
    }

    type Query {
        msg:String!
        users:[User!]!
        user(id:ID!):User!  
        movies:[Movie!]!
        getMovie(release:Int!):[Movie!]!
    }

`;

module.exports = { typeDefs }