import { gql } from 'apollo-server-express';
import usersJson from '../data/users.json';
/*
  query {
    users {
      email
    }
  }

  query {
    user(id: 1) {
      email
    }
  }
*/

export const typeDefs = gql`
  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type User {
    id: Int!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    ip_address: String!
  }
`;

export const resolvers = {
  Query: {
    users: () => usersJson,
    user: (_parent: any, args: { id: number }) => usersJson.find((item) => item.id === Number(args.id))
  }
};
