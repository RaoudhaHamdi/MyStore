import { gql } from 'apollo-server';

export const Query = gql`
  listphoto: [Photo]
  photo(id:ID!): Photo
`;

export const Resolvers = {
  listphoto: (_, $, { models }) => models.Photo.find(),
  photo: (_, { id }, { models }) => models.Photo.findById({ _id: id }),
};
