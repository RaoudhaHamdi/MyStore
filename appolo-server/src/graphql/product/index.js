import * as queries from './queries/productQueries';
import * as mutations from './mutations/productMutations';
import product from './types/productTypes';

export const { Query } = queries;
export const Type = product;
export const Mutation = mutations.productMutations;
export const Resolvers = {
  Query: queries.Resolvers,
  Mutation: mutations.Resolvers,
};
