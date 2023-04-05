import { gql } from 'apollo-server-express';

// scaler type: String, Int, Float, Boolean, ID!
// String -> accept null as return value as well
// String! -> dont accept null as return value
// [String] -> accept an array(string || null) or null
// [String!]! -> accept an array(string)

export const typeDefs = gql`
  type Query {
    hello: String
    animalsNumber: Int
    price: Float
    isCool: Boolean
  }
`;

export const resolvers = {
  Query: {
    hello: () => 'hi',
    animalsNumber: () => 53,
    price: () => 53.52,
    isCool: () => true
  }
};
