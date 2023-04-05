import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { typeDefs, resolvers } from './schemas/mutations';

async function init() {
  const PORT = 3000;
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      hello: () => 'hi'
    }
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`express-apollo server running at port ${PORT}`);
  });
}

init();
