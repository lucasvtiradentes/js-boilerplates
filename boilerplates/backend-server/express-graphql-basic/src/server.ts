import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schemas/schemas';

const PORT = 3000;
const server = express();

server.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
