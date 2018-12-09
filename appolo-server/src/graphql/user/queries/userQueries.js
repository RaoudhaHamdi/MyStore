import { gql } from 'apollo-server';

export const Query = gql`
  listuser: [User]
  user(id:ID!): User
`;
export const Resolvers = {
  listuser: (_, $, { models }) => models.User.find(),
  user: (_, { id }, { models }) => models.User.findById({ _id: id }),
};
