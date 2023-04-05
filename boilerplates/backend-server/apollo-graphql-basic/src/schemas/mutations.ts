import { gql } from 'apollo-server-express';
import { readFileSync, writeFileSync } from 'fs';

export const typeDefs = gql`
  type Query {
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

  type Mutation {
    addGender(input: AddGenderInput!): Gender!
    removeGender(input: RemoveGenderInput!): Boolean!
  }

  input AddGenderInput {
    gender: String!
  }

  input RemoveGenderInput {
    id: Int!
  }
`;

export const resolvers = {
  Mutation: {
    addGender: (_parent: any, _args: any) => {
      const GENDERS_FILE = './src/data/genders.json';
      const OLD_GENDERS_CONTENT = JSON.parse(readFileSync(GENDERS_FILE).toString());
      const newId = Math.max(...OLD_GENDERS_CONTENT.map((item: any) => item.id)) + 1;
      const newGender = {
        id: newId,
        gender: _args.input.gender
      };

      const newContent = [...OLD_GENDERS_CONTENT, newGender];
      writeFileSync(GENDERS_FILE, JSON.stringify(newContent, null, 2));
      return newGender;
    },
    removeGender: (_parent: any, _args: any) => {
      const GENDERS_FILE = './src/data/genders.json';
      const OLD_GENDERS_CONTENT = JSON.parse(readFileSync(GENDERS_FILE).toString());
      const genderToDeleteIndex = OLD_GENDERS_CONTENT.findIndex((item: any) => item.id === _args.input.id);
      if (genderToDeleteIndex === -1) {
        return false;
      }

      OLD_GENDERS_CONTENT.splice(genderToDeleteIndex, 1);
      writeFileSync(GENDERS_FILE, JSON.stringify(OLD_GENDERS_CONTENT, null, 2));

      return true;
    }
  }
};
