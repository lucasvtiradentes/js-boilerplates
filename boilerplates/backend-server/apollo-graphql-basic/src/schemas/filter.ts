import { gql } from 'apollo-server-express';
import usersJson from '../data/users.json';

/*
  query Query {
    users(filter: { gender: "Male"}) {
      email
      gender
    }
  }

  query Query {
    users {
      email
      gender
    }
  }
*/

export const typeDefs = gql`
  type Query {
    users(filter: UsersFilterInput): [User!]!
  }

  type User {
    id: Int!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    ip_address: String!
  }

  input UsersFilterInput {
    gender: String!
  }
`;

export const resolvers = {
  Query: {
    users: (_parent: any, args: any) => {
      return args.filter ? usersJson.filter((item) => item.gender === args.filter.gender) : usersJson;
    }
  }
};
