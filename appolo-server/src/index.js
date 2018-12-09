import { ApolloServer } from 'apollo-server';
import dbConnect from './db/connect';
import User from './db/models/user';
import Photo from './db/models/photo';
import Product from './db/models/product';
import schema from './graphql/schema';


dbConnect()
  .then(() => {
    const server = new ApolloServer({
      schema,
      context: () => ({
        models: {
          User,
          Photo,
          Product,
        },
      }),
    });
    server.listen().then(({ url }) => {
      // eslint-disable-next-line no-console
      console.log(`🚀  Server ready at ${url}`);
    });
  });
