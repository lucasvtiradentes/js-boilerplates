import { gql } from 'apollo-server-express';
import usersJson from '../data/users.json';
import gendersJson from '../data/genders.json';

// parent args context
// parent : have the properties of its parents
// args   : have all the parameters that user has called the resolver
// context: have access to all passed context properties (objects/functions)

/*
  query Query {
    useContext
  }

  query {
    user(id: 2) {
      email
    }
  }

  query {
    gender(id: 2) {
      id
      gender
      users {
        email
      }
    }
  }
*/

export const typeDefs = gql`
  type Query {
    useContext: String
    user(id: ID!): User
    gender(id: ID!): Gender
  }

  type User {
    id: Int!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    ip_address: String!
  }

  type Gender {
    id: ID!
    gender: String!
    users: [User!]!
  }
`;

export const resolvers = {
  Query: {
    useContext: (_parent: any, _args: any, context: any) => context.hello(),
    user: (_parent: any, args: { id: number }) => usersJson.find((item) => item.id === Number(args.id)),
    gender: (_parent: any, args: { id: number }) => gendersJson.find((item) => item.id === Number(args.id))
  },

  Gender: {
    users: (parent: { id: number; gender: string }) => usersJson.filter((item) => item.gender === parent.gender)
  }
};
