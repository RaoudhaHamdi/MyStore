import { gql } from 'apollo-server';

export const Query = gql`
  listproduct: [Product]
  product: Product
`;

export const Resolvers = {
  listproduct: (_, $, { models }) => models.Product.find(),
  product: (_, { id }, { models }) => models.Product.findById({ _id: id }),
};
