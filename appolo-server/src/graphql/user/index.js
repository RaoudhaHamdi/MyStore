import * as queries from './queries/userQueries';
import * as mutations from './mutations/userMutations';
import user from './types/userTypes';

export const { Query } = queries;
export const Type = user;
export const Mutation = mutations.userMutations;
export const Resolvers = {
  Query: queries.Resolvers,
  Mutation: mutations.Resolvers,
};
