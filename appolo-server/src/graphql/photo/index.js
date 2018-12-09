import * as queries from './queries/photoQueries';
import * as mutations from './mutations/photoMutations';
import photo from './types/photoTypes';

export const { Query } = queries;
export const Type = photo;
export const Mutation = mutations.photoMutations;
export const Resolvers = {
  Query: queries.Resolvers,
  Mutation: mutations.Resolvers,
};
