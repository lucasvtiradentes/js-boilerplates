/* eslint-disable @typescript-eslint/no-unused-vars */

import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { readFileSync, writeFileSync } from 'fs';
import userData from '../data/users.json';

const USER_DATA_FILE = './src/data/users.json';
let USER_DATA = JSON.parse(readFileSync(USER_DATA_FILE, { encoding: 'utf-8' })) || {};

/*
  query {
    getAllUsers {
      email
      gender
      first_name
      last_name
    }
  }

  mutation {
    createUser (first_name: "Lucas", last_name: "Vieira", email: "lucasvtiradentes@gmail.com", gender: "Male", ip_address: "111.111.111.11") {
      email
      last_name
    }
  }
*/

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLInt },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
    ip_address: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      resolve(_parent, _args) {
        return USER_DATA;
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        ip_address: { type: GraphQLString }
      },
      resolve(_parent, args) {
        const newUser = { id: userData.length + 1, first_name: args.first_name, last_name: args.last_name, email: args.email, gender: args.gender, ip_address: args.ip_address };
        const newUsers = [...userData, newUser];
        writeFileSync(USER_DATA_FILE, JSON.stringify(newUsers, null, 2), { encoding: 'utf-8' });
        USER_DATA = JSON.parse(readFileSync(USER_DATA_FILE, { encoding: 'utf-8' })) || {};
        return args;
      }
    }
  }
});

const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

export { schema };
