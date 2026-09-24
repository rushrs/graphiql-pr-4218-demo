import { createServer } from 'node:http';
import { createSchema, createYoga } from 'graphql-yoga';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const yoga = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String!
      }

      type Subscription {
        countdown(from: Int! = 10): Int!
      }
    `,
    resolvers: {
      Query: {
        hello: () => 'GraphiQL HTTP works too',
      },
      Subscription: {
        countdown: {
          async *subscribe(_, { from }) {
            for (let value = from; value >= 0; value--) {
              yield { countdown: value };
              await sleep(1000);
            }
          },
        },
      },
    },
  }),
});

createServer(yoga).listen(4000, () => {
  console.log('GraphQL SSE server: http://localhost:4000/graphql');
});
